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
  <article class="flex-[5] mr-8 pt-10 pb-20 px-10">
    <section>
      <SvelteMarkdown source={content} />
    </section>
    <section>
      <slot name="article-bottom" />
    </section>
  </article>
</div>

<style>
  article section {
    max-width: 40em;
    font-size: 1.25rem;
    line-height: 1.618;
  }
  @media (min-width: 800px) {
    article section {
      max-width: 45em;
      font-size: 1.125rem;
      line-height: 1.5;
    }
  }
</style>