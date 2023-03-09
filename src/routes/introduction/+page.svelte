<script>
  import LogoBanner from "$lib/el/logo-banner.svelte";
  import SvelteMarkdown from 'svelte-markdown'

  /* @type { import('./$houdini').PageData } */
  export let data
  $: ({ Intro } = data)
</script>

<LogoBanner title="Introduction" />

<aside></aside>
<article>
  <h2>{$Intro.data.page.title}</h2>
  <SvelteMarkdown source={$Intro.data.page.content} />
</article>
