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
  <div class="container">
    <h4 class="bordertop">Infant/Toddler Wing</h4>
    <ul class="flex flex-wrap pswp-gallery" id="{id}">
      {#each images as image}
        <li>
          <a
            href="{image.src}"
            data-pswp-width={image.width}
            data-pswp-height={image.height}
            target="_blank"
            rel="noreferrer"
          >
            <img
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
