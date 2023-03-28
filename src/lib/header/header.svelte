<script>
  import { pages } from '$lib/page-info.js'
  import Link from './link.svelte'
  const links = [
    'introduction', 'approach', 'agegroups', 'tuition', 'credentials',
  ].map((slug) => pages[slug])
</script>

<header>
  <nav id="mainMenu">
    <ul class="flex list-reset">
      {#each links as link}
        <Link {...link} />
      {/each}
    </ul>
  </nav>
</header>
