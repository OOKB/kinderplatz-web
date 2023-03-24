<script>
  import Logo from './logo.svelte'
  import { page } from '$app/stores';
  import { getSlugColor } from '$lib/meta.js'

  export let title = ""
  export let slug = ''

  $: bgColor = getSlugColor($page.params.slug)
</script>
<!-- flex justify-center items-center -->
<div class="flex justify-center items-center h-20 {bgColor}">
  <Logo />
  <h1 class="title z-0 absolute italic uppercase whitespace-nowrap tracking-tighter text-9xl">{title}</h1>
</div>

<!-- Probably convert this to tailwind css? -->
<style>
  h1.title {
    font-weight: 400;
    font-family: var(--font-stack-serif);
    left: -2vw;
    transform: rotate(0.02turn);
  }
</style>
