<script>
  export let slug
  export let title
  export let links
</script>

<li>
  <a class="darkgray" href="/{slug}">{title}</a>
  <ul class="list-reset ml-6">
    {#each links as link}
      <li><a class="darkgray" href="/{link.slug}">{link.title}</a></li>
    {/each}
  </ul>
</li>
