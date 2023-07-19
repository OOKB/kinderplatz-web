<script>
  import SubMenu from '$lib/el/sub-menu.svelte';
  import Logo from '$lib/el/logo.svelte'

  export let sectionLinks = []

  $: linkClasses = "hover:text-natural-700 hover:underline hover:decoration-solid";

</script>
<section class="p-5 lg:p-6 xl:p-8">
  <nav>
    <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 3xl:grid-cols-8 4xl:grid-cols-10 gap-4">
      <li class="mb-12">
        <Logo class="w-full max-w-[200px] h-auto z-[1] px-3 pt-2 pb-1 relative bg-gradient-to-r from-red-600 to-orange-600" />
        <br>
        <a class={linkClasses} href="/">KinderPlatz<br>
        Childcare &amp; Education Center </a>
      </li>
      {#each sectionLinks as link}
        <SubMenu {...link} linkClasses={linkClasses} />
      {/each}
    </ul>
  </nav>
</section>

<style></style>