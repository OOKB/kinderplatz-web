<script>
  import classNames from 'classnames'

  export let link = ''
  export let color = ''
  export let word = ''
  export let image = ''
  const mediaServer = 'https://kinderplatz-api.pages.dev'
  $: classStyle = classNames('block', color, 'flex-initial', 'w-64', 'h-64', { imgBlk: image })
</script>

<div class={classStyle} style={image ? `background-image: url(${mediaServer}${image});` : ''}>
  {#if link}
    <a href="{link}" class="text-gray-700 no-style">
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
