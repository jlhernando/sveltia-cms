<script>
  import { Button, Divider, Icon, Spacer, Toolbar } from '@sveltia/ui';
  import { _ } from 'svelte-i18n';

  import FilterMenu from '$lib/components/common/page-toolbar/filter-menu.svelte';
  import GroupMenu from '$lib/components/common/page-toolbar/group-menu.svelte';
  import ItemSelector from '$lib/components/common/page-toolbar/item-selector.svelte';
  import SortMenu from '$lib/components/common/page-toolbar/sort-menu.svelte';
  import ViewSwitcher from '$lib/components/common/page-toolbar/view-switcher.svelte';
  import { getAssetFolder } from '$lib/services/assets/folders';
  import { selectedCollection } from '$lib/services/contents/collection';
  import { selectedEntries } from '$lib/services/contents/collection/entries';
  import { currentView, entryGroups, listedEntries } from '$lib/services/contents/collection/view';
  import { viewFilters } from '$lib/services/contents/collection/view/filter';
  import { viewGroups } from '$lib/services/contents/collection/view/group';
  import { sortKeys } from '$lib/services/contents/collection/view/sort-keys';
  import { activeStatusFilter, workflowEnabled } from '$lib/services/contents/workflow';
  import { isMediumScreen, isSmallScreen } from '$lib/services/user/env';

  /**
   * @import { InternalEntryCollection } from '$lib/types/private';
   */

  const entryCollection = $derived(
    $selectedCollection?._type === 'entry'
      ? /** @type {InternalEntryCollection} */ ($selectedCollection)
      : undefined,
  );
  const collectionName = $derived(entryCollection?.name);
  const thumbnailFieldNames = $derived(entryCollection?._thumbnailFieldNames ?? []);
  const hasListedEntries = $derived(!!$listedEntries.length);
  const hasMultipleEntries = $derived($listedEntries.length > 1);

  /** @type {{ key: string, i18nKey: string }[]} */
  const statusFilters = [
    { key: 'all', i18nKey: 'all' },
    { key: 'ready', i18nKey: 'status.ready' },
    { key: 'draft', i18nKey: 'status.drafts' },
    { key: 'in_review', i18nKey: 'status.in_review' },
  ];
</script>

{#if entryCollection}
  <Toolbar variant="secondary" aria-label={$_('entry_list')}>
    {#if !($isSmallScreen || $isMediumScreen)}
      <ItemSelector
        allItems={$entryGroups.map(({ entries }) => entries).flat(1)}
        selectedItems={selectedEntries}
      />
    {/if}
    {#if $workflowEnabled}
      <div role="none" class="status-pills">
        {#each statusFilters as { key, i18nKey }}
          <button
            class="status-pill"
            class:active={$activeStatusFilter === key}
            aria-pressed={$activeStatusFilter === key}
            onclick={() => activeStatusFilter.set(key)}
          >
            {$_(i18nKey)}
          </button>
        {/each}
      </div>
    {/if}
    <Spacer flex />
    <SortMenu
      disabled={!hasMultipleEntries || !$sortKeys.length}
      {currentView}
      sortKeys={$sortKeys}
      {collectionName}
      aria-controls="entry-list"
    />
    {#if $viewFilters?.length}
      <FilterMenu
        disabled={!hasMultipleEntries}
        {currentView}
        filters={$viewFilters}
        multiple={true}
        aria-controls="entry-list"
      />
    {/if}
    {#if $viewGroups?.length}
      <GroupMenu
        disabled={!hasMultipleEntries}
        {currentView}
        groups={$viewGroups}
        aria-controls="entry-list"
      />
    {/if}
    {#if thumbnailFieldNames.length}
      <ViewSwitcher disabled={!hasListedEntries} {currentView} aria-controls="entry-list" />
    {/if}
    {#if !($isSmallScreen || $isMediumScreen)}
      <Divider orientation="vertical" />
      <Button
        variant="ghost"
        iconic
        disabled={!hasListedEntries || !getAssetFolder({ collectionName })}
        pressed={!!$currentView.showMedia}
        aria-controls="collection-assets"
        aria-expanded={$currentView.showMedia}
        aria-label={$_($currentView.showMedia ? 'hide_assets' : 'show_assets')}
        onclick={() => {
          currentView.update((view) => ({
            ...view,
            showMedia: !$currentView.showMedia,
          }));
        }}
      >
        {#snippet startIcon()}
          <Icon name="photo_library" />
        {/snippet}
      </Button>
    {/if}
  </Toolbar>
{/if}

<style lang="scss">
  .status-pills {
    display: flex;
    gap: 4px;
    padding: 0 8px;
  }

  .status-pill {
    appearance: none;
    border: 1px solid var(--sui-control-border-color);
    border-radius: 20px;
    padding: 4px 14px;
    font-size: var(--sui-font-size-small);
    font-family: var(--sui-font-family-default);
    font-weight: 500;
    background-color: transparent;
    color: var(--sui-secondary-foreground-color);
    cursor: pointer;
    white-space: nowrap;
    transition: background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease;

    &:hover {
      background-color: var(--sui-hover-background-color);
      border-color: var(--sui-primary-accent-color-translucent);
    }

    &.active {
      background-color: var(--sui-primary-accent-color);
      color: white;
      border-color: var(--sui-primary-accent-color);
    }
  }
</style>
