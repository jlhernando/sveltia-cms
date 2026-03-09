<script>
  import { Icon } from '@sveltia/ui';
  import { _ } from 'svelte-i18n';

  import { allEntries } from '$lib/services/contents';
  import {
    entriesByWorkflowStatus,
    workflowEnabled,
  } from '$lib/services/contents/workflow';

  const totalCount = $derived($allEntries.length);
  const readyCount = $derived($entriesByWorkflowStatus.ready.length);
  const draftCount = $derived($entriesByWorkflowStatus.draft.length);
  const reviewCount = $derived($entriesByWorkflowStatus.in_review.length);

  const cards = $derived([
    {
      label: $_('entries'),
      value: totalCount,
      icon: 'inventory_2',
      cssClass: 'total',
    },
    {
      label: $_('status.ready'),
      value: readyCount,
      icon: 'check_circle',
      cssClass: 'ready',
    },
    {
      label: $_('status.drafts'),
      value: draftCount,
      icon: 'edit_note',
      cssClass: 'draft',
    },
    {
      label: $_('status.in_review'),
      value: reviewCount,
      icon: 'rate_review',
      cssClass: 'review',
    },
  ]);
</script>

{#if $workflowEnabled && totalCount > 0}
  <div role="region" aria-label={$_('entries')} class="stats-dashboard">
    {#each cards as card}
      <div class="stat-card {card.cssClass}">
        <div class="stat-icon">
          <Icon name={card.icon} />
        </div>
        <div class="stat-content">
          <span class="stat-value">{card.value}</span>
          <span class="stat-label">{card.label}</span>
        </div>
      </div>
    {/each}
  </div>
{/if}

<style lang="scss">
  .stats-dashboard {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    padding: 16px 16px 0;
    flex-shrink: 0;

    @media (width < 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (width < 640px) {
      grid-template-columns: 1fr;
      gap: 8px;
      padding: 8px 8px 0;
    }
  }

  .stat-card {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px;
    border-radius: 12px;
    border: 1px solid var(--glass-border);
    background-color: var(--glass-bg);
    backdrop-filter: var(--glass-blur);
    -webkit-backdrop-filter: var(--glass-blur);
    box-shadow: var(--glass-shadow);
  }

  .stat-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    flex-shrink: 0;

    :global(.icon) {
      font-size: 20px;
    }

    .total & {
      background-color: var(--sui-primary-accent-color-translucent);
      color: var(--sui-primary-accent-color);
    }

    .ready & {
      background-color: color-mix(in srgb, var(--sui-success-foreground-color, #10b981) 15%, transparent);
      color: var(--sui-success-foreground-color, #10b981);
    }

    .draft & {
      background-color: color-mix(in srgb, var(--sui-warning-foreground-color, #f59e0b) 15%, transparent);
      color: var(--sui-warning-foreground-color, #f59e0b);
    }

    .review & {
      background-color: color-mix(in srgb, var(--sui-primary-accent-color) 15%, transparent);
      color: var(--sui-primary-accent-color);
    }
  }

  .stat-content {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }

  .stat-value {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.2px;
    color: var(--sui-primary-foreground-color);
  }

  .stat-label {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.3px;
    color: var(--sui-secondary-foreground-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
