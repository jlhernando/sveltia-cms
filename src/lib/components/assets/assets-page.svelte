<script>
  import { Alert, Toast } from '@sveltia/ui';
  import { sleep } from '@sveltia/utils/misc';
  import equal from 'fast-deep-equal';
  import { onMount } from 'svelte';
  import { _, locale as appLocale } from 'svelte-i18n';

  import AssetDetailsOverlay from '$lib/components/assets/details/asset-details-overlay.svelte';
  import EditAssetDialog from '$lib/components/assets/details/edit-asset-dialog.svelte';
  import RenameAssetDialog from '$lib/components/assets/details/rename-asset-dialog.svelte';
  import AssetList from '$lib/components/assets/list/asset-list.svelte';
  import PrimarySidebar from '$lib/components/assets/list/primary-sidebar.svelte';
  import PrimaryToolbar from '$lib/components/assets/list/primary-toolbar.svelte';
  import SecondarySidebar from '$lib/components/assets/list/secondary-sidebar.svelte';
  import PageContainer from '$lib/components/common/page-container.svelte';
  import {
    announcedPageStatus,
    goto,
    parseLocation,
    updateContentFromHashChange,
  } from '$lib/services/app/navigation';
  import { allAssets, overlaidAsset } from '$lib/services/assets';
  import { assetUpdatesToast } from '$lib/services/assets/data';
  import { allAssetFolders, selectedAssetFolder } from '$lib/services/assets/folders';
  import {
    getFolderLabelByCollection,
    listedAssets,
    showAssetOverlay,
  } from '$lib/services/assets/view';
  import { formatSize } from '$lib/services/utils/file';
  import { isSmallScreen } from '$lib/services/user/env';

  const ROUTE_REGEX = /^\/assets(?:\/(?<folderPath>.+?)(?:\/(?<fileName>[^/]+\.[A-Za-z0-9]+))?)?$/;

  let isIndexPage = $state(false);

  const selectedAssetFolderLabel = $derived(
    $appLocale && $selectedAssetFolder ? getFolderLabelByCollection($selectedAssetFolder) : '',
  );

  // Compute stats for summary cards
  const totalAssetCount = $derived($allAssets.length);
  const imageCount = $derived($allAssets.filter((a) => a.kind === 'image').length);
  const videoCount = $derived($allAssets.filter((a) => a.kind === 'video').length);
  const totalStorageBytes = $derived($allAssets.reduce((sum, a) => sum + (a.size || 0), 0));

  const imagePercent = $derived(
    totalAssetCount > 0 ? ((imageCount / totalAssetCount) * 100).toFixed(1) : '0',
  );
  const videoPercent = $derived(
    totalAssetCount > 0 ? ((videoCount / totalAssetCount) * 100).toFixed(1) : '0',
  );

  /**
   * Navigate to the asset list or asset details page given the URL hash.
   * @todo Show Not Found page.
   */
  const navigate = async () => {
    const { path } = parseLocation();
    const match = path.match(ROUTE_REGEX);

    isIndexPage = false;

    if (!match?.groups) {
      return; // Different page
    }

    const { folderPath, fileName } = match.groups;

    if (!folderPath) {
      if ($isSmallScreen) {
        // Show the asset folder list only
        $selectedAssetFolder = undefined;
        $announcedPageStatus = $_('viewing_asset_folder_list');
        isIndexPage = true;
      } else {
        // Redirect to All Assets
        goto('/assets/-/all');
      }

      return;
    }

    const folder =
      window.history.state?.folder ??
      $allAssetFolders.find(({ internalPath, collectionName }) =>
        folderPath === '-/all'
          ? internalPath === undefined && collectionName === undefined
          : internalPath === folderPath,
      );

    if (!folder) {
      // Not found
      $selectedAssetFolder = undefined;
    } else if (!equal($selectedAssetFolder, folder)) {
      $selectedAssetFolder = folder;
    }

    if (!fileName) {
      const count = $listedAssets.length;

      // Wait for `selectedAssetFolderLabel` to be updated
      await sleep(100);

      $announcedPageStatus = $_(
        count > 1
          ? 'viewing_x_asset_folder_many_assets'
          : count === 1
            ? 'viewing_x_asset_folder_one_asset'
            : 'viewing_x_asset_folder_no_assets',
        { values: { folder: selectedAssetFolderLabel, count } },
      );

      return;
    }

    $overlaidAsset = fileName
      ? $allAssets.find((asset) => asset.path === `${folderPath}/${fileName}`)
      : undefined;
    $announcedPageStatus = $overlaidAsset
      ? $_('viewing_x_asset_details', { values: { name: $overlaidAsset.name } })
      : $_('file_not_found');
    $showAssetOverlay = true;
  };

  onMount(() => {
    navigate();
  });
