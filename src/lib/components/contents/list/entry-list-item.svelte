<script>
  import { Checkbox, GridCell, GridRow, Icon, TruncatedText } from '@sveltia/ui';
  import { _, locale as appLocale } from 'svelte-i18n';

  import Image from '$lib/components/assets/shared/image.svelte';
  import { goto } from '$lib/services/app/navigation';
  import { selectedEntries } from '$lib/services/contents/collection/entries';
  import {
    getIndexFile,
    isCollectionIndexFile,
  } from '$lib/services/contents/collection/index-file';
  import { listedEntries } from '$lib/services/contents/collection/view';
  import { getEntryThumbnail } from '$lib/services/contents/entry/assets';
  import { getEntrySummary } from '$lib/services/contents/entry/summary';
  import { workflowStatuses } from '$lib/services/contents/workflow';
  import { isMediumScreen, isSmallScreen } from '$lib/services/user/env';

  /**
   * @import { Entry, InternalEntryCollection, ViewType } from '$lib/types/private';
   */

  /**
   * Gradient palette for collection card thumbnails. Each collection name hashes to a gradient.
   * @type {string[][]}
   */
  const GRADIENTS = [
    ['#3b82f6', '#1d4ed8'], // blue
    ['#8b5cf6', '#6d28d9'], // purple
    ['#10b981', '#059669'], // emerald
    ['#f59e0b', '#d97706'], // amber
    ['#ec4899', '#db2777'], // pink
    ['#06b6d4', '#0891b2'], // cyan
    ['#f97316', '#ea580c'], // orange
    ['#6366f1', '#4f46e5'], // indigo
  ];

  /**
   * Get a gradient for a collection name based on simple string hash.
   * @param {string} name Collection name.
   * @returns {string} CSS gradient string.
   */
  const getCollectionGradient = (name) => {
    let hash = 0;

    for (let i = 0; i < name.length; i += 1) {
      hash = (hash * 31 + name.charCodeAt(i)) | 0;
    }

    const [from, to] = GRADIENTS[Math.abs(hash) % GRADIENTS.length];

    return `linear-gradient(135deg, ${from}, ${to})`;
  };

  /** Status i18n key map. */
  const STATUS_I18N_KEYS = { draft: 'status.drafts', in_review: 'status.in_review', ready: 'status.ready' };

  /**
   * @typedef {object} Props
   * @property {InternalEntryCollection} collection Selected collection.
   * @property {Entry} entry Entry.
   * @property {ViewType} viewType View type.
   */

  /** @type {Props} */
  let {
    /* eslint-disable prefer-const */
    collection,
    entry,
    viewType,
    /* eslint-enable prefer-const */
  } = $props();

  const gradient = $derived(getCollectionGradient(collection.name));
  const collectionIcon = $derived(collection.icon || 'bookmark_manager');
  const localeKeys = $derived(Object.keys(entry.locales));
  const workflowStatus = $derived($workflowStatuses?.get?.(entry.id) ?? 'draft');

  /**
   * Update the entry selection.
   * @param {boolean} selected Whether the current entry item is selected.
   */
  const updateSelection = (selected) => {
    selectedEntries.update((entries) => {
      const index = entries.indexOf(entry);

      if (selected && index === -1) {
        entries.push(entry);
      }

      if (!selected && index > -1) {
        entries.splice(index, 1);
      }

      return entries;
    });
  };
</script>

{#snippet gradientThumb()}
  <div
    class="gradient-thumb"
    class:list-mode={viewType === 'list'}
    style:background={gradient}
  >
    <Icon name={collectionIcon} />
  </div>
{/snippet}

<GridRow
  aria-rowindex={$listedEntries.indexOf(entry)}
  onChange={(event) => {
    updateSelection(event.detail.selected);
  }}
  onclick={() => {
    goto(`/collections/${collection.name}/entries/${entry.subPath}`, {
      transitionType: 'forwards',
    });
  }}
>
  {#if !($isSmallScreen || $isMediumScreen)}
    <GridCell class="checkbox">
      <Checkbox
        role="none"
        tabindex="-1"
        checked={$selectedEntries.includes(entry)}
        onChange={({ detail: { checked } }) => {
          updateSelection(checked);
        }}
      />
    </GridCell>
  {/if}
  <GridCell class="image">
    {#if collection._thumbnailFieldNames.length}
      {#await getEntryThumbnail(collection, entry) then src}
        {#if src}
          <Image {src} variant={viewType === 'list' ? 'icon' : 'tile'} cover />
        {:else}
          {@render gradientThumb()}
        {/if}
      {/await}
    {:else}
      {@render gradientThumb()}
    {/if}
  </GridCell>
  <GridCell class="title">
    <div role="none" class="label">
      <TruncatedText lines={2}>
        {#key $appLocale}
          {@html getEntrySummary(collection, entry, { useTemplate: true, allowMarkdown: true })}
        {/key}
        {#if isCollectionIndexFile(collection, entry)}
          <Icon name={getIndexFile(collection)?.icon} class="home" />
        {/if}
      </TruncatedText>
    </div>
  </GridCell>
  <GridCell class="card-footer">
    <span class="status-badge status-{workflowStatus}">
      <span class="status-dot"></span>
      {$_(STATUS_I18N_KEYS[workflowStatus] || 'status.drafts')}
    </span>
    {#if localeKeys.length > 1}
      <span class="locale-tags">
        {#each localeKeys as locale}
          <span class="locale-tag">{locale}</span>
        {/each}
      </span>
    {/if}
  </GridCell>
</GridRow>

<style lang="scss">
  .gradient-thumb {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    aspect-ratio: 4 / 3;

    :global(.icon) {
      font-size: 40px;
      color: rgba(255, 255, 255, 0.6);
    }

    &.list-mode {
      aspect-ratio: unset;
      width: 32px;
      height: 32px;
      border-radius: 6px;

      :global(.icon) {
        font-size: 16px;
      }
    }
  }

  .status-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: var(--sui-secondary-foreground-color);
    flex-shrink: 0;
  }

  .status-dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .status-draft .status-dot {
    background-color: var(--sui-warning-foreground-color, #f59e0b);
  }

  .status-in_review .status-dot {
    background-color: var(--sui-primary-accent-color, #3b82f6);
  }

  .status-ready .status-dot {
    background-color: var(--sui-success-foreground-color, #10b981);
  }

  .locale-tags {
    display: inline-flex;
    gap: 4px;
    margin-inline-start: auto;
    overflow: hidden;
    flex-wrap: nowrap;
  }

  .locale-tag {
    display: inline-block;
    padding: 1px 6px;
    border-radius: 4px;
    background-color: var(--sui-tertiary-background-color);
    font-size: 10px;
    font-weight: 500;
    color: var(--sui-secondary-foreground-color);
    text-transform: uppercase;
    flex-shrink: 0;
  }

  .label {
    :global {
      .icon.home {
        opacity: 0.5;
        font-size: 20px;
        vertical-align: -4px;
      }
    }
  }
</style>
