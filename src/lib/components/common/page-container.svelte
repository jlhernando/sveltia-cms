<script>
  import { Button, Icon } from '@sveltia/ui';
  import { hasOverlay, sidebarCollapsed } from '$lib/services/app/navigation';
  import { isSmallScreen } from '$lib/services/user/env';

  /**
   * @import { Snippet } from 'svelte';
   */

  /**
   * @typedef {object} Props
   * @property {string} [class] CSS class name on the button.
   * @property {Snippet} [primarySidebar] Primary sidebar content.
   * @property {Snippet} [main] Main content.
   */

  /** @type {Props & Record<string, any>} */
  let {
    /* eslint-disable prefer-const */
    class: className = '',
    primarySidebar = undefined,
    main = undefined,
    ...rest
    /* eslint-enable prefer-const */
  } = $props();
</script>

<div
  role="group"
  id="page-container"
  class="outer {className}"
  class:sidebar-collapsed={$sidebarCollapsed}
  inert={$hasOverlay}
  {...rest}
>
  {@render primarySidebar?.()}
  {#if !$isSmallScreen}
    <button
      class="sidebar-toggle"
      aria-label={$sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      onclick={() => sidebarCollapsed.update((v) => !v)}
    >
      <span class="toggle-icon">{$sidebarCollapsed ? '\u203A' : '\u2039'}</span>
    </button>
  {/if}
  {@render main?.()}
</div>

<style lang="scss">
  .outer {
    flex: auto;
    display: flex;
    overflow: hidden;
    position: relative;

    &[inert] {
      display: none;
    }

    :global {
      .primary-sidebar {
        display: flex;
        flex-direction: column;
        flex: none;
        width: 250px;
        overflow-y: auto;
        overflow-x: hidden;
        background-color: var(--enterprise-nav-bg);
        color: var(--enterprise-nav-text);
        border-right: 1px solid var(--enterprise-nav-border);
        transition: width 0.25s ease;

        @media (width < 768px) {
          flex: auto;
          width: auto;
          background-color: var(--sui-primary-background-color);
          color: var(--sui-primary-foreground-color);
          border-right: none;
        }

        // Mobile header
        header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 10px;
          height: var(--sui-primary-toolbar-size);

          h2 {
            padding: 0 10px;
            font-size: var(--sui-font-size-x-large);
          }
        }

        .sui.search-bar {
          margin-inline: 12px;
          --sui-textbox-background-color: var(--enterprise-search-bg);
          --sui-textbox-border-color: var(--enterprise-search-border);
          --sui-textbox-foreground-color: var(--enterprise-nav-active);

          @media (width < 768px) {
            --sui-textbox-background-color: var(--sui-tertiary-background-color);
            --sui-textbox-border-color: var(--sui-control-border-color);
            --sui-textbox-foreground-color: var(--sui-control-foreground-color);
          }
        }

        // Section labels in sidebar (Collections, Quick Access)
        .sui.option-group-label {
          padding: 10px 20px 8px;
          font-size: var(--sui-font-size-x-small);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--enterprise-nav-section-label);

          @media (width < 768px) {
            color: var(--sui-tertiary-foreground-color);
          }
        }

        [role='radiogroup'] {
          width: 100%;
        }

        [role='listbox'] {
          margin: 8px;
          border-width: 0;
          background-color: transparent;

          button {
            display: flex;
            justify-content: flex-start;
            border-radius: var(--sui-control-medium-border-radius);
            width: 100%;
            text-align: start;
            color: var(--enterprise-nav-text);

            @media (width < 768px) {
              color: var(--sui-primary-foreground-color);
            }

            &:not(:first-child) {
              margin-top: 4px;
            }

            &:not(:focus) {
              border-color: transparent;
            }

            &:hover {
              background-color: var(--enterprise-nav-border);
              color: var(--enterprise-nav-text-hover);

              @media (width < 768px) {
                background-color: var(--sui-hover-background-color);
                color: var(--sui-primary-foreground-color);
              }
            }

            span {
              flex: none;
            }

            .label {
              flex: auto;
              overflow: hidden;
            }

            .icon {
              transition: color 200ms;
              opacity: 0.5;
            }

            .icon.check {
              display: none;
            }

            .count {
              padding: 2px;
              color: var(--enterprise-nav-section-label);
              font-size: var(--sui-font-size-small);
              transition: color 200ms;

              @media (width < 768px) {
                color: var(--sui-tertiary-foreground-color);
              }
            }
          }

          [role='option'][aria-selected='true'] {
            color: var(--enterprise-nav-active-text);
            background-color: var(--enterprise-nav-active-bg);

            @media (width < 768px) {
              color: var(--sui-highlight-foreground-color);
              background-color: var(--sui-selected-background-color);
            }

            .icon {
              opacity: 0.9;
            }

            .count {
              color: var(--enterprise-nav-active-count);

              @media (width < 768px) {
                color: var(--sui-highlighted-foreground-color);
              }
            }
          }

          [role='option'].dragover {
            color: var(--sui-primary-accent-color-inverted) !important;
            background-color: var(--sui-primary-accent-color) !important;
          }
        }

        .sui.divider {
          margin: 8px 0;
          border-color: var(--enterprise-nav-border);

          @media (width < 768px) {
            border-color: var(--sui-secondary-border-color);
          }
        }
      }
    }

    // Collapsed sidebar state
    &.sidebar-collapsed {
      :global {
        .primary-sidebar {
          width: 56px;

          .sui.search-bar {
            display: none;
          }

          // Hide group section labels ("Collections", "Files")
          .sui.option-group > .label {
            display: none;
          }

          .sui.divider {
            margin: 4px 8px;
          }

          [role='listbox'] {
            margin: 4px;

            button {
              justify-content: center;
              padding: 8px 0 !important;
              min-height: 40px;
              width: 44px !important;

              // Hide text labels and count badges
              span.label,
              .label,
              .count,
              span:not(.icon) {
                display: none !important;
              }

              // Show and center icons
              .icon:not(.check) {
                display: flex !important;
                opacity: 0.7;
                font-size: 22px;
                flex: none;
              }
            }

            [role='option'][aria-selected='true'] button .icon:not(.check) {
              opacity: 1;
            }
          }
        }
      }
    }
  }

  .sidebar-toggle {
    position: absolute;
    top: 50%;
    left: 250px;
    z-index: 10;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 40px;
    border: 1px solid var(--enterprise-nav-border);
    border-radius: 0 6px 6px 0;
    background-color: var(--enterprise-nav-bg-secondary);
    color: var(--enterprise-nav-text);
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.2s ease, left 0.25s ease, background-color 0.2s ease;

    .sidebar-collapsed & {
      left: 56px;
      border-radius: 0 6px 6px 0;
    }

    .outer:hover & {
      opacity: 1;
    }

    &:hover {
      background-color: var(--enterprise-nav-bg);
      color: var(--enterprise-nav-active);
    }

    .toggle-icon {
      font-size: 16px;
      font-weight: bold;
      line-height: 1;
    }

    @media (width < 768px) {
      display: none;
    }
  }
</style>
