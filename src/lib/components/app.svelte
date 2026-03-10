<script>
  import { AppShell } from '@sveltia/ui';
  import { onMount } from 'svelte';
  import { isLoading } from 'svelte-i18n';

  import EntrancePage from '$lib/components/entrance/entrance-page.svelte';
  import BackendStatusIndicator from '$lib/components/global/infobars/backend-status-indicator.svelte';
  import UpdateNotification from '$lib/components/global/infobars/update-notification.svelte';
  import MainRouter from '$lib/components/global/main-router.svelte';
  import { appLogoType, appLogoURL, appTitle } from '$lib/services/app/branding';
  import { initAppLocale } from '$lib/services/app/i18n';
  import { announcedPageStatus, startViewTransition } from '$lib/services/app/navigation';
  import { backend } from '$lib/services/backends';
  import { cmsConfigLoaded, DEV_SITE_URL, initCmsConfig } from '$lib/services/config';
  import { dataLoaded } from '$lib/services/contents';
  import { user } from '$lib/services/user';
  import { initUserEnvDetection } from '$lib/services/user/env';

  /**
   * @import { CmsConfig } from '$lib/types/public';
   */

  /**
   * @typedef {object} Props
   * @property {CmsConfig} [config] Configuration specified with manual initialization.
   */

  /** @type {Props} */
  let {
    /* eslint-disable prefer-const */
    config,
    /* eslint-enable prefer-const */
  } = $props();

  onMount(() => {
    initAppLocale();
  });

  onMount(() => {
    initCmsConfig(config);
  });

  onMount(() => {
    initUserEnvDetection();
  });

  // Fix the position of the custom mount element if needed
  // @see https://decapcms.org/docs/custom-mounting/
  // @see https://sveltiacms.app/en/docs/customization#custom-mount-element
  onMount(() => {
    const ncRoot = /** @type {HTMLElement | null} */ (document.querySelector('#nc-root'));

    if (!!ncRoot && window.getComputedStyle(ncRoot).position === 'static') {
      // Wait for the next frame to ensure the element is rendered before calculating its position
      window.requestAnimationFrame(() => {
        const { top, height } = ncRoot.getBoundingClientRect();

        if (height) {
          ncRoot.style.position = 'relative';
        } else {
          // Make sure the CMS UI won’t overlap with a header
          ncRoot.style.position = 'fixed';
          ncRoot.style.inset = `${top}px 0 0 0`;
        }
      });
    }
  });

  let transitioned = $state(false);

  $effect(() => {
    if ($dataLoaded && $user) {
      startViewTransition('forwards', () => {
        transitioned = true;
      });
    } else {
      startViewTransition('backwards', () => {
        transitioned = false;
      });
    }
  });
</script>

