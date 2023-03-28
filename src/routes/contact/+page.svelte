<script>
  import { getPageInfo } from '$lib/page-info.js'
	import Page from "$lib/el/page.svelte";
	import Address from "$lib/el/address.svelte";
	import ContactBlock from "$lib/el/contact.svelte";
	import Aside from "$lib/el/aside.svelte";
  /* @type { import('./$houdini').Contact } */
  export let data
  $: ({ Contact } = data)

  const pageInfo = getPageInfo('contact')
</script>

<Page title={$Contact.data.page.title} content={$Contact.data.page.content}>
  {#if pageInfo && pageInfo.images}
    <Aside images={pageInfo.images} links={pageInfo.links} />
  {/if}

  <section class="grid grid-cols-1 sm:grid-cols-2 gap-4" slot="article-bottom">
    <Address />
    <ContactBlock />
  </section>
</Page>
