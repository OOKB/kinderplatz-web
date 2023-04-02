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

<div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-1">
  {#each blocks as block}
    <Block {...block} />
  {/each}
</div>
