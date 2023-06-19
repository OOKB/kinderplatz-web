<script>
	import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import TopBanner from '$lib/el/top-banner.svelte';
  import Header from '$lib/header/header.svelte';
	import Footer from '$lib/footer/footer.svelte';
  import "../app.css";

  export let data
  $: ({ links } = data)
  // Create a store and update it when necessary...
  const section = writable();
  $: section.set(data.sectionInfo);
  $: (setContext('section', section))
</script>

<svelte:head>
	<title>KinderPlatz Childcare & Education Center</title>
</svelte:head>

<TopBanner />
<Header {links} />
<main>
  <slot></slot>
</main>
<Footer pageColor={data.sectionInfo.sectionColor} />
<div class="border-b-9 border-{data.sectionInfo.sectionColor}"></div>
