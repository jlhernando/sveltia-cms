<script>
  import { Button, Checkbox, GridCell, GridRow, Icon, TruncatedText } from '@sveltia/ui';
  import { saveFile } from '@sveltia/utils/file';
  import { _ } from 'svelte-i18n';

  import AssetPreview from '$lib/components/assets/shared/asset-preview.svelte';
  import { goto } from '$lib/services/app/navigation';
  import { focusedAsset, selectedAssets } from '$lib/services/assets';
  import { getAssetBlob } from '$lib/services/assets/info';
  import { canPreviewAsset } from '$lib/services/assets/kinds';
  import { listedAssets } from '$lib/services/assets/view';
  import { formatSize } from '$lib/services/utils/file';
  import { isMediumScreen, isSmallScreen } from '$lib/services/user/env';

  /**
   * @import { Asset, ViewType } from '$lib/types/private';
   */

  /**
   * @typedef {object} Props
   * @property {Asset} asset Asset.
   * @property {ViewType} viewType View type.
   */

  /** @type {Props} */
  let {
    /* eslint-disable prefer-const */
    asset,
    viewType,
    /* eslint-enable prefer-const */
  } = $props();

  const { name, kind, size } = $derived(asset);
  const isSelected = $derived($selectedAssets.includes(asset));

  /**
   * Update the asset selection.
   * @param {boolean} selected Whether the current asset item is selected.
   */
  const updateSelection = (selected) => {
    selectedAssets.update((assets) => {
      const index = assets.indexOf(asset);

      if (selected && index === -1) {
        assets.push(asset);
      }

      if (!selected && index > -1) {
        assets.splice(index, 1);
      }

      return assets;
    });
  };

  /**
   * Open asset preview/details.
   */
  const openPreview = () => {
    if (canPreviewAsset(asset)) {
      goto(`/assets/${asset.path}`, { transitionType: 'forwards' });
    }
  };

  /**
   * Download this asset.
   */
  const downloadAsset = async () => {
    const blob = await getAssetBlob(asset);

    saveFile(blob, asset.name);
  };

  /**
   * Copy asset file path to clipboard.
   */
  const copyPath = async () => {
    await navigator.clipboard.writeText(`/${asset.path}`);
  };
</script>

<!-- @todo Add support for drag to move. -->

<GridRow
  aria-rowindex={$listedAssets.indexOf(asset)}
  onChange={(event) => {
    updateSelection(event.detail.selected);
  }}
  onfocus={() => {
    $focusedAsset = asset;
  }}
  onclick={() => {
    if (($isSmallScreen || $isMediumScreen) && $focusedAsset && canPreviewAsset($focusedAsset)) {
      goto(`/assets/${$focusedAsset.path}`, { transitionType: 'forwards' });
    }
  }}
  ondblclick={() => {
    if ($focusedAsset && canPreviewAsset($focusedAsset)) {
      goto(`/assets/${$focusedAsset.path}`, { transitionType: 'forwards' });
    }
  }}
>
  {#if !($isSmallScreen || $isMediumScreen)}
    <GridCell class="checkbox">
      <Checkbox
        role="none"
        tabindex="-1"
        checked={isSelected}
        onChange={({ detail: { checked } }) => {
          updateSelection(checked);
        }}
      />
    </GridCell>
  {/if}
  <GridCell class="image">
    <AssetPreview
      {kind}
      {asset}
      variant={viewType === 'list' ? 'icon' : 'tile'}
      cover={viewType === 'grid' || $isSmallScreen}
      checkerboard={kind === 'image'}
    />
    <!-- Hover action buttons overlay (grid view only) -->
    {#if viewType === 'grid' && !($isSmallScreen || $isMediumScreen)}
      <div role="none" class="hover-actions">
        <button
          class="action-btn"
          title={$_('preview')}
          onclick={(e) => { e.stopPropagation(); openPreview(); }}
        >
          <Icon name="visibility" />
        </button>
        <button
          class="action-btn"
          title={$_('download')}
          onclick={(e) => { e.stopPropagation(); downloadAsset(); }}
        >
          <Icon name="download" />
        </button>
        <button
          class="action-btn"
          title={$_('copy')}
          onclick={(e) => { e.stopPropagation(); copyPath(); }}
        >
          <Icon name="content_copy" />
        </button>
        <button
          class="action-btn delete"
          title={$_('delete')}
          onclick={(e) => { e.stopPropagation(); updateSelection(true); }}
        >
          <Icon name="delete" />
        </button>
      </div>
    {/if}
  </GridCell>
  {#if !$isSmallScreen || viewType === 'list'}
    <GridCell class="title">
      <div role="none" class="label">
        <TruncatedText lines={viewType === 'grid' ? 1 : 2}>
          {name}
        </TruncatedText>
      </div>
      {#if viewType === 'grid' && size}
        <div role="none" class="file-meta">
          {formatSize(size)}
        </div>
      {/if}
    </GridCell>
  {/if}
</GridRow>

<style lang="scss">
  .hover-actions {
    position: absolute;
    top: 8px;
    right: 8px;
    display: flex;
    gap: 4px;
    opacity: 0;
    transition: opacity 150ms;
    z-index: 3;

    :global(.grid-row:hover) & {
      opacity: 1;
    }
  }

  .action-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border: none;
    border-radius: 0;
    background-color: rgb(0 0 0 / 60%);
    color: white;
    cursor: pointer;
    transition: background-color 150ms;

    :global(.sui.icon) {
      font-size: 16px;
    }

    &:hover {
      background-color: rgb(0 0 0 / 80%);
    }

    &.delete:hover {
      background-color: rgb(220 38 38 / 80%);
    }
  }

  .file-meta {
    font-size: 0.6875rem;
    color: var(--sui-tertiary-foreground-color);
    padding: 0 12px 8px;
  }

  .label {
    word-break: break-all;
  }
</style>
