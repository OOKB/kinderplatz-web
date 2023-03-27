<script>
  import { onDestroy, onMount } from "svelte";
  import PhotoSwipeLightbox from 'photoswipe/lightbox';
  import 'photoswipe/style.css';

  /** @type {import('./$types').PageData} */
  export let data;
  export let galleryId = "photoswipe";

  const IMG_URL = 'https://img.rogersandgoffigon.com/b2'
  // const IMG_URL = 'http://127.0.0.1:8787/b2'

  let lightbox = {}
  onMount(() => {
    console.log('mounted')
    lightbox = new PhotoSwipeLightbox({
      gallery: '#' + galleryId,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();
  })
  onDestroy(() => {
    if (lightbox.destroy) lightbox.destroy()
    lightbox = {}
  })
</script>

<article>
  <h2>Take a look around Kinderplatz!</h2>
  <section>
    <p>click an image to enlarge</p>
  </section>
    <!-- GALLERY PHOTO LISTS -->
  <section>
    <!-- Infant/Toddler Wing -->
    <div class="container">
      <h4 class="bordertop">Infant/Toddler Wing</h4>
      <ul class="photos pswp-gallery" id="{galleryId}">
        {#each data.images['lkz-smr'] as image}
          <li>
            <a
              href="{IMG_URL}/raw/{image.fileId}"
              data-pswp-width={image.width}
              data-pswp-height={image.height}
              target="_blank"
              rel="noreferrer"
            >
              <img
                srcset="{IMG_URL}/c175/{image.fileId}?dpr=1 1x,
                        {IMG_URL}/c175/{image.fileId}?dpr=2 2x,
                        {IMG_URL}/c175/{image.fileId}?dpr=2 3x"
                src="{IMG_URL}/c175/{image.fileId}"
                alt=""
              />
            </a>
          </li>
        {/each}
        <!-- <li><a href="/f/i/gallery/lkz-smr/lkz001.JPG" data-lightbox="infant-toddler" title="Infant/Toddler Wing"><img src="/f/i/gallery/lkz-smr/t/t-lkz001.jpg" alt=""></a></li> -->

      </ul>
    </div>
  </section>
    <!-- /END Small Muscle Room -->
    <!-- Preschool/Pre-Kindergarten Wing -->
  <section>
    <div class="container">
      <h4 class="bordertop">Preschool/Pre-Kindergarten Wing</h4>
      <ul class="photos flex list-reset">
        <!-- <li><a href="/f/i/gallery/bkz/bkz002.JPG" data-lightbox="prek" title="Preschool/Pre-Kindergarten Wing"><img src="/f/i/gallery/bkz/t/t-bkz002.jpg" alt=""></a></li> -->
      </ul>
    </div>
  </section>
    <!-- /END GALLERY PHOTO LISTS -->
</article>