<script>
  export let slug
  export let title
  export let links
  export let linkClasses = ''
</script>

<li class="mb-4 md:mb-8 xl:mb-12">
  <a class={linkClasses} href="/{slug}">{title}</a>
  <ul class="list-reset ml-6">
    {#each links as link}
      <li><a class={linkClasses} href="/{link.slug}">{link.title}</a></li>
    {/each}
  </ul>
</li>
