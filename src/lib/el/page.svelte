<script>
  import { getContext } from 'svelte';
  import SvelteMarkdown from 'svelte-markdown'
  import LogoBanner from "$lib/el/logo-banner.svelte";
  import Contact from "$lib/section/contact.svelte"
	import Credentials from '$lib/section/credentials.svelte';
  // import { pageColor } from '$lib/stores.js';

  export let id = ''
  export let title = ''
  export let content = ''
  let section = getContext('section')
  $: lightBg = `bg-${$section.sectionColor}-100`
  const sectionClasses = `max-w-2xl text-xl leading-[1.618] md:max-w-4xl md:text-lg md:leading-normal`
</script>

<LogoBanner {title} pageColor={$section.sectionColor} />

<div class="flex mb-12 flex-col md:flex-row">
  <slot />

  <article
    id="article-content"
    class="
      pt-4 pb-12 px-4 {lightBg}
      md:flex-[2] md:mr-0 md:pt-6 md:pb-20 md:px-8
      lg:flex-[5] lg:mr-8 lg:pt-8
      xl:flex-[7] xl:mr-16 xl:p-8
      max-w-5xl
    ">

    <section class={sectionClasses}>
      <SvelteMarkdown source={content} />
    </section>

    <section class={sectionClasses}>
      <slot name="article-bottom" />
      {#if id === 'contact'} <Contact /> {/if}
      {#if id === 'credentials'} <Credentials /> {/if}
    </section>

  </article>
</div>
