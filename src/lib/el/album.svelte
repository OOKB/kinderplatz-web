<script>
  import { onMount } from "svelte";

  import PhotoSwipeLightbox from 'photoswipe/lightbox';
  import PhotoSwipe  from 'photoswipe'
  import 'photoswipe/style.css';

  export let title = ''
  export let images = []
  export let id = ''
  export let individual = false;
  export let styling = '' // "none" | "grid" | "flex" = "none";

  onMount(() => {
    const options = {
      gallery: '#' + id,
      children: 'a',
      loop: false,
      // showHideAnimationType: 'fade',
      pswpModule: PhotoSwipe,
    }
    // on each update, destroy any previous lightbox (to avoid weird bugs) and init new lightbox with new opts
    // note that subscribe runs the function immediately for the first time
    const lightbox = new PhotoSwipeLightbox(options)
    lightbox.init();
    return () => {
      lightbox.destroy();
    }
  });
</script>

<section>
  <!-- Infant/Toddler Wing -->
  <div class="mb-12">
    <h3 class="border-t border-solid border-pink pt-3">{title}</h3>
    <ul class="w-full grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-9 pswp-gallery" id="{id}">
      {#each images as image}
        <li class="relative">
          <a
            class="block w-full relative h-0 pb-[100%]"
            href="{image.src}"
            data-pswp-width={image.width}
            data-pswp-height={image.height}
            target="_blank"
            rel="noreferrer"
          >
            <img
              class="object-cover block w-full h-full absolute inset-0"
              srcset="{image.thumbnail.src}?dpr=1 1x,
                      {image.thumbnail.src}?dpr=2 2x,
                      {image.thumbnail.src}?dpr=2 3x"
              src="{image.thumbnail.src}"
              alt="{image.alt}"
            />
          </a>
        </li>
      {/each}
    </ul>
  </div>
</section>

<style>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>