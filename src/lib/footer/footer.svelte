<script>
  import Address from "$lib/el/address.svelte";
	import Stripe from "$lib/el/stripe.svelte";
  import Contact from "$lib/el/contact.svelte";
  import Hours from "./hours.svelte";
  import Accredited from "./accredited.svelte";
  import Links from "./links.svelte";
	import Block from "./block.svelte";
</script>

<section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 border-y border-red mt-1">
  <Block><Address /></Block>
  <Block><Hours /></Block>
  <Block><Contact /></Block>
  <Block><Accredited /></Block>
</section>

<Links />
<Stripe />