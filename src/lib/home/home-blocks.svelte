<script>
  import Block from "./block.svelte";
</script>

<div class="flex">

  <Block link="/introduction" word="Learn" color="bg-orange" />
  <Block image="/media/andriyko-podilnyk-XH9NoY2RTwY-unsplash.jpg" />
  <Block word="Share" />
  <Block word="Grow" />

  <div class="block bg-green flex-initial">
    <a href="/ageGroups/" class="flex white no-style white-hover">
      <p class="white">Create</p>
    </a>
  </div>

  <div class="block flex-initial imgBlock">
  </div>

  <div class="block flex-initial">
    <p>Laugh</p>
  </div>

  <div class="block bg-purple flex-initial">
    <a href="credentials.html" class="flex white no-style white-hover">
      <p class="white">Love</p>
    </a>
  </div>
  <div class="block flex imgBlock">
  </div>
  <div class="block bg-blue flex">
    <a href="/tuition/" class="flex white no-style white-hover">
      <p class="white">Smile</p>
    </a>
  </div>
  <div class="block flex imgBlock">
  </div>
  <div class="block flex imgBlock">
    <p>Play</p>
  </div>
</div>