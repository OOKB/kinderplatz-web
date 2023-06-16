<script>
  import SubMenu from '$lib/el/sub-menu.svelte';

  $: linkClasses = "hover:text-natural-700 hover:underline hover:decoration-solid";

</script>
<section class="p-5 lg:p-6 xl:p-8">
  <div class="hidden">
    <a class="hover:text-natural-700 hover:underline hover:decoration-solid"></a>
  </div>
  <nav>
    <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 ">
      <li>
        <a class={linkClasses} href="/">KinderPlatz :: <br>
        Childcare &amp; Education Center </a>
      <br>
      <br>
      <a class={linkClasses}  href="/introduction">Introduction</a>
        <ul class="list-reset ml-6">
          <li><a class={linkClasses}  href="/ageGroups/immersion">Spanish Immersion</a></li>
          <li><a class={linkClasses}  href="/testimonials">Testimonials</a></li>
          <li><a class={linkClasses}  href="/gallery/">Kinderplatz Photos</a></li>
        </ul>
      </li>
      <li>
        <a class={linkClasses}  href="/approach/">Our Approach</a>
        <ul class="list-reset ml-6">
          <li><a class={linkClasses}  href="/approach/goals">Program Goals</a></li>
          <li><a class={linkClasses}  href="/approach/curriculum">Curriculum &amp; Assessments</a></li>
          <li><a class={linkClasses}  href="/approach/behavior">Behavior Guidance</a></li>
          <li><a class={linkClasses}  href="/approach/diversity">Diversity</a></li>
          <li><a class={linkClasses}  href="/approach/community">Community</a></li>
          <li><a class={linkClasses}  href="/approach/resources">Parent Resources</a></li>
          <li><a class={linkClasses}  href="/approach/open-door">Open Door Policy</a></li>
          <li><a class={linkClasses}  href="/approach/enrichment">Enrichment Programs</a>
            <ul class="list-reset ml-6">
              <li><a class={linkClasses}  href="/enrichment/nocost">No Cost (Integrated)</a>
                <ul class="list-reset ml-6">
                  <li><a class={linkClasses}  href="/ageGroups/immersion">Spanish Immersion</a></li>
                  <li><a class={linkClasses}  href="/enrichment/nocost#spanish">Spanish Language Instruction</a></li>
                  <li><a class={linkClasses}  href="/enrichment/nocost#music">Music and Movement</a></li>
                  <li><a class={linkClasses}  href="/enrichment/nocost#movement">Creative Movement</a></li>
                  <li><a class={linkClasses}  href="/enrichment/nocost#signLanguage">Sign Language</a></li>
                  <li><a class={linkClasses}  href="/enrichment/nocost#cultural">Cultural Enrichment</a></li>
                </ul>
              </li>
            </ul>
            <ul class="list-reset ml-6">
              <li><a class={linkClasses}  href="/enrichment/variable">Variable Cost</a></li>
            </ul>
            <ul class="list-reset ml-6">
              <li><a class={linkClasses}  href="/enrichment/fee">With Additional Fees</a>
                <ul class="list-reset ml-6">
                  <li><a class={linkClasses}  href="/enrichment/fieldtrips">Field Trips</a></li>
                  <li><a class={linkClasses}  href="/enrichment/kinderroo">Kinderroo Soccer</a></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <a class={linkClasses}  href="/ageGroups">Age Groups</a>
        <ul class="list-reset ml-6">
          <li><a class={linkClasses}  href="/ageGroups/ratios">Child/Teacher Ratios</a></li>
          <li><a class={linkClasses}  href="/ageGroups/summerschool#programming">Summer School Age Program</a></li>
          <li><a class={linkClasses}  href="/ageGroups/immersion">Spanish Immersion</a></li>
          <li><a class={linkClasses}  href="/gallery/">Kinderplatz Photos</a></li>
        </ul>
      </li>
      <!-- <SubMenu {...pages.tuition} />
      <SubMenu {...pages.credentials} />
      <SubMenu {...pages.contact} /> -->
    </ul>
  </nav>
</section>