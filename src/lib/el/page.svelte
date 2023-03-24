<script>
  import LogoBanner from "$lib/el/logo-banner.svelte";
  import SvelteMarkdown from 'svelte-markdown'

  export let title = ''
  export let content = ''
</script>

<LogoBanner {title} />

<aside></aside>
<article>
  <SvelteMarkdown source={content} />
  <slot />
</article>
