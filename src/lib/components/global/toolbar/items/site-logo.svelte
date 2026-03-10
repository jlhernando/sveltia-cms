<script>
  import { Button } from '@sveltia/ui';
  import { _ } from 'svelte-i18n';

  import { appLogoURL } from '$lib/services/app/branding';
  import { openProductionSite } from '$lib/services/app/navigation';
  import { cmsConfig } from '$lib/services/config';

  const hasConfigLogo = $derived(
    !!($cmsConfig?.logo?.src || $cmsConfig?.logo_url) &&
      ($cmsConfig?.logo?.show_in_header ?? true),
  );
</script>

{#if hasConfigLogo}
  <Button
    variant="ghost"
    iconic
    aria-label={$_('visit_live_site')}
    onclick={() => {
      openProductionSite();
    }}
  >
    <img src={$appLogoURL} alt="" class="logo" />
  </Button>
{:else}
  <img src={$appLogoURL} alt="" class="logo" />
{/if}

<style lang="scss">
  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
</style>
