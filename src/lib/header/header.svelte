<script>
  import { pages } from '$lib/page-info.js'
  import Link from './link.svelte'
  export let links = []
</script>

<header>
  <nav id="mainMenu">
    <ul class="flex justify-between border-t border-orange text-center">
      {#each links as link}
        <Link {...link} />
      {/each}
    </ul>
  </nav>
</header>
