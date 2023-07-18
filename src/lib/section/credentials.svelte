<script>
  const images = [
    { url: 'https://mn.gov/dhs/', alt: 'MN DHS Logo', image: '/images/w450/logo/dhs-logo-rgb-color-1200x338-transparent.png' },
    { url: 'https://www.naeyc.org/', alt: 'NAEYC Logo', image: '/images/w450/logo/naeyc-logo.png' }
  ]
</script>

<div class="img-group flex">
  {#each images as img}
    <a class="no-style" href={img.url}><img src={img.image} alt={img.alt}></a>
  {/each}
</div>
