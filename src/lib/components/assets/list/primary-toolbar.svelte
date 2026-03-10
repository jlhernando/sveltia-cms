<script>
  import { Button, FloatingActionButtonWrapper, Icon, Spacer, TextInput, Toolbar } from '@sveltia/ui';
  import { _, locale as appLocale } from 'svelte-i18n';

  import CopyAssetsButton from '$lib/components/assets/toolbar/copy-assets-button.svelte';
  import DeleteAssetsButton from '$lib/components/assets/toolbar/delete-assets-button.svelte';
  import DownloadAssetsButton from '$lib/components/assets/toolbar/download-assets-button.svelte';
  import EditOptionsButton from '$lib/components/assets/toolbar/edit-options-button.svelte';
  import PreviewAssetButton from '$lib/components/assets/toolbar/preview-asset-button.svelte';
  import UploadAssetsButton from '$lib/components/assets/toolbar/upload-assets-button.svelte';
  import BackButton from '$lib/components/common/page-toolbar/back-button.svelte';
  import FilterMenu from '$lib/components/common/page-toolbar/filter-menu.svelte';
  import SortMenu from '$lib/components/common/page-toolbar/sort-menu.svelte';
  import ViewSwitcher from '$lib/components/common/page-toolbar/view-switcher.svelte';
  import { goBack } from '$lib/services/app/navigation';
  import { allAssets, focusedAsset, selectedAssets } from '$lib/services/assets';
  import {
    canCreateAsset,
    selectedAssetFolder,
    targetAssetFolder,
  } from '$lib/services/assets/folders';
  import { ASSET_KINDS } from '$lib/services/assets/kinds';
  import {
    currentView,
    getFolderLabelByCollection,
    listedAssets,
  } from '$lib/services/assets/view';
  import { sortKeys } from '$lib/services/assets/view/sort-keys';
  import { isMediumScreen, isSmallScreen } from '$lib/services/user/env';

  const assets = $derived.by(() => {
    if ($selectedAssets.length) return $selectedAssets;
    if ($focusedAsset) return [$focusedAsset];
    return [];
  });

  const uploadDisabled = $derived(!canCreateAsset($targetAssetFolder));
  const hasListedAssets = $derived(!!$listedAssets.length);
  const hasMultipleAssets = $derived($listedAssets.length > 1);

  let searchQuery = $state('');

  // Active tab filter for asset type
  let activeTab = $state('all');

  const tabItems = [
    { id: 'all', label: 'All' },
    { id: 'image', label: 'Images' },
    { id: 'video', label: 'Videos' },
    { id: 'document', label: 'Documents' },
    { id: 'audio', label: 'Audio' },
  ];

  // Sync activeTab with the currentView filter
  $effect(() => {
    const filter = $currentView.filter;

    if (filter?.pattern && typeof filter.pattern === 'string') {
      activeTab = filter.pattern;
    } else {
      activeTab = 'all';
    }
  });

  /**
   * Handle tab click.
   * @param {string} tabId Tab identifier.
   */
  const handleTabClick = (tabId) => {
    activeTab = tabId;

    if (tabId === 'all') {
      currentView.update((view) => ({ ...view, filter: undefined }));
    } else {
      currentView.update((view) => ({
        ...view,
        filter: { field: 'fileType', pattern: tabId },
      }));
    }
  };
</script>

