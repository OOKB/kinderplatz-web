<script>
  import LogoBanner from "$lib/el/logo-banner.svelte";
  import SvelteMarkdown from 'svelte-markdown'

  /* @type { import('./$houdini').PageData } */
  export let data
  $: ({ PageData } = data)
</script>

<LogoBanner title={$PageData.data.page.title}/>

<aside></aside>
<article>
  <SvelteMarkdown source={$PageData.data.page.content} />
</article>
