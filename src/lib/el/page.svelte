<script>
  import LogoBanner from "$lib/el/logo-banner.svelte";
  import SvelteMarkdown from 'svelte-markdown'

  export let title = ''
  export let content = ''
</script>

<LogoBanner {title} />
<div class="flex">
  <slot />
  <!-- how to set a lighter background color that matches section color for the article's BG? -->
  <article class="flex-[5] mr-8 pt-10 pb-20 px-10 text-natural-600">
    <SvelteMarkdown source={content} />
    <slot name="article-bottom" />
  </article>
</div>
