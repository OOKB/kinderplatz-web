<script>
  import SubMenu from '$lib/el/sub-menu.svelte';

  export let sectionLinks = []
  export let linkClasses = ''

</script>

<section class="p-5 lg:p-6 xl:p-7">
  <nav>
    <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 3xl:grid-cols-8 4xl:grid-cols-10 gap-4">
      {#each sectionLinks as link}
        <SubMenu {...link} linkClasses={linkClasses} />
      {/each}
    </ul>
  </nav>
</section>

<style></style>