<script>
  import { page } from '$app/stores';

  export let sectionColor = ''
  export let url = ''
  export let name = ''
  $: active = url === $page.url.pathname
  $: textColor = active ? 'text-slate-50' : `text-${sectionColor}`
  $: background = active ? `bg-${sectionColor}` : ''
</script>

<li>
  <a class="px-16 py-4 {textColor} {background}" href={url}>{name}</a>
</li>
