<script>
  export let sectionColor = ''
  export let url = ''
  export let name = ''
  $: textColor = `text-${sectionColor}`
</script>

<li>
  <a class={textColor} href={url}>{name}</a>
</li>
