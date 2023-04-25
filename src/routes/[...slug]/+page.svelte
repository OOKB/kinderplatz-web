<script>
	import Page from "$lib/el/page.svelte";
	import Aside from "$lib/el/aside.svelte";

  /* @type { import('./$houdini').PageData } */
  export let data
  $: ({ PageData } = data)
</script>

{#if $PageData.data?.page}
  <Page title={$PageData.data.page.title} content={$PageData.data.page.content}>
    {#if $PageData.data.page.images}
      <Aside
        images={$PageData.data.page.images}
        links={$PageData.data.page.links}
      />
    {/if}
  </Page>
{/if}
