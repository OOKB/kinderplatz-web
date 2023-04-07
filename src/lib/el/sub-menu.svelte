<script>
  export let url
  export let name
  export let links
</script>

<li>
  <a class="darkgray" href={url}>{name}</a>
  <ul class="list-reset ml-6">
    {#each links as link}
      <li><a class="darkgray" href={link.href}>{link.name}</a></li>
    {/each}
  </ul>
</li>
