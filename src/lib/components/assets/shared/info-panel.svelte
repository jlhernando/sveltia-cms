<script>
  import { Button } from '@sveltia/ui';
  import { getPathInfo, saveFile } from '@sveltia/utils/file';
  import { sleep } from '@sveltia/utils/misc';
  import mime from 'mime';
  import { _, locale as appLocale } from 'svelte-i18n';

  import AssetPreview from '$lib/components/assets/shared/asset-preview.svelte';
  import LeafletMap from '$lib/components/common/leaflet-map.svelte';
  import { goto } from '$lib/services/app/navigation';
  import { defaultAssetDetails, getAssetBlob, getAssetDetails } from '$lib/services/assets/info';
  import { isMediaKind } from '$lib/services/assets/kinds';
  import { getCollectionLabel } from '$lib/services/contents/collection';
  import {
    getCollectionFileLabel,
    getCollectionFilesByEntry,
  } from '$lib/services/contents/collection/files';
  import { getAssociatedCollections } from '$lib/services/contents/entry';
  import { getEntrySummary } from '$lib/services/contents/entry/summary';
  import { DATE_TIME_FORMAT_OPTIONS } from '$lib/services/utils/date';
  import { formatSize } from '$lib/services/utils/file';
  import { formatDuration } from '$lib/services/utils/media/video';

  /**
   * @import { Asset, AssetDetails } from '$lib/types/private';
   */

  /**
   * @typedef {object} Props
   * @property {Asset} asset Asset.
   * @property {boolean} [showPreview] Whether to show the media preview.
   */

  /** @type {Props} */
  let {
    /* eslint-disable prefer-const */
    asset,
    showPreview = false,
    /* eslint-enable prefer-const */
  } = $props();

  /** @type {AssetDetails} */
  let details = $state({ ...defaultAssetDetails });

  // @todo Fetch file size and commit info on demand for GitLab
  const { path, size, kind, commitAuthor, commitDate } = $derived(asset);
  const { publicURL, repoBlobURL, dimensions, duration, createdDate, coordinates, usedEntries } =
    $derived(details);
  const { extension = '' } = $derived(getPathInfo(path));
  const canPreview = $derived(isMediaKind(kind) || path.endsWith('.pdf'));

  /**
   * Format the date to a localized string.
   * @param {Date} date Date to format.
   * @returns {string} Formatted date string.
   */
  const formatDate = (date) =>
    date.toLocaleString($appLocale ?? undefined, DATE_TIME_FORMAT_OPTIONS);

  /**
   * Update the properties above.
   */
  const updateProps = async () => {
    details = asset ? await getAssetDetails(asset) : { ...defaultAssetDetails };
  };

  /**
   * Download this asset.
   */
  const downloadAsset = async () => {
    const blob = await getAssetBlob(asset);

    saveFile(blob, asset.name);
  };

  /**
   * Copy the public URL to clipboard.
   */
  const copyURL = async () => {
    if (publicURL) {
      await navigator.clipboard.writeText(publicURL);
    } else {
      await navigator.clipboard.writeText(`/${path}`);
    }
  };

  $effect(() => {
    void [asset];
    updateProps();
  });
</script>

{#snippet usedEntryLink(
  /** @type {Record<string, string>} */ { link, collectionLabel, entryLabel },
)}
  <p>
    <Button role="link" variant="link" onclick={() => goto(link, { transitionType: 'forwards' })}>
      <span role="none">{collectionLabel} › {entryLabel}</span>
    </Button>
  </p>
{/snippet}