<svelte:head>
  <meta name="referrer" content="same-origin" />
  <meta name="robots" content="noindex" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
    rel="stylesheet"
  />
  {#if $cmsConfigLoaded}
    <title>{$appTitle}</title>
    <link rel="icon" href={$appLogoURL} type={$appLogoType} />
  {/if}
  {#if DEV_SITE_URL}
    <link href="{DEV_SITE_URL}/admin/config.yml" type="application/yaml" rel="cms-config-url" />
  {/if}
</svelte:head>

<svelte:body
  onmousedown={(event) => {
    if (/** @type {HTMLElement | null} */ (event.target)?.matches('a')) {
      const link = /** @type {HTMLAnchorElement} */ (event.target);
      const { origin, pathname } = link;

      // Open external links and links to different paths in a new tab
      if (origin !== window.location.origin || pathname !== window.location.pathname) {
        link.target = '_blank';
      }
    }
  }}
/>

<AppShell>
  {#if !$isLoading}
    <div role="none" class="outer">
      <UpdateNotification />
      {#if $backend}
        <BackendStatusIndicator />
      {/if}
      <div role="none" class="main">
        {#if $user && $dataLoaded && transitioned}
          <MainRouter />
        {:else}
          <EntrancePage />
        {/if}
      </div>
    </div>
  {/if}
  <div role="status">{$announcedPageStatus}</div>
</AppShell>

<style lang="scss">
  // Spectrum Premium theme — Adobe Spectrum 2 inspired with glassmorphism accents
  :global {
    :root,
    :host {
      // Base hue: Spectrum Blue (213)
      --sui-base-hue: 213;

      // Font: Inter — clean, modern, matches Spectrum's professional feel
      --sui-font-family-default: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      --sui-font-weight-normal: 400;
      --sui-font-weight-bold: 600;

      // Rounded corners — Spectrum-style soft border-radius
      --sui-control-medium-border-radius: 6px;
      --sui-control-large-border-radius: 8px;
      --sui-button-medium-border-radius: 6px;

      // Accent colors: Spectrum Blue-500 (#2680eb)
      &[data-theme='light'] {
        --sui-primary-accent-color-text: hsl(211 84% 50%);
        --sui-primary-accent-color-light: hsl(211 84% 55%);
        --sui-primary-accent-color: hsl(211 84% 54%);
        --sui-primary-accent-color-dark: hsl(211 84% 46%);
        --sui-primary-accent-color-translucent: hsl(211 84% 54% / 8%);
        // Glass tokens (used by entrance, stats, editor overlay)
        --glass-bg: rgb(255 255 255 / 80%);
        --glass-border: rgb(0 0 0 / 8%);
        --glass-shadow: 0 4px 16px rgb(0 0 0 / 6%);
        --glass-gradient-bg: none;
      }

      &[data-theme='dark'] {
        --sui-primary-accent-color-text: hsl(211 90% 68%);
        --sui-primary-accent-color-light: hsl(211 90% 60%);
        --sui-primary-accent-color: hsl(211 90% 56%);
        --sui-primary-accent-color-dark: hsl(211 90% 48%);
        --sui-primary-accent-color-translucent: hsl(211 90% 56% / 18%);
        --glass-bg: rgb(30 30 30 / 80%);
        --glass-border: rgb(255 255 255 / 8%);
        --glass-shadow: 0 4px 16px rgb(0 0 0 / 20%);
        --glass-gradient-bg: none;
      }

      --glass-blur: blur(16px);

      // Icon rail: Dark background (Spectrum dark theme)
      --enterprise-nav-bg: #1a1a1a;
      --enterprise-nav-text: #b3b3b3;
      --enterprise-nav-active: #f5f5f5;
      --enterprise-nav-border: rgb(255 255 255 / 8%);
    }
  }

  @view-transition {
    navigation: auto;
  }

  @keyframes slide-out-to-left {
    from {
      transform: translateX(0);
      filter: brightness(1);
    }

    to {
      transform: translateX(-20%);
      filter: brightness(0.5);
    }
  }

  @keyframes slide-out-to-right {
    from {
      transform: translateX(0);
      opacity: 1;
    }

    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }

  @keyframes slide-in-from-right {
    from {
      transform: translateX(100%);
      opacity: 0;
    }

    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slide-in-from-left {
    from {
      transform: translateX(-20%);
      filter: brightness(0.5);
    }

    to {
      transform: translateX(0);
      filter: brightness(1);
    }
  }

  // RTL-specific keyframes that mirror the depth effect
  @keyframes slide-out-to-left-rtl {
    from {
      transform: translateX(0);
      opacity: 1;
    }

    to {
      transform: translateX(-100%);
      opacity: 0;
    }
  }

  @keyframes slide-out-to-right-rtl {
    from {
      transform: translateX(0);
      filter: brightness(1);
    }

    to {
      transform: translateX(20%);
      filter: brightness(0.5);
    }
  }

  @keyframes slide-in-from-right-rtl {
    from {
      transform: translateX(20%);
      filter: brightness(0.5);
    }

    to {
      transform: translateX(0);
      filter: brightness(1);
    }
  }

  @keyframes slide-in-from-left-rtl {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }

    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  :global {
    html:active-view-transition-type(forwards) {
      @media (width < 768px) {
        &::view-transition-old(page-root) {
          z-index: 999;
          animation: 100ms ease-in both slide-out-to-left;

          @media (prefers-reduced-motion) {
            animation: none;
          }
        }

        &::view-transition-new(page-root) {
          @media (width < 768px) {
            z-index: 1000;
            animation: 100ms ease-in both slide-in-from-right;
          }

          @media (prefers-reduced-motion) {
            animation: none;
          }
        }

        &:dir(rtl) {
          &::view-transition-old(page-root) {
            animation: 100ms ease-in both slide-out-to-right-rtl;
          }

          &::view-transition-new(page-root) {
            animation: 100ms ease-in both slide-in-from-left-rtl;
          }
        }
      }
    }

    html:active-view-transition-type(backwards) {
      @media (width < 768px) {
        &::view-transition-old(page-root) {
          z-index: 1000;
          animation: 100ms ease-in both slide-out-to-right;

          @media (prefers-reduced-motion) {
            animation: none;
          }
        }

        &::view-transition-new(page-root) {
          z-index: 999;
          animation: 100ms ease-in both slide-in-from-left;

          @media (prefers-reduced-motion) {
            animation: none;
          }
        }

        &:dir(rtl) {
          &::view-transition-old(page-root) {
            animation: 100ms ease-in both slide-out-to-left-rtl;
          }

          &::view-transition-new(page-root) {
            animation: 100ms ease-in both slide-in-from-right-rtl;
          }
        }
      }
    }

    html:active-view-transition-type(unknown) {
      &::view-transition-old(page-root) {
        animation: none;
      }

      &::view-transition-new(page-root) {
        animation: none;
      }
    }

    body:not(:has(#nc-root)) {
      overflow: hidden;
    }

    #nc-root > .sui.app-shell {
      position: absolute;
    }
  }

  .outer {
    display: flex;
    flex-direction: column;
    position: absolute;
    inset: 0;
    overflow: hidden;
  }

  .main {
    position: relative;
    flex: auto;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background-color: var(--sui-secondary-background-color);
  }

  [role='status'] {
    position: absolute;
    z-index: -1;
    opacity: 0;
    pointer-events: none;
    -webkit-user-select: none;
    user-select: none;
  }
</style>
