<script>
  import TopBanner from '$lib/el/top-banner.svelte';
  import Header from '$lib/header/header.svelte';
  import "../app.css";
</script>

<TopBanner />
<Header />
<main>
  <slot></slot>
</main>
