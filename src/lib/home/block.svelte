<script>
  import classNames from 'classnames'

  export let link = ''
  export let color = ''
  export let word = ''
  export let image = ''
  export let alt = ''
  const mediaServer = '' // 'https://kinderplatz-api.pages.dev'
  $: classStyle = classNames({
    [`bg-${color}`]: color,
    imgBlk: image,
  })
</script>

<div
  class="block flex-initial h-64 w-64 content-stretch {classStyle}"
  style={image ? `background-image: url(${mediaServer}${image});` : ''}>
  {#if link}
    <a href="{link}" class="text-gray-700">
      <p class="flex items-center justify-center h-100">{word}</p>
    </a>
  {:else}
    <p class="justify-center items-center">{word}</p>
  {/if}
</div>

<style>
  div.imgBlk {
    background-size: cover;
  }
</style>
