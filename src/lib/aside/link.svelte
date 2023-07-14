<script>
  import { page } from '$app/stores';

  export let pageColor = ''
  export let slug = ''
  export let title = ''
  export let classes = ''
  $: url = `/${slug}`
  $: active = url === $page.url.pathname
  $: href = `${url}#article-content`
  $: border = active ? 'text-natural-300 bg-transparent hover:bg-transparent' : ''
</script>

<li>
  <a class="{classes} text-{pageColor} {border}" {href}>
    {title}
  </a>
</li>
