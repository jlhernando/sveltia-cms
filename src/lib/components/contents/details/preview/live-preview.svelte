<!--
  @component Live site preview that loads the actual website URL in an iframe.
  Uses the existing `preview_path` + `site_url` config to generate the URL.
-->
<script>
  import { Button, EmptyState, Icon } from '@sveltia/ui';
  import { _ } from 'svelte-i18n';

  import { entryDraft } from '$lib/services/contents/draft';
  import { getEntryPreviewURL } from '$lib/services/contents/entry';

  /**
   * @import { InternalLocaleCode } from '$lib/types/private';
   */

  /**
   * @typedef {object} Props
   * @property {InternalLocaleCode} locale Current pane's locale.
   */

  /** @type {Props} */
  let {
    /* eslint-disable prefer-const */
    locale,
    /* eslint-enable prefer-const */
  } = $props();

  const collection = $derived($entryDraft?.collection);
  const collectionFile = $derived($entryDraft?.collectionFile);
  const originalEntry = $derived($entryDraft?.originalEntry);

  const previewURL = $derived(
    collection && originalEntry && locale
      ? getEntryPreviewURL(originalEntry, locale, collection, collectionFile)
      : undefined,
  );

  let loading = $state(true);
  let refreshKey = $state(0);

  /** @type {HTMLIFrameElement | undefined} */
  let iframe = $state();

  const handleLoad = () => {
    loading = false;
  };

  const refresh = () => {
    loading = true;
    refreshKey += 1;
  };

  const openInNewTab = () => {
    if (previewURL) {
      window.open(previewURL, '_blank');
    }
  };
</script>

{#if previewURL}
  <div class="live-preview">
    <div class="live-preview-toolbar">
      <span class="url-display" title={previewURL}>{previewURL}</span>
      <div class="actions">
        <Button
          variant="ghost"
          iconic
          aria-label={$_('live_preview.refresh')}
          onclick={refresh}
        >
          {#snippet startIcon()}
            <Icon name="refresh" />
          {/snippet}
        </Button>
        <Button
          variant="ghost"
          iconic
          aria-label={$_('live_preview.open_in_new_tab')}
          onclick={openInNewTab}
        >
          {#snippet startIcon()}
            <Icon name="open_in_new" />
          {/snippet}
        </Button>
      </div>
    </div>
    <div class="iframe-container">
      {#if loading}
        <div class="loading-overlay">
          <Icon name="progress_activity" />
          <span>{$_('loading')}</span>
        </div>
      {/if}
      {#key refreshKey}
        <iframe
          class="live-site"
          src={previewURL}
          title={$_('live_preview.title')}
          sandbox="allow-same-origin allow-scripts allow-popups"
          bind:this={iframe}
          onload={handleLoad}
        ></iframe>
      {/key}
    </div>
  </div>
{:else if !originalEntry}
  <EmptyState>
    <span>{$_('live_preview.save_first')}</span>
  </EmptyState>
{:else}
  <EmptyState>
    <span>{$_('live_preview.not_configured')}</span>
  </EmptyState>
{/if}

<style lang="scss">
  .live-preview {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .live-preview-toolbar {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px 8px;
    border-bottom: 1px solid var(--sui-control-border-color);
    background-color: var(--sui-secondary-background-color);
    min-height: 32px;
  }

  .url-display {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: var(--sui-font-size-small);
    color: var(--sui-tertiary-foreground-color);
    font-family: var(--sui-font-family-monospace, monospace);
  }

  .actions {
    display: flex;
    gap: 2px;
    flex: none;
  }

  .iframe-container {
    flex: 1;
    position: relative;
  }

  .loading-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: var(--sui-primary-background-color);
    color: var(--sui-tertiary-foreground-color);
    z-index: 1;

    :global(.icon) {
      font-size: 24px;
      animation: spin 1s linear infinite;
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  iframe.live-site {
    display: block;
    border: none;
    width: 100%;
    height: 100%;
  }
</style>
