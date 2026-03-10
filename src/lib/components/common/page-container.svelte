<script>
  import { hasOverlay } from '$lib/services/app/navigation';
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
  inert={$hasOverlay}
  {...rest}
>
  {@render primarySidebar?.()}
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
        width: 240px;
        overflow-y: auto;
        overflow-x: hidden;
        background-color: var(--sui-secondary-background-color);
        border-right: 1px solid var(--sui-secondary-border-color);
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

          @media (width < 768px) {
            --sui-textbox-background-color: var(--sui-tertiary-background-color);
            --sui-textbox-border-color: var(--sui-control-border-color);
            --sui-textbox-foreground-color: var(--sui-control-foreground-color);
          }
        }

        // Section labels in sidebar (Collections, Files)
        .sui.option-group-label {
          padding: 12px 20px 8px;
          font-size: 0.6875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          color: var(--sui-tertiary-foreground-color);
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
            color: var(--sui-primary-foreground-color);
            transition: background-color 150ms ease, color 150ms ease;

            &:not(:first-child) {
              margin-top: 2px;
            }

            &:not(:focus) {
              border-color: transparent;
            }

            &:hover {
              background-color: var(--sui-hover-background-color);
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
              display: inline-flex;
              align-items: center;
              justify-content: center;
              min-width: 20px;
              height: 20px;
              padding: 0 6px;
              border-radius: 10px;
              background-color: var(--sui-tertiary-background-color);
              color: var(--sui-tertiary-foreground-color);
              font-size: 11px;
              font-weight: 500;
              line-height: 1;
              transition: background-color 200ms, color 200ms;
            }
          }

          [role='option'][aria-selected='true'] {
            background-color: var(--sui-primary-accent-color-translucent);
            position: relative;

            &::before {
              content: '';
              position: absolute;
              left: 0;
              top: 4px;
              bottom: 4px;
              width: 3px;
              border-radius: 0 3px 3px 0;
              background-color: var(--sui-primary-accent-color);
            }

            button {
              color: var(--sui-primary-accent-color);
              font-weight: 500;
            }

            .icon {
              opacity: 0.9;
              color: var(--sui-primary-accent-color);
            }

            .count {
              background-color: var(--sui-primary-accent-color-translucent);
              color: var(--sui-primary-accent-color);
            }
          }

          [role='option'].dragover {
            color: var(--sui-primary-accent-color-inverted) !important;
            background-color: var(--sui-primary-accent-color) !important;
          }
        }

        .sui.divider {
          margin: 8px 0;
          border-color: var(--sui-secondary-border-color);
        }
      }
    }
  }
</style>
