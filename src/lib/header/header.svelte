<script>
  import Link from './link.svelte'
  export let links = []
</script>

<header>
  <nav id="mainMenu" class="relative z-50">
    <ul class="border-t border-t-red border-solid w-full relative flex-col flex text-left md:flex-row md:flex-wrap md:text-center xl:justify-between xl:no-wrap">
      {#each links as link}
        <Link {...link} />
      {/each}
    </ul>
  </nav>
</header>
