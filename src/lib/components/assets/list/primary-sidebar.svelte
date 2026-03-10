<script>
  import { Icon, Listbox, Option, OptionGroup } from '@sveltia/ui';
  import { sleep } from '@sveltia/utils/misc';
  import equal from 'fast-deep-equal';
  import { _, locale as appLocale } from 'svelte-i18n';

  import QuickSearchBar from '$lib/components/global/toolbar/items/quick-search-bar.svelte';
  import { goto } from '$lib/services/app/navigation';
  import { allAssets, getAssetsByFolder } from '$lib/services/assets';
  import { allAssetFolders, selectedAssetFolder } from '$lib/services/assets/folders';
  import { getFolderLabelByCollection } from '$lib/services/assets/view';
  import { getCollection, getCollectionIndex } from '$lib/services/contents/collection';
  import {
    getCollectionFile,
    getCollectionFileIndex,
  } from '$lib/services/contents/collection/files';
  import { isSmallScreen } from '$lib/services/user/env';

  const numberFormatter = $derived(Intl.NumberFormat($appLocale ?? undefined));

  const folders = $derived([
    ...$allAssetFolders
      .filter(({ typedKeyPath }) => typedKeyPath === undefined)
      .sort(
        (a, b) =>
          getCollectionFileIndex(a.collectionName, a.fileName) -
          getCollectionFileIndex(b.collectionName, b.fileName),
      )
      .sort((a, b) => getCollectionIndex(a.collectionName) - getCollectionIndex(b.collectionName)),
  ]);

  // Split folders into asset types (All Assets, Global Assets) and directories (with internalPath)
  const assetTypeFolders = $derived(
    folders.filter(({ collectionName }) => collectionName === undefined),
  );

  const directoryFolders = $derived(
    folders.filter(({ collectionName }) => collectionName !== undefined),
  );

  // Compute asset counts by kind
  const imageCount = $derived($allAssets.filter((a) => a.kind === 'image').length);
  const videoCount = $derived($allAssets.filter((a) => a.kind === 'video').length);
  const documentCount = $derived(
    $allAssets.filter((a) => a.kind === 'document' || a.kind === 'other').length,
  );
</script>

