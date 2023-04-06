<script>
  import { pages } from '$lib/page-info.js'
  import Link from './link.svelte'
  const links = [
    'introduction', 'approach', 'agegroups', 'tuition', 'credentials', 'contact',
  ].map((slug) => pages[slug])
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
