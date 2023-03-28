<script>
  import {pages} from '$lib/page-info.js'
  import Link from './link.svelte'
  const links = [
    
  ]
</script>
<header>
  <nav id="mainMenu">
    <ul class="flex list-reset">
      <Link {...pages.introduction} />
      <li><a class="yellow" href="/approach">Our Approach</a></li>
      <li><a class="green" href="/agegroups">Age Groups</a></li>
      <li><a class="blue" href="/tuition">Tuition</a></li>
      <li><a class="purple" href="/credentials">Credentials</a></li>      
    </ul>
  </nav>
</header>
