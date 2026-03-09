<script>
  /**
   * @import { Snippet } from 'svelte';
   */

  /**
   * @typedef {object} Props
   * @property {Snippet} [primaryToolbar] Primary toolbar content.
   * @property {Snippet} [secondaryToolbar] Secondary toolbar content.
   * @property {Snippet} [mainContent] Main content.
   * @property {Snippet} [secondarySidebar] Secondary sidebar content.
   */

  /** @type {Props & Record<string, any>} */
  let {
    /* eslint-disable prefer-const */
    primaryToolbar = undefined,
    secondaryToolbar = undefined,
    mainContent = undefined,
    secondarySidebar = undefined,
    ...rest
    /* eslint-enable prefer-const */
  } = $props();
</script>

<div role="group" class="wrapper" {...rest}>
  {@render primaryToolbar?.()}
  <div role="none" class="main-inner">
    <div role="none" class="main-inner-main">
      {@render secondaryToolbar?.()}
      {@render mainContent?.()}
    </div>
    {@render secondarySidebar?.()}
  </div>
</div>

<style lang="scss">
  .wrapper {
    flex: auto;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background-color: var(--sui-primary-background-color);
    background-image: var(--glass-gradient-bg);

    &:not(:first-child) {
      border-start-start-radius: 16px;
    }

    :global {
      .sui.toolbar.primary {
        justify-content: center;
        background-color: var(--glass-bg);
        backdrop-filter: var(--glass-blur);
        -webkit-backdrop-filter: var(--glass-blur);
        border-bottom: 1px solid var(--glass-border);

        @media (width < 768px) {
          background-color: var(--sui-secondary-background-color);
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
          border-bottom: none;
        }
      }

      .sui.toolbar.secondary {
        background-color: var(--glass-bg);
        backdrop-filter: var(--glass-blur);
        -webkit-backdrop-filter: var(--glass-blur);
        border-bottom: 1px solid var(--glass-border);

        @media (width < 768px) {
          background-color: var(--sui-secondary-background-color);
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
          border-bottom: none;
        }
      }
    }
  }

  .main-inner {
    flex: auto;
    display: flex;
    overflow: hidden;

    .main-inner-main {
      flex: auto;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    :global {
      .secondary-sidebar {
        flex: none;
        overflow: auto;
        box-sizing: content-box;
        width: 320px;
        background-color: var(--glass-bg);
        backdrop-filter: var(--glass-blur);
        -webkit-backdrop-filter: var(--glass-blur);
        border-inline-start: 1px solid var(--glass-border);

        @media (768px <= width) {
          border-start-start-radius: 16px;
        }

        [role='listbox'] {
          padding: 12px;
        }
      }
    }
  }
</style>
