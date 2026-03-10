<script>
  import {
    Button,
    FloatingActionButtonWrapper,
    Icon,
    Infobar,
    Spacer,
    Toolbar,
    TruncatedText,
  } from '@sveltia/ui';
  import { sanitize } from 'isomorphic-dompurify';
  import { marked } from 'marked';
  import { _, locale as appLocale } from 'svelte-i18n';

  import BackButton from '$lib/components/common/page-toolbar/back-button.svelte';
  import DeleteEntriesDialog from '$lib/components/contents/shared/delete-entries-dialog.svelte';
  import CreateEntryButton from '$lib/components/contents/toolbar/create-entry-button.svelte';
  import { goBack, goto } from '$lib/services/app/navigation';
  import { getCollectionLabel, selectedCollection } from '$lib/services/contents/collection';
  import { selectedEntries } from '$lib/services/contents/collection/entries';
  import { collectionState, listedEntries } from '$lib/services/contents/collection/view';
  import { isSmallScreen } from '$lib/services/user/env';

  let showDeleteDialog = $state(false);

  /**
   * Parse the given string as Markdown and sanitize the result to only allow certain tags.
   * @param {string} str Original string.
   * @returns {string} Sanitized string.
   */
  const _sanitize = (str) =>
    sanitize(/** @type {string} */ (marked.parseInline(str)), {
      ALLOWED_TAGS: ['strong', 'em', 'del', 'code', 'a'],
      ALLOWED_ATTR: ['href'],
    });

  const name = $derived($selectedCollection?.name ?? '');
  const description = $derived($selectedCollection?.description);
  const collectionLabel = $derived(
    // `$appLocale` is a key, because `getCollectionLabel` can return a localized label
    $appLocale && $selectedCollection ? getCollectionLabel($selectedCollection) : name,
  );
  const {
    isEntryCollection,
    canCreate,
    canDelete,
    quota,
    remaining,
    nearingQuota,
    creationDisabled,
  } = $derived($collectionState);
</script>

{#if $selectedCollection}
  <Toolbar variant="primary" aria-label={$_('collection')}>
    {#if $isSmallScreen}
      <BackButton
        aria-label={$_('back_to_collection_list')}
        onclick={() => {
          goBack('/collections');
        }}
      />
    {/if}
    {#if !$isSmallScreen}
      <nav aria-label="Breadcrumb" class="breadcrumb">
        <button
          class="breadcrumb-link"
          onclick={() => { goto('/collections', { transitionType: 'backwards' }); }}
        >
          {$_('collections')}
        </button>
        <Icon name="chevron_right" class="breadcrumb-sep" />
        <h2 role="none">{collectionLabel}</h2>
        {#if $listedEntries.length}
          <span class="entry-count">
            {$listedEntries.length === 1
              ? $_('one_entry')
              : $_('many_entries', { values: { count: $listedEntries.length } })}
          </span>
        {/if}
      </nav>
    {:else}
      <h2 role="none">
        {collectionLabel}
        {#if $listedEntries.length}
          <span class="entry-count">
            {$listedEntries.length === 1
              ? $_('one_entry')
              : $_('many_entries', { values: { count: $listedEntries.length } })}
          </span>
        {/if}
      </h2>
    {/if}
    {#if $isSmallScreen}
      <Spacer flex />
    {:else}
      <div role="none" class="description">
        <TruncatedText>
          {@html _sanitize(description || '')}
        </TruncatedText>
      </div>
    {/if}
    {#if isEntryCollection}
      {#if !$isSmallScreen}
        <Button
          variant="ghost"
          label={$_('delete')}
          aria-label={$selectedEntries.length === 1
            ? $_('delete_selected_entry')
            : $_('delete_selected_entries')}
          disabled={!$selectedEntries.length || !canDelete}
          onclick={() => {
            showDeleteDialog = true;
          }}
        />
      {/if}
      <FloatingActionButtonWrapper>
        {#if !$isSmallScreen || ($listedEntries.length && !creationDisabled)}
          <CreateEntryButton
            collectionName={name}
            label={$isSmallScreen ? undefined : $_('create')}
            keyShortcuts="Accel+E"
          />
        {/if}
      </FloatingActionButtonWrapper>
    {/if}
  </Toolbar>
  {#if isEntryCollection && (creationDisabled || nearingQuota)}
    <Infobar
      dismissible={false}
      --sui-infobar-border-width="1px 0"
      --sui-infobar-message-justify-content="center"
    >
      {#if !canCreate}
        {$_('creating_entries_disabled_by_admin')}
      {:else if creationDisabled}
        {$_('creating_entries_disabled_by_quota', { values: { quota } })}
      {:else if nearingQuota}
        {$_(`creating_entries_nearing_quota_${remaining === 1 ? 'singular' : 'plural'}`, {
          values: { quota, remaining },
        })}
      {/if}
    </Infobar>
  {/if}
{/if}

<DeleteEntriesDialog bind:open={showDeleteDialog} />

<style lang="scss">
  h2 {
    flex: none !important;
  }

  .breadcrumb {
    display: flex;
    align-items: center;
    gap: 2px;
    flex: none;

    :global(.icon.breadcrumb-sep) {
      font-size: 18px;
      opacity: 0.35;
    }
  }

  .breadcrumb-link {
    all: unset;
    cursor: pointer;
    font-size: var(--sui-font-size-small);
    color: var(--sui-secondary-foreground-color);
    letter-spacing: 0.2px;
    transition: color 150ms;

    &:hover {
      color: var(--sui-primary-accent-color);
    }

    &:focus-visible {
      outline: 2px solid var(--sui-primary-accent-color);
      outline-offset: 2px;
      border-radius: 2px;
    }
  }

  .entry-count {
    margin-inline-start: 8px;
    font-size: 12px;
    font-weight: 400;
    color: var(--sui-secondary-foreground-color);
    letter-spacing: 0.2px;
  }

  .description {
    flex: auto;
    font-size: var(--sui-font-size-small);
    opacity: 0.8;
  }
</style>
