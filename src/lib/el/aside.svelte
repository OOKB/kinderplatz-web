<script>
  import _ from 'lodash/fp.js'
  export let images = []
  export let links = []
  export let color = ""
  function getSrc(image) {
    return image.src.replace('/images/', '/images/w450/')
  }
</script>

<aside class="flex-2 relative top-[-3em] p-8">
  {#if _.get('[0].src', images)}
    <div class="">
      <img
        src="{getSrc(images[0])}"
        alt="{images[0].alt}"
      />
    </div>
  {/if}
  {#if links && links.length}
    <h2>Section Contents</h2>
    <section>
      <ul class="">
        {#each links as {href, name}}
          <li><a class={color} href={href}>{name}</a></li>
        {/each}
      </ul>
    </section>
  {/if}
  {#if _.get('[1].src', images)}
    <div class="">
      <img
        src="{getSrc(images[1])}"
        alt="{images[1].alt}"
      />
    </div>
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