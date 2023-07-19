<script>

  import Address from "$lib/el/address.svelte";
	import Stripe from "$lib/el/stripe.svelte";
  import Contact from "$lib/el/contact.svelte";
  import Hours from "./hours.svelte";
  import Accredited from "./accredited.svelte";
  import Links from "./links.svelte";
	import Block from "./block.svelte";
  import Logo from '$lib/el/logo.svelte'

  export let pageColor = ''
  export let sectionLinks = []
  export let linkClasses = ''

  $: borderColor = `border-${pageColor}`;
  $: linkClasses = "hover:text-natural-700 hover:underline hover:decoration-solid";

</script>

<footer class="text-[90%]">
  <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 border-y {borderColor} mt-1">
    <Block><Address /></Block>
    <Block><Hours /></Block>
    <Block><Contact /></Block>
    <Accredited />
  </section>

  <Links {sectionLinks} {linkClasses} />

  <section class="border-t {borderColor} p-5 lg:p-6 xl:p-7 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4">
    <Logo class="w-full max-w-[200px] h-auto z-[1] px-3 pt-2 pb-1 mb-4 relative bg-gradient-to-r from-red-600 to-orange-600" />
    <a class={linkClasses} href="/">KinderPlatz<br>
    Childcare &amp; Education Center </a>
  </section>

  <Stripe />
</footer>