</script>

<svelte:window
  onhashchange={(event) => {
    updateContentFromHashChange(event, navigate, ROUTE_REGEX);
  }}
/>

<PageContainer aria-label={$_('asset_library')}>
  {#snippet primarySidebar()}
    {#if !$isSmallScreen || isIndexPage}
      <PrimarySidebar />
    {/if}
  {/snippet}
  {#snippet main()}
    {#if !$isSmallScreen || !isIndexPage}
      <div role="group" class="carbon-assets-main" id="assets-container"
        aria-label={$_('x_asset_folder', { values: { folder: selectedAssetFolderLabel } })}
      >
        <PrimaryToolbar />
        <!-- Summary stat cards -->
        {#if !$isSmallScreen && $listedAssets.length}
          <div role="none" class="stat-cards">
            <div class="stat-card">
              <div class="stat-label">TOTAL ASSETS</div>
              <div class="stat-value">{totalAssetCount}</div>
              <div class="stat-sub">{$_('assets')}</div>
            </div>
            <div class="stat-card">
              <div class="stat-label">IMAGES</div>
              <div class="stat-value">{imageCount}</div>
              <div class="stat-sub">{imagePercent}%</div>
            </div>
            <div class="stat-card">
              <div class="stat-label">VIDEOS</div>
              <div class="stat-value">{videoCount}</div>
              <div class="stat-sub">{videoPercent}%</div>
            </div>
            <div class="stat-card">
              <div class="stat-label">STORAGE USED</div>
              <div class="stat-value">
                {#key $appLocale}
                  {formatSize(totalStorageBytes)}
                {/key}
              </div>
              <div class="stat-sub">{$_('assets')}</div>
            </div>
          </div>
        {/if}
        <!-- Asset grid/list -->
        <div role="none" class="carbon-main-inner">
          <div role="none" class="carbon-main-content">
            <AssetList />
          </div>
          <SecondarySidebar />
        </div>
      </div>
    {/if}
  {/snippet}
</PageContainer>

{#if $showAssetOverlay}
  <AssetDetailsOverlay />
{/if}

<EditAssetDialog />
<RenameAssetDialog />

<Toast bind:show={$assetUpdatesToast.saved}>
  <Alert status="success">
    {$_(
      $assetUpdatesToast.published
        ? $assetUpdatesToast.count === 1
          ? 'asset_saved_and_published'
          : 'assets_saved_and_published'
        : $assetUpdatesToast.count === 1
          ? 'asset_saved'
          : 'assets_saved',
      {
        values: { count: $assetUpdatesToast.count },
      },
    )}
  </Alert>
</Toast>

<Toast bind:show={$assetUpdatesToast.moved}>
  <Alert status="success">
    {$_($assetUpdatesToast.count === 1 ? 'asset_moved' : 'assets_moved', {
      values: { count: $assetUpdatesToast.count },
    })}
  </Alert>
</Toast>

<Toast bind:show={$assetUpdatesToast.renamed}>
  <Alert status="success">
    {$_($assetUpdatesToast.count === 1 ? 'asset_renamed' : 'assets_renamed', {
      values: { count: $assetUpdatesToast.count },
    })}
  </Alert>
</Toast>

<Toast bind:show={$assetUpdatesToast.deleted}>
  <Alert status="success">
    {$_($assetUpdatesToast.count === 1 ? 'asset_deleted' : 'assets_deleted', {
      values: { count: $assetUpdatesToast.count },
    })}
  </Alert>
</Toast>

<style lang="scss">
  .carbon-assets-main {
    flex: auto;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background-color: var(--sui-primary-background-color);
  }

  .stat-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    padding: 16px 24px;
    background-color: var(--sui-primary-background-color);

    .stat-card {
      padding: 16px 20px;
      border: 1px solid var(--sui-secondary-border-color);
      border-radius: 0;
      background-color: var(--sui-secondary-background-color);

      .stat-label {
        font-size: 0.6875rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        color: var(--sui-tertiary-foreground-color);
        margin-bottom: 4px;
      }

      .stat-value {
        font-size: 1.75rem;
        font-weight: 300;
        color: var(--sui-primary-foreground-color);
        line-height: 1.2;
      }

      .stat-sub {
        font-size: 0.75rem;
        color: var(--sui-tertiary-foreground-color);
        margin-top: 2px;
      }
    }
  }

  .carbon-main-inner {
    flex: auto;
    display: flex;
    overflow: hidden;

    .carbon-main-content {
      flex: auto;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    :global(.secondary-sidebar) {
      flex: none;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      width: 320px;
      background-color: var(--sui-secondary-background-color);
      border-inline-start: 1px solid var(--sui-secondary-border-color);
    }
  }
</style>
