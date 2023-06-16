<script>
  import TopBanner from '$lib/el/top-banner.svelte';
  import Header from '$lib/header/header.svelte';
	import Footer from '$lib/footer/footer.svelte';
  import "../app.css";

  export let data
  $: ({ links } = data)
</script>

<svelte:head>
	<title>KinderPlatz Childcare & Education Center</title>
</svelte:head>

<TopBanner />
<Header {links} />
<main>
  <slot></slot>
</main>
<Footer />
