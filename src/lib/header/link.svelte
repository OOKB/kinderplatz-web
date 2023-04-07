<script>
  import { page } from '$app/stores';

  export let sectionColor = ''
  export let url = ''
  export let name = ''
  export let hoverState = ''

  $: active = url === $page.url.pathname
  $: textColor = active ? 'text-slate-50' : `text-${sectionColor}`
  $: background = active ? `bg-${sectionColor}` : ''
  $: border = active ? '' : 'border-b border-orange'

  hoverState = `hover:bg-${sectionColor}`
</script>

<li class="flex-1 {background} {border}">
  <a class="{textColor} block w-full no-underline px-4 py-2 border-t-[transparent] {hoverState} hover:text-white" href={url}>
    {name}
  </a>
</li>
