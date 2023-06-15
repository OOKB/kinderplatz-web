<script>
  import { pageColor } from '$lib/stores.js';

  import Address from "$lib/el/address.svelte";
	import Stripe from "$lib/el/stripe.svelte";
  import Contact from "$lib/el/contact.svelte";
  import Hours from "./hours.svelte";
  import Accredited from "./accredited.svelte";
  import Links from "./links.svelte";
	import Block from "./block.svelte";

  $: borderColor = `border-${$pageColor}`;

</script>

<footer class="text-[90%]">
  <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 border-y {borderColor} mt-1">
    <Block><Address /></Block>
    <Block><Hours /></Block>
    <Block><Contact /></Block>
    <Accredited />
  </section>

  <Links />

  <Stripe />
</footer>
