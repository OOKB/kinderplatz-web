<script>
  import Logo from './logo.svelte'

  export let title = ""
  export let pageColor = ''
  $: bgColor = `bg-${pageColor}`
  $: h1Color = `bg-${pageColor}-500`
</script>

<div class="flex items-center justify-center min-h-[150px] h-[20vw] relative overflow-hidden {bgColor}">
  <Logo class="w-1/5 min-w-[200px] max-w-[30%] h-auto z-[1] relative p-[0.5em] {h1Color}" />
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
