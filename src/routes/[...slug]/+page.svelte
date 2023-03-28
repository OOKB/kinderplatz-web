<script>
  import { page } from '$app/stores';
  import { getPageInfo } from '$lib/page-info.js'
	import Page from "$lib/el/page.svelte";
	import Aside from "$lib/el/aside.svelte";

  /* @type { import('./$houdini').PageData } */
  export let data
  $: ({ PageData } = data)
  $: pageInfo = getPageInfo($page.params.slug)
</script>

<Page title={$PageData.data.page.title} content={$PageData.data.page.content}>
  {#if pageInfo && pageInfo.images}
    <Aside images={pageInfo.images} links={pageInfo.links} />
  {/if}
</Page>
