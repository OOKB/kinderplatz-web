<script>
  export let sectionColor = ''
  export let url = ''
  export let name = ''
  $: textColor = `text-${sectionColor}`
</script>

<li>
  <a class="px-16 py-4 {textColor}" href={url}>{name}</a>
</li>
