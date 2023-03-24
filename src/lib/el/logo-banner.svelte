<script>
  import Logo from './logo.svelte'
  import { page } from '$app/stores';
  import { getSlugColor } from '$lib/meta.js'

  export let title = ""
  export let slug = ''

  $: bgColor = getSlugColor($page.params.slug)
</script>

<div class="place-content-center grid grid-cols-1 max-w-sm items-center justify-center banner {bgColor}">
  <Logo />
  <h1 class="absolute">{title}</h1>
</div>

<!-- Probably convert this to tailwind css -->
<style>
  .banner h1 {
    position: absolute;
    font-size: 18vw;
    font-style: italic;
    font-weight: 400;
    font-family: var(--font-stack-serif);
    letter-spacing: -.08em;
    z-index: 0;
    left: -2vw;
    white-space: nowrap;
    text-transform: uppercase;
    transform: rotate(0.02turn);
  }
</style>
