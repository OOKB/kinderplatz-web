<script>
  import { getContext } from 'svelte';
  import Album from "$lib/el/album.svelte";
  import LogoBanner from "$lib/el/logo-banner.svelte";
  import { onDestroy, onMount } from "svelte";

  /** @type {import('./$types').PageData} */

  export let data;
  export let id = ''
  export let title = ''
  export let content = ''

  let section = getContext('section')

</script>

<LogoBanner title="Gallery" pageColor={$section.sectionColor} />

<article
  class="
    bg-pink-100
    sm:mx-2 md:mx-6 lg:mx-10 xl:mx-16
    mb-6 lg:mb-10 xl:mb-16
    pt-4 pb-12 px-4
  ">

  <h2>Take a look around Kinderplatz!</h2>

  <section>
    <p>click an image to enlarge</p>
  </section>

  {#each data.albums as album}
    <Album {...album} />
  {/each}

</article>
