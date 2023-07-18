<script>
	import Page from "$lib/el/page.svelte";
	import Aside from "$lib/aside/aside.svelte";

  /* @type { import('./$houdini').PageData } */
  export let data
</script>

<Page title={data.title} content={data.content} id={data.id}>
  {#if data.section}
    <Aside
      headings={data.headings}
      pages={data.section.pages}
      images={data.section.images}
      links={data.section.links}
    />
  {/if}
</Page>
