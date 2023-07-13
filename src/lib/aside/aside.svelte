<script>
  import _ from 'lodash/fp.js'
  import { pageColor } from '$lib/stores.js'
  import Link from './link.svelte'

  export let images = []
  export let headings = [] // heading values on this page
  export let pages = [] // pages in this section
  export let links = [] // related links

  function getSrc(image) {
    return image.src.replace('/images/', '/images/w450/')
  }
</script>

<aside
  class="
    order-2 flex flex-wrap relative
    md:order-[initial] md:flex-1 md:-top-[3em] md:block md:p-8 md:max-w-[30%]
    lg:flex-[2]
    xl:flex-1
  ">
  {#if _.get('[0].src', images)}
    <div class="">
      <img
        src="{getSrc(images[0])}"
        alt="{images[0].alt}"
      />
    </div>
  {/if}
  {#if headings && headings.length > 1}
    <h2 class="font-bold text-xl my-6">Page Contents</h2>
    <section>
      <ul class="">
        {#each headings as {id, title}}
          <li><a class="text-{$pageColor}" href="#{id}">{title}</a></li>
        {/each}
      </ul>
    </section>
  {/if}
  {#if pages && pages.length}
    <h2 class="font-bold text-xl my-6">Section Contents</h2>
    <section>
      <ul class="">
        {#each pages as {slug, title}}
          <Link {pageColor} {slug} {title} />
        {/each}
      </ul>
    </section>
  {/if}
  {#if links && links.length}
    <h2 class="font-bold text-xl my-6">Related</h2>
    <section>
      <ul class="">
        {#each links as {title, slug}}
          <Link {pageColor} {slug} {title} />
        {/each}
      </ul>
    </section>
  {/if}
  {#if images && _.get('[1].src', images)}
    {#each images.slice(1) as image}
      <div class="">
        <img
          src="{getSrc(image)}"
          alt="{image.alt}"
        />
      </div>
    {/each}
  {/if}
</aside>

<style>
  aside div:first-child {
    margin-top: -2em;
  }
  aside div {
    position: relative;
    padding-bottom: calc(100% + 4em);
    height: 0;
    background: white;
    margin: 2em -2em 1em -2em;
  }
  aside div img {
    position: relative;
    width: 100%;
    height: auto;
    border: .1rem solid white;
    z-index: 1;
  }
</style>