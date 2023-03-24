<script>
	import Page from "$lib/el/page.svelte";
	import Address from "$lib/el/address.svelte";
	import ContactBlock from "$lib/el/contact.svelte";
  /* @type { import('./$houdini').Contact } */
  export let data
  $: ({ Contact } = data)
</script>

<Page title={$Contact.data.page.title} content={$Contact.data.page.content}>
  <section class="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <Address />
    <ContactBlock />
  </section>
</Page>
