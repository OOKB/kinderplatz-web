<script>
  import { page } from '$app/stores';

  export let pageColor = ''
  export let slug = ''
  export let title = ''
  $: url = `/${slug}`
  $: active = url === $page.url.pathname
  $: href = `${url}#article-content`
  $: border = active ? 'border-b border-b-red border-solid' : ''
</script>

<li>
  <a class="text-{pageColor} {border}" {href}>
    {title}
  </a>
</li>
