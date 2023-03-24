<script>
	import Page from "$lib/el/page.svelte";
  /* @type { import('./$houdini').PageData } */
  export let data
  $: ({ PageData } = data)
</script>

<Page title={$PageData.data.page.title} content={$PageData.data.page.content} />