<div role="none" class="primary-sidebar">
  {#if $isSmallScreen}
    <header>
      <h2>{$_('assets')}</h2>
    </header>
  {/if}
  <QuickSearchBar
    onclick={$isSmallScreen
      ? (event) => {
          event.preventDefault();
          goto('/search');
        }
      : undefined}
  />
  <Listbox aria-label={$_('asset_folder_list')} aria-controls="assets-container">
    <OptionGroup label="ASSET TYPES">
      {#each assetTypeFolders as folder ([folder.collectionName, folder.fileName, folder.internalPath].join(':'))}
        {#await sleep() then}
          {@const { collectionName, fileName, internalPath, entryRelative, hasTemplateTags } =
            folder}
          {@const collection = collectionName ? getCollection(collectionName) : undefined}
          {@const collectionFile =
            collection && fileName ? getCollectionFile(collection, fileName) : undefined}
          {@const uploadDisabled = entryRelative || hasTemplateTags}
          {@const selected = equal($selectedAssetFolder, folder)}
          <Option
            selected={$isSmallScreen ? false : selected}
            label={$appLocale ? getFolderLabelByCollection(folder) : ''}
            onSelect={() => {
              goto(`/assets/${internalPath ?? '-/all'}`, {
                transitionType: 'forwards',
                state: { folder },
              });
            }}
            ondragover={(event) => {
              event.preventDefault();

              if (uploadDisabled) {
                return;
              }

              if (internalPath === undefined || selected) {
                /** @type {DataTransfer} */ (event.dataTransfer).dropEffect = 'none';
              } else {
                /** @type {DataTransfer} */ (event.dataTransfer).dropEffect = 'move';
                /** @type {HTMLElement} */ (event.target).classList.add('dragover');
              }
            }}
            ondragleave={(event) => {
              event.preventDefault();

              if (uploadDisabled) {
                return;
              }

              /** @type {HTMLElement} */ (event.target).classList.remove('dragover');
            }}
            ondragend={(event) => {
              event.preventDefault();

              if (uploadDisabled) {
                return;
              }

              /** @type {HTMLElement} */ (event.target).classList.remove('dragover');
            }}
            ondrop={(event) => {
              event.preventDefault();

              if (uploadDisabled) {
                return;
              }

              /** @type {HTMLElement} */ (event.target).classList.remove('dragover');
            }}
          >
            {#snippet startIcon()}
              <Icon name={collectionFile?.icon || collection?.icon || 'folder'} />
            {/snippet}
            {#snippet endIcon()}
              {#key $allAssets}
                {#await sleep() then}
                  {@const count = (
                    internalPath !== undefined ? getAssetsByFolder(folder) : $allAssets
                  ).length}
                  <span
                    class="count"
                    aria-label="({$_(
                      count > 1 ? 'many_assets' : count === 1 ? 'one_asset' : 'no_assets',
                      { values: { count } },
                    )})"
                  >
                    {numberFormatter.format(count)}
                  </span>
                {/await}
              {/key}
            {/snippet}
          </Option>
        {/await}
      {/each}
      <!-- Synthetic type filter entries -->
      <div role="none" class="type-stats">
        <div class="type-stat-row">
          <Icon name="image" />
          <span class="type-label">{$_('image')}</span>
          <span class="type-count">{numberFormatter.format(imageCount)}</span>
        </div>
        <div class="type-stat-row">
          <Icon name="videocam" />
          <span class="type-label">{$_('video')}</span>
          <span class="type-count">{numberFormatter.format(videoCount)}</span>
        </div>
        <div class="type-stat-row">
          <Icon name="description" />
          <span class="type-label">{$_('document')}</span>
          <span class="type-count">{numberFormatter.format(documentCount)}</span>
        </div>
      </div>
    </OptionGroup>
    {#if directoryFolders.length}
      <OptionGroup label="DIRECTORIES">
        {#each directoryFolders as folder ([folder.collectionName, folder.fileName, folder.internalPath].join(':'))}
          {#await sleep() then}
            {@const { collectionName, fileName, internalPath, entryRelative, hasTemplateTags } =
              folder}
            {@const collection = collectionName ? getCollection(collectionName) : undefined}
            {@const collectionFile =
              collection && fileName ? getCollectionFile(collection, fileName) : undefined}
            {@const uploadDisabled = entryRelative || hasTemplateTags}
            {@const selected = equal($selectedAssetFolder, folder)}
            <Option
              selected={$isSmallScreen ? false : selected}
              label={$appLocale ? getFolderLabelByCollection(folder) : ''}
              onSelect={() => {
                goto(`/assets/${internalPath ?? '-/all'}`, {
                  transitionType: 'forwards',
                  state: { folder },
                });
              }}
              ondragover={(event) => {
                event.preventDefault();

                if (uploadDisabled) {
                  return;
                }

                if (internalPath === undefined || selected) {
                  /** @type {DataTransfer} */ (event.dataTransfer).dropEffect = 'none';
                } else {
                  /** @type {DataTransfer} */ (event.dataTransfer).dropEffect = 'move';
                  /** @type {HTMLElement} */ (event.target).classList.add('dragover');
                }
              }}
              ondragleave={(event) => {
                event.preventDefault();

                if (uploadDisabled) {
                  return;
                }

                /** @type {HTMLElement} */ (event.target).classList.remove('dragover');
              }}
              ondragend={(event) => {
                event.preventDefault();

                if (uploadDisabled) {
                  return;
                }

                /** @type {HTMLElement} */ (event.target).classList.remove('dragover');
              }}
              ondrop={(event) => {
                event.preventDefault();

                if (uploadDisabled) {
                  return;
                }

                /** @type {HTMLElement} */ (event.target).classList.remove('dragover');
              }}
            >
              {#snippet startIcon()}
                <Icon name={collectionFile?.icon || collection?.icon || 'folder'} />
              {/snippet}
              {#snippet endIcon()}
                {#key $allAssets}
                  {#await sleep() then}
                    {@const count = (
                      internalPath !== undefined ? getAssetsByFolder(folder) : $allAssets
                    ).length}
                    <span
                      class="count"
                      aria-label="({$_(
                        count > 1 ? 'many_assets' : count === 1 ? 'one_asset' : 'no_assets',
                        { values: { count } },
                      )})"
                    >
                      {numberFormatter.format(count)}
                    </span>
                  {/await}
                {/key}
              {/snippet}
            </Option>
          {/await}
        {/each}
      </OptionGroup>
    {/if}
  </Listbox>
</div>

<style lang="scss">
  .type-stats {
    padding: 4px 12px 8px;

    .type-stat-row {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 8px;
      font-size: 0.8125rem;
      color: var(--sui-secondary-foreground-color);

      :global(.sui.icon) {
        font-size: 16px;
        opacity: 0.5;
      }

      .type-label {
        flex: auto;
        text-transform: capitalize;
      }

      .type-count {
        font-size: 0.75rem;
        font-weight: 500;
        color: var(--sui-tertiary-foreground-color);
      }
    }
  }
</style>
