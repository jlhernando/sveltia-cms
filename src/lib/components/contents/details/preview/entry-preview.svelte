<script>
  import { _ } from 'svelte-i18n';

  import VisibilityObserver from '$lib/components/common/visibility-observer.svelte';
  import EntryPreviewIframe from '$lib/components/contents/details/preview/entry-preview-iframe.svelte';
  import FieldPreview from '$lib/components/contents/details/preview/field-preview.svelte';
  import LivePreview from '$lib/components/contents/details/preview/live-preview.svelte';
  import { entryDraft } from '$lib/services/contents/draft';
  import {
    customPreviewStyleRegistry,
    previewMode,
    previewViewport,
    VIEWPORT_PRESETS,
  } from '$lib/services/contents/editor';

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

  const fields = $derived($entryDraft?.fields ?? []);
  const viewport = $derived(VIEWPORT_PRESETS[$previewViewport]);
  const isConstrained = $derived($previewViewport !== 'desktop');
  const isLiveMode = $derived($previewMode === 'live');
</script>

{#snippet children()}
  {#each fields as fieldConfig (fieldConfig.name)}
    <VisibilityObserver>
      <FieldPreview
        keyPath={fieldConfig.name}
        typedKeyPath={fieldConfig.name}
        {locale}
        {fieldConfig}
      />
    </VisibilityObserver>
  {/each}
{/snippet}

<div
  class="preview-viewport"
  class:constrained={isConstrained}
  style:--viewport-width={isConstrained ? `${viewport.width}px` : '100%'}
>
  {#if isConstrained}
    <div class="viewport-label">{$_(viewport.label)} — {viewport.width}×{viewport.height}</div>
  {/if}
  <div class="viewport-frame" class:constrained={isConstrained}>
    {#if isLiveMode}
      <LivePreview {locale} />
    {:else}
      <VisibilityObserver>
        {#if customPreviewStyleRegistry.size}
          <EntryPreviewIframe {locale} styleURLs={[...customPreviewStyleRegistry]} {children} />
        {:else}
          <div role="document" aria-label={$_('content_preview')}>
            {@render children()}
          </div>
        {/if}
      </VisibilityObserver>
    {/if}
  </div>
</div>

<style lang="scss">
  .preview-viewport {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;

    &.constrained {
      padding: 12px;
      background-color: var(--sui-secondary-background-color);
    }
  }

  .viewport-label {
    flex: none;
    margin-bottom: 8px;
    font-size: var(--sui-font-size-small);
    color: var(--sui-tertiary-foreground-color);
  }

  .viewport-frame {
    width: 100%;
    height: 100%;
    overflow: auto;

    &.constrained {
      width: var(--viewport-width);
      max-width: 100%;
      border: 1px solid var(--sui-control-border-color);
      border-radius: 8px;
      background-color: var(--sui-primary-background-color);
      box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
    }
  }

  [role='document'] {
    --entry-preview-padding-block: 8px;
    --entry-preview-padding-inline: 16px;
    padding-block: var(--entry-preview-padding-block);
    padding-inline: var(--entry-preview-padding-inline);
  }
</style>
