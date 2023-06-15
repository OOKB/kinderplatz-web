<script>
  import { page } from '$app/stores';

  export let sectionColor = ''
  export let url = ''
  export let name = ''
  export let hoverState = ''

  $: active = url === $page.url.pathname
  $: textColor = active ? 'text-slate-50' : `text-${sectionColor}`
  $: border = active ? '' : 'border-b border-b-red border-solid'
  $: background = active ? `bg-${sectionColor}` : ''
  $: hoverState = `hover:bg-${sectionColor}`
</script>

<li class="w-full block flex-1 {background} md:border-r-red md:border-r md:border-solid xl:border-x-0 {border} md:w-[calc(100%_/_3)] md:basis-[30%] xl:w-auto xl:basis-auto">
  <a class="{textColor} block w-full no-underline px-4 py-2 md:px-[0.3333em] xl:px-1 border-t-[transparent] {hoverState} hover:text-white" href={url}>
    {name}
  </a>
</li>
