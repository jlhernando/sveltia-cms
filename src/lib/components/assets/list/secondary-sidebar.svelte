<script>
  import { Button, EmptyState, Group, Icon } from '@sveltia/ui';
  import { _ } from 'svelte-i18n';

  import InfoPanel from '$lib/components/assets/shared/info-panel.svelte';
  import { focusedAsset } from '$lib/services/assets';
  import { currentView } from '$lib/services/assets/view';
  import { isLargeScreen } from '$lib/services/user/env';
</script>

{#if $isLargeScreen && $currentView.showInfo}
  <Group id="asset-info" class="secondary-sidebar" aria-label={$_('asset_info')}>
    <div role="none" class="properties-header">
      <h3 class="properties-title">Properties</h3>
      <button
        class="close-btn"
        aria-label={$_('hide_info')}
        onclick={() => {
          currentView.update((view) => ({ ...view, showInfo: false }));
        }}
      >
        <Icon name="close" />
      </button>
    </div>
    {#if $focusedAsset}
      <InfoPanel asset={$focusedAsset} showPreview={true} />
    {:else}
      <EmptyState>
        <span role="none">{$_('select_asset_show_info')}</span>
      </EmptyState>
    {/if}
  </Group>
{/if}

<style lang="scss">
  .properties-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid var(--sui-secondary-border-color);

    .properties-title {
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--sui-primary-foreground-color);
      margin: 0;
    }

    .close-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      border: none;
      border-radius: 0;
      background: none;
      color: var(--sui-secondary-foreground-color);
      cursor: pointer;
      transition: color 150ms, background-color 150ms;

      &:hover {
        color: var(--sui-primary-foreground-color);
        background-color: var(--sui-hover-background-color);
      }

      :global(.sui.icon) {
        font-size: 18px;
      }
    }
  }
</style>
