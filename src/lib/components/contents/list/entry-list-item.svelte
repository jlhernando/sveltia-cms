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
  import { DATE_FORMAT_OPTIONS, DATE_REGEX } from '$lib/services/utils/date';
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
    ['hsl(215 80% 90%)', 'hsl(215 70% 85%)'], // soft blue
    ['hsl(270 60% 90%)', 'hsl(270 50% 85%)'], // soft purple / lavender
    ['hsl(155 50% 88%)', 'hsl(155 45% 82%)'], // soft mint
    ['hsl(45 80% 90%)', 'hsl(45 70% 84%)'], // soft cream / yellow
    ['hsl(340 50% 90%)', 'hsl(340 45% 85%)'], // soft pink
    ['hsl(190 55% 88%)', 'hsl(190 50% 82%)'], // soft cyan
    ['hsl(25 70% 90%)', 'hsl(25 60% 85%)'], // soft peach
    ['hsl(235 55% 90%)', 'hsl(235 50% 85%)'], // soft indigo
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

  /** Common field names for category-like metadata. */
  const CATEGORY_FIELDS = ['category', 'categories', 'type', 'section', 'tag', 'tags'];
  /** Common field names for date metadata. */
  const DATE_FIELDS = ['date', 'publish_date', 'publishDate', 'created', 'created_at', 'createdAt'];

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
   * Get entry content for the default locale.
   * @param {Entry} e Entry object.
   * @param {InternalEntryCollection} col Collection.
   * @returns {Record<string, any> | undefined} Content map.
   */
  const getContent = (e, col) => {
    const locale = col._i18n.defaultLocale;

    return (e.locales[locale] ?? Object.values(e.locales)[0])?.content;
  };

  /**
   * Get a category-like value from the entry's content.
   * @param {Entry} e Entry object.
   * @param {InternalEntryCollection} col Collection.
   * @returns {string | undefined} Category label or undefined.
   */
  const getCategoryValue = (e, col) => {
    const content = getContent(e, col);

    if (!content) return undefined;

    for (const field of CATEGORY_FIELDS) {
      const val = content[field];

      if (typeof val === 'string' && val.trim()) return val.trim();

      if (Array.isArray(val) && val.length) {
        const first = val[0];

        if (typeof first === 'object' && first !== null) {
          return first.name || first.label || first.title || undefined;
        }

        return String(first);
      }
    }

    return undefined;
  };

  /**
   * Get a date value from the entry's content fields or commitDate.
   * @param {Entry} e Entry object.
   * @param {InternalEntryCollection} col Collection.
   * @returns {Date | undefined} Parsed date or undefined.
   */
  const getDateValue = (e, col) => {
    const content = getContent(e, col);

    if (content) {
      for (const field of DATE_FIELDS) {
        const val = content[field];

        if (val) {
          // For date-only strings (e.g. "2024-01-15"), append T00:00:00 to force
          // local-time parsing and avoid timezone-shifted display in negative-offset zones.
          const dateStr = typeof val === 'string' && DATE_REGEX.test(val) ? `${val}T00:00:00` : val;
          const d = new Date(dateStr);

          if (!Number.isNaN(d.getTime())) return d;
        }
      }
    }

    return e.commitDate ?? undefined;
  };

  const categoryLabel = $derived(getCategoryValue(entry, collection));
  const entryDate = $derived(getDateValue(entry, collection));
  const formattedDate = $derived(
    entryDate
      ? new Intl.DateTimeFormat($appLocale ?? 'en', DATE_FORMAT_OPTIONS).format(entryDate)
      : undefined,
  );

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
    {#if viewType === 'grid' && (categoryLabel || formattedDate)}
      <div role="none" class="meta">
        {#if categoryLabel}
          <span class="meta-category">{categoryLabel}</span>
        {/if}
        {#if categoryLabel && formattedDate}
          <span class="meta-sep">&middot;</span>
        {/if}
        {#if formattedDate}
          <span class="meta-date">{formattedDate}</span>
        {/if}
      </div>
    {/if}
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
      color: rgba(0, 0, 0, 0.08);
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
    gap: 4px;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.3px;
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
    padding: 2px 6px;
    border-radius: 4px;
    background-color: var(--sui-tertiary-background-color);
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.5px;
    color: var(--sui-secondary-foreground-color);
    text-transform: uppercase;
    flex-shrink: 0;
  }

  .meta {
    display: flex;
    align-items: center;
    gap: 6px;
    margin: 0 12px 8px;
    font-size: 11px;
    color: var(--sui-secondary-foreground-color);
    line-height: 1;
  }

  .meta-category {
    font-weight: 500;
    text-transform: capitalize;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 60%;
  }

  .meta-sep {
    opacity: 0.4;
  }

  .meta-date {
    opacity: 0.7;
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
