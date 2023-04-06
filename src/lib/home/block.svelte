<script>
  import classNames from 'classnames'

  export let link = ''
  export let color = ''
  export let word = ''
  export let image = ''
  export let alt = ''

  const mediaServer = '' // 'https://kinderplatz-api.pages.dev'

  $: showGrayText = color === 'orange' || color === 'white'
  $: classStyle = classNames({
    [`bg-${color}`]: color,
    'bg-cover': image,
    'text-natural-600': showGrayText,
    'text-white': !showGrayText,
    'font-bold': image,
  })
</script>

<div
  class="grid aspect-square h-full rounded-sm {classStyle}"
  style={image ? `background-image: url(${mediaServer}${image});` : ''}>
  {#if link}
    <a href="{link}" class="flex items-center justify-center">
      {word}
    </a>
  {:else}
    <p class="flex justify-center items-center">{word}</p>
  {/if}
</div>
