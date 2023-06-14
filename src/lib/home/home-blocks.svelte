<script>
  import Block from "./block.svelte";
  const blocks = [
    {
      word: 'Learn',
      color: 'orange',
      link: '/introduction',
    },
    {
      alt: 'boy smiles',
      image: '/images/w450/general/andriyko-podilnyk-XH9NoY2RTwY-unsplash.jpg',
    },
    {
      word: 'Share',
      alt: 'finger paint hand prints',
      image: '/images/w450/general/bernard-hermant-5zu86kyV_UY-unsplash.jpg',
    },
    {
      word: 'Grow',
      color: 'white',
    },
    {
      word: 'Create',
      color: 'lime',
      link: '/agegroups',
    },
    {
      alt: 'girl smiles',
      image: '/images/w450/general/michael-mims-ISczHsDwK1M-unsplash.jpg'
    },
    {
      word: 'Laugh',
      color: 'white',
    },
    {
      word: 'Love',
      color: 'fuchsia',
      link: 'credentials',
    },
    {
      image: '/images/w450/general/caleb-woods-ecRuhwPIW7c-unsplash.jpg',
    },
    {
      word: 'Smile',
      color: 'sky',
      link: '/tuition',
    },
    {
      image: '/images/w450/general/caleb-woods-VZILDYoqn_U-unsplash.jpg',
    },
    {
      word: 'Play',
      image: '/images/w450/general/markus-spiske-nvKQ1kxheRc-unsplash.jpg',
    },
  ]
</script>

<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 text-4xl md:text-3xl lg:text-4xl xl:text-5xl gap-1 text-center font-semibold content-stretch px-4">
  {#each blocks as block}
    <Block {...block} />
  {/each}
</div>
