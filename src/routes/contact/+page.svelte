<script>
	import Page from "$lib/el/page.svelte";
	import Address from "$lib/el/address.svelte";
	import ContactBlock from "$lib/el/contact.svelte";
  /* @type { import('./$houdini').Contact } */
  export let data
  $: ({ Contact } = data)
</script>

<Page title={$Contact.data.page.title} content={$Contact.data.page.content}>
  <!-- Make this more reusable for other pages. -->
  <aside slot="aside">
    <div class="image-block top">
      <img src="https://kinderplatzkids.com/f/i/elizaveta-dushechkina-XPLCCRTX3ic-unsplash.jpg">
    </div>
    <h2>Section Contents</h2>
    <section>
      <ul class="list-reset">
        <li><a class="red" href="/gallery">Kinderplatz Photos</a></li>
      </ul>
    </section>
    <div class="image-block">
      <img src="https://kinderplatzkids.com/f/i/jeshoots-com-LKREcvZeoJQ-unsplash.jpg">
    </div>
  </aside>

  <section class="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <Address />
    <ContactBlock />
  </section>
</Page>
