<script>
  import LogoBanner from "$lib/el/logo-banner.svelte";

    /* @type { import('./$houdini').PageData } */
    export let data
     $: ({ Intro } = data)
</script>

<LogoBanner title="Introduction" />
<aside></aside>
<article>
  <h2>{$Intro.data.title}</h2>
</article>