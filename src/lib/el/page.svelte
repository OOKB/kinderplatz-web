<script>
  import LogoBanner from "$lib/el/logo-banner.svelte";
  import SvelteMarkdown from 'svelte-markdown'

  export let title = ''
  export let content = ''
</script>

<LogoBanner {title} />
<div class="flex">
  <slot />
  <article class="flex-1">
    <SvelteMarkdown source={content} />
    <slot name="article-bottom" />
  </article>
</div>