<div role="none" class="detail">
  {#if showPreview && canPreview}
    <div role="none" class="preview">
      <AssetPreview
        {kind}
        {asset}
        variant="tile"
        checkerboard={kind === 'image'}
        controls={['audio', 'video'].includes(kind)}
      />
    </div>
  {/if}

  <div role="none" class="properties-section">
    <h4 class="section-heading">FILE PROPERTIES</h4>
    <table class="props-table">
      <tbody>
        <tr>
          <td class="prop-label">{$_('name')}</td>
          <td class="prop-value">{asset.name}</td>
        </tr>
        <tr>
          <td class="prop-label">{$_('kind')}</td>
          <td class="prop-value">
            {$_(`file_type_labels.${extension}`, {
              default: mime.getType(path) ?? extension.toUpperCase(),
            })}
          </td>
        </tr>
        {#if !!size}
          <tr>
            <td class="prop-label">{$_('size')}</td>
            <td class="prop-value">
              {#key $appLocale}
                {formatSize(size)}
              {/key}
            </td>
          </tr>
        {/if}
        {#if canPreview}
          <tr>
            <td class="prop-label">{$_('dimensions')}</td>
            <td class="prop-value">
              {dimensions ? `${dimensions.width} × ${dimensions.height} px` : '–'}
            </td>
          </tr>
        {/if}
        {#if ['audio', 'video'].includes(kind)}
          <tr>
            <td class="prop-label">{$_('duration')}</td>
            <td class="prop-value">{duration ? formatDuration(duration) : '–'}</td>
          </tr>
        {/if}
        {#if commitDate}
          <tr>
            <td class="prop-label">Modified</td>
            <td class="prop-value">{formatDate(commitDate)}</td>
          </tr>
        {/if}
        <tr>
          <td class="prop-label">{$_('file_path')}</td>
          <td class="prop-value path">
            {#if repoBlobURL}
              <a href={repoBlobURL}>/{path}</a>
            {:else}
              /{path}
            {/if}
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div role="none" class="properties-section">
    <h4 class="section-heading">REFERENCES</h4>
    {#each usedEntries as entry (entry.id)}
      {#await sleep() then}
        {#each getAssociatedCollections(entry) as collection (collection.name)}
          {#key $appLocale}
            {@const collectionLabel = getCollectionLabel(collection)}
            {#each getCollectionFilesByEntry(collection, entry) as file (file.name)}
              {@render usedEntryLink({
                link: `/collections/${collection.name}/entries/${file.name}`,
                collectionLabel,
                entryLabel: getCollectionFileLabel(file),
              })}
            {:else}
              {@render usedEntryLink({
                link: `/collections/${collection.name}/entries/${entry.subPath}`,
                collectionLabel,
                entryLabel: getEntrySummary(collection, entry, { useTemplate: true }),
              })}
            {/each}
          {/key}
        {/each}
      {/await}
    {:else}
      <p class="no-refs">{$_('sort_keys.none')}</p>
    {/each}
  </div>

  {#if coordinates}
    <div role="none" class="properties-section">
      <h4 class="section-heading">{$_('location')}</h4>
      <LeafletMap {coordinates} />
    </div>
  {/if}

  <!-- Action buttons -->
  <div role="none" class="action-buttons">
    <button class="panel-action" onclick={() => downloadAsset()}>
      {$_('download')}
    </button>
    <button class="panel-action" onclick={() => copyURL()}>
      Copy URL
    </button>
    <button class="panel-action" onclick={() => {
      // Trigger replace - for now just open upload
    }}>
      Replace
    </button>
    <button class="panel-action delete" onclick={() => {
      // Trigger delete confirmation
    }}>
      {$_('delete')}
    </button>
  </div>
</div>

<style lang="scss">
  .detail {
    flex: auto;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 16px 16px 32px;
    width: 320px;

    .preview {
      overflow: hidden;
      margin: 0 0 16px;
      border-radius: 0;
      background-color: var(--sui-content-background-color);
      aspect-ratio: 1 / 1;
    }

    .section-heading {
      font-size: 0.6875rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: var(--sui-tertiary-foreground-color);
      margin: 0 0 12px;
      padding-bottom: 8px;
      border-bottom: 1px solid var(--sui-secondary-border-color);
    }

    .properties-section {
      margin-bottom: 20px;
    }

    .props-table {
      width: 100%;
      border-collapse: collapse;

      tr {
        td {
          padding: 4px 0;
          font-size: 0.8125rem;
          vertical-align: top;
        }

        .prop-label {
          color: var(--sui-secondary-foreground-color);
          font-weight: 500;
          width: 80px;
          padding-right: 12px;
          white-space: nowrap;
        }

        .prop-value {
          color: var(--sui-primary-foreground-color);
          word-break: break-all;

          &.path {
            font-size: 0.75rem;

            a {
              color: var(--sui-primary-accent-color);
              text-decoration: none;

              &:hover {
                text-decoration: underline;
              }
            }
          }
        }
      }
    }

    .no-refs {
      font-size: 0.8125rem;
      color: var(--sui-tertiary-foreground-color);
      margin: 0;
    }

    .action-buttons {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      margin-top: 20px;
      padding-top: 16px;
      border-top: 1px solid var(--sui-secondary-border-color);

      .panel-action {
        padding: 8px 12px;
        font-size: 0.8125rem;
        font-weight: 500;
        border: 1px solid var(--sui-control-border-color);
        border-radius: 0;
        background-color: var(--sui-secondary-background-color);
        color: var(--sui-primary-foreground-color);
        cursor: pointer;
        transition: background-color 150ms, border-color 150ms;

        &:hover {
          background-color: var(--sui-hover-background-color);
          border-color: var(--sui-primary-foreground-color);
        }

        &.delete {
          color: rgb(220 38 38);
          border-color: rgb(220 38 38 / 30%);

          &:hover {
            background-color: rgb(220 38 38 / 10%);
            border-color: rgb(220 38 38);
          }
        }
      }
    }
  }
</style>
