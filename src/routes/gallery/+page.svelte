<script>
  import Album from "$lib/el/album.svelte";
import { onDestroy, onMount } from "svelte";

  /** @type {import('./$types').PageData} */
  export let data;

</script>

<article>
  <h2>Take a look around Kinderplatz!</h2>
  <section>
    <p>click an image to enlarge</p>
  </section>
  {#each data.albums as album}
    <Album {...album} />
  {/each}
</article>
