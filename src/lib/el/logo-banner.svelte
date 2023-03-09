<script>
  import Logo from './logo.svelte'

  /** @type {import('./$types').LogoBannerData} */
  export let data
  export let title = ""
</script>

<div class="logo banner flex bg-orange">

  <Logo />

  <h1 class="white">{title}</h1>

</div>
