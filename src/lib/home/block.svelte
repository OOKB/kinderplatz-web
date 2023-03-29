<script>
  import classNames from 'classnames'

  export let link = ''
  export let color = ''
  export let word = ''
  export let image = ''
  const mediaServer = 'https://kinderplatz-api.pages.dev'
  $: classStyle = classNames(color, { imgBlk: image })
</script>

<div
  class="block flex-initial h-64 w-64 justify-center {classStyle}"
  style={image ? `background-image: url(${mediaServer}${image});` : ''}>
  {#if link}
    <a href="{link}" class="text-gray-700">
      <p>{word}</p>
    </a>
  {:else}
    <p>{word}</p>
  {/if}
</div>

<style>
  div.imgBlk {
    background-size: cover;
  }
</style>
