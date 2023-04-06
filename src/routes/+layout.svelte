<script>
  import TopBanner from '$lib/el/top-banner.svelte';
  import Header from '$lib/header/header.svelte';
	import Footer from '$lib/footer/footer.svelte';
  import "../app.css";
</script>
<svelte:head>
	<title>KinderPlatz Childcare & Education Center</title>
</svelte:head>

<TopBanner />
<Header />
<main>
  <slot></slot>
</main>
<Footer />
