<script>
  import Logo from './logo.svelte'
  import { pageColor } from '$lib/stores.js';

  export let title = ""

  $: bgColor = `bg-${$pageColor}`
</script>

<div class="flex items-center justify-center min-h-[150px] h-[20vw] relative overflow-hidden {bgColor}">
  <Logo class="min-w-[200px] max-w-[30%] h-auto z-[1] relative p-[0.5em] {bgColor}" />
  <h1 class="text-white absolute text-[18vw] italic font-normal tracking-[-0.08em] z-0 left-[-2vw] whitespace-nowrap uppercase rotate-[0.02turn]">
    {title}
  </h1>
</div>

<!-- Probably convert this to tailwind css? -->
<style>
  h1 {
    font-family: var(--font-stack-serif);
  }
</style>
