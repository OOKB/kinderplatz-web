<script>
  import { page } from '$app/stores';

  export let sectionColor = ''
  export let url = ''
  export let name = ''

  $: active = url === $page.url.pathname
  $: textColor = active ? 'text-slate-50' : `text-${sectionColor}`
  $: background = active ? `bg-${sectionColor}` : ''
  $: border = active ? '' : 'border-b border-orange'
</script>

<li class="py-2 flex-1 {background} {border}">
  <a class="hover:bg-{sectionColor} {textColor}" href={url}>
    {name}
  </a>
</li>
