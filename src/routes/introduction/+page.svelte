<script>
  import LogoBanner from "$lib/el/logo-banner.svelte";
  import SvelteMarkdown from 'svelte-markdown'

  /* @type { import('./$houdini').PageData } */
  export let data
  $: ({ Intro } = data)
</script>

<LogoBanner title={$Intro.data.page.title}/>

<aside></aside>
<article>
  <SvelteMarkdown source={$Intro.data.page.content} />
</article>
