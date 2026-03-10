<script>
  import { _ } from 'svelte-i18n';

  import AccountButton from '$lib/components/global/toolbar/items/account-button.svelte';
  import HelpButton from '$lib/components/global/toolbar/items/help-button.svelte';
  import PageSwitcher from '$lib/components/global/toolbar/items/page-switcher.svelte';
  import SiteLogo from '$lib/components/global/toolbar/items/site-logo.svelte';
  import { prefs } from '$lib/services/user/prefs';
</script>

<nav
  class="spectrum-rail"
  aria-label={$_('global')}
>
  <div role="none" class="rail-logo">
    <SiteLogo />
  </div>
  <div role="none" class="rail-nav">
    <PageSwitcher />
  </div>
  <div role="none" class="rail-spacer"></div>
  <div role="none" class="rail-bottom">
    {#if $prefs.devModeEnabled}
      <HelpButton />
    {/if}
    <AccountButton />
  </div>
</nav>

<style lang="scss">
  .spectrum-rail {
    width: 48px;
    background: var(--enterprise-nav-bg);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px 0;
    gap: 4px;
    flex-shrink: 0;
    z-index: 10;
  }

  .rail-logo {
    width: 32px;
    height: 32px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, hsl(211 84% 54%), hsl(260 80% 60%));
    border-radius: 8px;
    overflow: hidden;

    :global {
      .sui.button {
        color: white !important;
        border-radius: 8px;
        width: 32px;
        height: 32px;

        img {
          width: 20px;
          height: 20px;
          filter: brightness(0) invert(1);
        }
      }
    }
  }

  .rail-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;

    :global {
      .sui.select-button-group {
        flex-direction: column;
        gap: 4px;
      }

      .sui.button {
        width: 36px;
        height: 36px;
        border-radius: 6px;
        color: var(--enterprise-nav-text);
        position: relative;

        &:hover {
          color: var(--enterprise-nav-active);
          background: rgba(255, 255, 255, 0.08);
        }

        &[aria-pressed='true'] {
          color: var(--enterprise-nav-active);
          background: rgba(255, 255, 255, 0.12);

          &::before {
            content: '';
            position: absolute;
            left: -6px;
            width: 3px;
            height: 20px;
            background: var(--sui-primary-accent-color);
            border-radius: 0 3px 3px 0;
          }
        }
      }
    }
  }

  .rail-spacer {
    flex: 1;
  }

  .rail-bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    margin-top: 8px;

    :global {
      .sui.button,
      .sui.menu-button > button {
        width: 36px;
        height: 36px;
        border-radius: 6px;
        color: var(--enterprise-nav-text);

        &:hover {
          color: var(--enterprise-nav-active);
          background: rgba(255, 255, 255, 0.08);
        }
      }

      // Style the avatar in the rail
      img.avatar {
        width: 24px !important;
        height: 24px !important;
        border-radius: 50%;
      }
    }
  }
</style>
