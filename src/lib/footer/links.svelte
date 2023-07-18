<script>
  import SubMenu from '$lib/el/sub-menu.svelte';

  export let sectionLinks = []

  $: linkClasses = "hover:text-natural-700 hover:underline hover:decoration-solid";

</script>
<section class="p-5 lg:p-6 xl:p-8">
  <nav>
    <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 ">
      <li>
        <a class={linkClasses} href="/">KinderPlatz :: <br>
        Childcare &amp; Education Center </a>
      <br>
      <br>
      {#each sectionLinks as link}
        <SubMenu {...link} />
      {/each}
    </ul>
  </nav>
</section>