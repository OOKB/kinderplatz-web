<script>
  import Logo from './logo.svelte'
  import { page } from '$app/stores';
  import { getSlugColor } from '$lib/meta.js'

  export let title = ""
  export let slug = ''

  $: bgColor = getSlugColor($page.params.slug, $page.route.id)
</script>
<div class="flex min-h-[150px] h-[20vw] relative overflow-hidden {bgColor}">
  <Logo class="min-w-[200px] max-w-[30%] h-auto z-[1] relative p-[0.5em]"/>
  <h1 class="text-white absolute text-[18vw] italic font-normal tracking-[-0.08em] z-0 left-[-2vw] whitespace-nowrap uppercase rotate-[0.02turn]">{title}</h1>
</div>

<!-- Probably convert this to tailwind css? -->
<style>
  h1 {
    font-family: var(--font-stack-serif);
  }
</style>
