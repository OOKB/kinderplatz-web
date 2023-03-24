<script>
  import classNames from 'classnames'

  export let link = ''
  export let color = ''
  export let word = ''
  $: classStyle = classNames('block', color, 'flex-initial', 'w-64')
</script>

<div class={classStyle}>
  {#if link}
    <a href="{link}" class="flex darkgray no-style darkgray-hover">
      <p>{word}</p>
    </a>
  {:else}
    <p>{word}</p>
  {/if}
</div>
