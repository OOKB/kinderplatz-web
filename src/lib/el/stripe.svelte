<script>
  import { pageColor } from '$lib/stores.js';
  $: background = `bg-${$pageColor}`;
</script>

<div class="{background} leading-10 h-12 w-screen">
  <!-- Red footer stripe here, suggesting you have a fantastic day! -->
  <!-- The footer along witht he border color of the sections in the footer should change with the section!? -->
</div>
