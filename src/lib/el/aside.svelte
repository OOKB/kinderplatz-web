<script>
  import _ from 'lodash/fp.js'
  export let images = []
  export let links = []
  export let color = ""
  function getSrc(image) {
    return image.src.replace('/images/', '/images/w450/')
  }
</script>

<aside>
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