<div role="none" class="carbon-toolbar-area">
  <!-- Breadcrumb -->
  <div role="navigation" class="breadcrumb" aria-label="Breadcrumb">
    <a
      href={'#/assets'}
      class="breadcrumb-link"
      onclick={(e) => {
        e.preventDefault();
      }}
    >
      {$_('assets')}
    </a>
    <span class="breadcrumb-separator">›</span>
    <span class="breadcrumb-current">
      {#key $appLocale}
        {$selectedAssetFolder ? getFolderLabelByCollection($selectedAssetFolder) : ''}
      {/key}
    </span>
  </div>

  <!-- Title row with search and actions -->
  <div role="none" class="title-row">
    {#if $isSmallScreen}
      <BackButton
        aria-label={$_('back_to_asset_folder_list')}
        onclick={() => {
          goBack('/assets');
        }}
      />
    {/if}
    <h2 role="none" class="page-title">
      {#key $appLocale}
        {$selectedAssetFolder ? getFolderLabelByCollection($selectedAssetFolder) : ''}
      {/key}
      {#if !$isSmallScreen}
        <span class="title-count">({$listedAssets.length})</span>
      {/if}
    </h2>
    <Spacer flex />
    {#if !$isSmallScreen}
      <div role="none" class="search-container">
        <Icon name="search" />
        <input
          type="text"
          class="search-input"
          placeholder="Search assets..."
          bind:value={searchQuery}
        />
      </div>
      <FilterMenu
        label={$_('filter')}
        disabled={!hasMultipleAssets}
        {currentView}
        noneLabel={$_('all')}
        filters={ASSET_KINDS.map((type) => ({
          label: $_(type),
          field: 'fileType',
          pattern: type,
        }))}
        aria-controls="asset-list"
      />
      <SortMenu
        disabled={!hasMultipleAssets}
        {currentView}
        sortKeys={$sortKeys}
        aria-controls="asset-list"
      />
      <ViewSwitcher disabled={!hasListedAssets} {currentView} aria-controls="asset-list" />
    {/if}
    <FloatingActionButtonWrapper>
      {#if !$isSmallScreen || ($listedAssets.length && !uploadDisabled)}
        <UploadAssetsButton label={$isSmallScreen ? undefined : $_('upload')} />
      {/if}
    </FloatingActionButtonWrapper>
  </div>

  <!-- Tab navigation -->
  {#if !$isSmallScreen}
    <div role="tablist" class="tab-bar" aria-label="Asset type filter">
      {#each tabItems as tab (tab.id)}
        <button
          role="tab"
          class="tab-item"
          class:active={activeTab === tab.id}
          aria-selected={activeTab === tab.id}
          onclick={() => handleTabClick(tab.id)}
        >
          {tab.label}
        </button>
      {/each}
    </div>
  {/if}
</div>

<style lang="scss">
  .carbon-toolbar-area {
    display: flex;
    flex-direction: column;
    background-color: var(--sui-secondary-background-color);
    border-bottom: 1px solid var(--sui-secondary-border-color);
  }

  .breadcrumb {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 12px 24px 0;
    font-size: 0.8125rem;
    color: var(--sui-tertiary-foreground-color);

    .breadcrumb-link {
      color: var(--sui-primary-accent-color);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    .breadcrumb-separator {
      color: var(--sui-tertiary-foreground-color);
    }

    .breadcrumb-current {
      color: var(--sui-secondary-foreground-color);
    }
  }

  .title-row {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 24px 12px;

    @media (width < 768px) {
      padding: 8px 12px;
    }

    .page-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--sui-primary-foreground-color);
      margin: 0;
      white-space: nowrap;

      .title-count {
        font-weight: 400;
        color: var(--sui-tertiary-foreground-color);
      }
    }
  }

  .search-container {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 12px;
    height: 32px;
    min-width: 200px;
    max-width: 320px;
    border: 1px solid var(--sui-control-border-color);
    border-radius: 0;
    background-color: var(--sui-primary-background-color);
    flex: 1;

    :global(.sui.icon) {
      font-size: 16px;
      color: var(--sui-tertiary-foreground-color);
    }

    .search-input {
      border: none;
      background: transparent;
      outline: none;
      font-size: 0.8125rem;
      color: var(--sui-primary-foreground-color);
      width: 100%;
      height: 100%;

      &::placeholder {
        color: var(--sui-tertiary-foreground-color);
      }
    }
  }

  .tab-bar {
    display: flex;
    gap: 0;
    padding: 0 24px;
    border-top: 1px solid var(--sui-secondary-border-color);

    .tab-item {
      padding: 10px 16px;
      font-size: 0.8125rem;
      font-weight: 500;
      color: var(--sui-secondary-foreground-color);
      background: none;
      border: none;
      border-bottom: 2px solid transparent;
      cursor: pointer;
      transition: color 150ms, border-color 150ms;
      white-space: nowrap;

      &:hover {
        color: var(--sui-primary-foreground-color);
      }

      &.active {
        color: var(--sui-primary-accent-color);
        border-bottom-color: var(--sui-primary-accent-color);
      }
    }
  }
</style>
