<script>
  import _ from 'lodash/fp.js'
  import Link from './link.svelte'
  import { getContext } from 'svelte';
  import { pageColor } from '$lib/stores.js'

  export let images = []
  export let headings = [] // heading values on this page
  export let pages = [] // pages in this section
  export let links = [] // related links

  let section = getContext('section')
  $: imgOverlay = `bg-${$section.sectionColor}-100`

  function getSrc(image) {
    return image.src.replace('/images/', '/images/w450/')
  }
</script>

<aside
  class="
    order-2 flex flex-wrap relative p-[1rem] bg-white w-full
    md:order-[initial] md:flex-1 md:-top-[3em] md:block md:p-[2rem] md:pt-0 md:max-w-[30%]
    lg:flex-[2]
    xl:flex-1
  ">
  {#if _.get('[0].src', images)}
    <div class='
      image-block
      relative h-auto w-6/12 order-1 m-0 pb-0
      md:w-auto md:mr-[-2rem] md:ml-[-2rem] md:mb-[1rem] md:order-[initial]
      '>
      <img
        class="
          block relative w-full z-[1]
          border-white border-[0.1rem] border-solid;
        "
        src="{getSrc(images[0])}"
        alt="{images[0].alt}"
      />
      <div class="
        color-overlay
        block absolute inset-0 z-[2]
        {imgOverlay}
        "></div>
    </div>
  {/if}
  {#if headings && headings.length > 1}
    <h2 class="font-bold text-xl my-6 w-full order-2 md:w-auto md:order-[initial]">Page Contents</h2>
    <section class="w-full order-2 md:w-auto md:order-[initial]">
      <ul class="">
        {#each headings as {id, title}}
          <li><a class="text-{$pageColor}" href="#{id}">{title}</a></li>
        {/each}
      </ul>
    </section>
  {/if}
  {#if pages && pages.length}
    <h2 class="font-bold text-xl my-6 w-full order-2 md:w-auto md:order-[initial]">Section Contents</h2>
    <section class="w-full order-2 md:w-auto md:order-[initial]">
      <ul class="">
        {#each pages as {slug, title}}
          <Link {pageColor} {slug} {title} />
        {/each}
      </ul>
    </section>
  {/if}
  {#if links && links.length}
    <h2 class="font-bold text-xl my-6 w-full order-2 md:w-auto md:order-[initial]">Related</h2>
    <section class="w-full order-2 md:w-auto md:order-[initial]">
      <ul class="">
        {#each links as {title, slug}}
          <Link {pageColor} {slug} {title} />
        {/each}
      </ul>
    </section>
  {/if}
  {#if images && _.get('[1].src', images)}
    {#each images.slice(1) as image}
      <div class='
        image-block
        relative h-auto w-6/12 order-1 m-0 pb-0
        md:w-auto md:mr-[-2rem] md:ml-[-2rem] md:mt-[2rem] md:mb-[1rem] md:order-[initial]
        '>
        <img
          class="
            block relative w-full z-[1]
            border-white border-[0.1rem] border-solid;
          "
          src="{getSrc(image)}"
          alt="{image.alt}"
        />
        <div class="
          color-overlay
          block absolute inset-0 z-[2]
          {imgOverlay}
          "></div>
      </div>
    {/each}
  {/if}
</aside>
