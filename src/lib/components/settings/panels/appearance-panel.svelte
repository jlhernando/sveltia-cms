<script>
  import { Button, SelectButton, SelectButtonGroup, TextInput } from '@sveltia/ui';
  import { _ } from 'svelte-i18n';

  import { appLogoURL, DEFAULT_APP_LOGO_URL } from '$lib/services/app/branding';
  import { prefs } from '$lib/services/user/prefs';

  /**
   * @typedef {object} Props
   * @property {(detail: { message: string }) => void} [onChange] Custom `change` event handler.
   */

  /** @type {Props} */
  let {
    /* eslint-disable prefer-const */
    onChange = undefined,
    /* eslint-enable prefer-const */
  } = $props();
</script>

<section>
  <h3>{$_('prefs.appearance.theme')}</h3>
  <div role="none">
    <SelectButtonGroup
      aria-label={$_('prefs.appearance.select_theme')}
      onChange={(event) => {
        $prefs = { ...$prefs, theme: event.detail.value };
      }}
    >
      {#each ['auto', 'dark', 'light'] as value (value)}
        <SelectButton
          variant="tertiary"
          label={$_(`prefs.theme.${value}`)}
          {value}
          selected={(!$prefs.theme && value === 'auto') || $prefs.theme === value}
        />
      {/each}
    </SelectButtonGroup>
  </div>
</section>
<section>
  <h3>{$_('prefs.appearance.sidebar_logo')}</h3>
  <p>{$_('prefs.appearance.sidebar_logo_description')}</p>
  <div role="none" class="logo-setting">
    <div class="logo-preview">
      <img src={$appLogoURL} alt="" />
    </div>
    <TextInput
      bind:value={$prefs.customLogoURL}
      flex
      aria-label={$_('prefs.appearance.sidebar_logo')}
      placeholder={$_('prefs.appearance.logo_url_placeholder')}
      onchange={() => {
        onChange?.({
          message: $prefs.customLogoURL
            ? $_('prefs.appearance.sidebar_logo')
            : $_('prefs.appearance.reset_logo'),
        });
      }}
    />
    {#if $prefs.customLogoURL}
      <Button
        variant="tertiary"
        label={$_('prefs.appearance.reset_logo')}
        onclick={() => {
          $prefs = { ...$prefs, customLogoURL: '' };
          onChange?.({ message: $_('prefs.appearance.reset_logo') });
        }}
      />
    {/if}
  </div>
</section>

<style lang="scss">
  .logo-setting {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .logo-preview {
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, hsl(211 84% 54%), hsl(260 80% 60%));
    border-radius: 8px;
    overflow: hidden;

    img {
      width: 20px;
      height: 20px;
      object-fit: contain;
      filter: brightness(0) invert(1);
    }
  }
</style>
