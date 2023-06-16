<script>
	import Page from "$lib/el/page.svelte";
	import Aside from "$lib/el/aside.svelte";

  /* @type { import('./$houdini').PageData } */
  export let data
  $: ({ PageData } = data)
</script>

{#if $PageData.data?.page}
  <Page title={$PageData.data.page.title} content={$PageData.data.page.content}>
    {#if $PageData.data.page.section}
      <Aside
        headings={$PageData.data.page.headings}
        images={$PageData.data.page.section.images}
        links={$PageData.data.page.section.links}
      />
    {/if}
  </Page>
{/if}
