<script>
  import SubMenu from '$lib/el/sub-menu.svelte';
  import { pages } from '$lib/page-info.js'
</script>
<section class="p-8 footer-links">
  <nav>
    <ul class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-4">
      <li>
        <a class="darkgray" href="/">KinderPlatz :: <br>
        Childcare &amp; Education Center </a>
      <br>
      <br>
      <a class="darkgray" href="/introduction">Introduction</a>
        <ul class="list-reset ml-6">
          <li><a class="darkgray" href="/ageGroups/immersion">Spanish Immersion</a></li>
          <li><a class="darkgray" href="/testimonials">Testimonials</a></li>
          <li><a class="darkgray" href="/gallery/">Kinderplatz Photos</a></li>
        </ul>
      </li>
      <li>
        <a class="darkgray" href="/approach/">Our Approach</a>
        <ul class="list-reset ml-6">
          <li><a class="darkgray" href="/approach/goals">Program Goals</a></li>
          <li><a class="darkgray" href="/approach/curriculum">Curriculum &amp; Assessments</a></li>
          <li><a class="darkgray" href="/approach/behavior">Behavior Guidance</a></li>
          <li><a class="darkgray" href="/approach/diversity">Diversity</a></li>
          <li><a class="darkgray" href="/approach/community">Community</a></li>
          <li><a class="darkgray" href="/approach/resources">Parent Resources</a></li>
          <li><a class="darkgray" href="/approach/open-door">Open Door Policy</a></li>
          <li><a class="darkgray" href="/approach/enrichment">Enrichment Programs</a>
            <ul class="list-reset ml-6">
              <li><a class="darkgray" href="/enrichment/nocost">No Cost (Integrated)</a>
                <ul class="list-reset ml-6">
                  <li><a class="darkgray" href="/ageGroups/immersion">Spanish Immersion</a></li>
                  <li><a class="darkgray" href="/enrichment/nocost#spanish">Spanish Language Instruction</a></li>
                  <li><a class="darkgray" href="/enrichment/nocost#music">Music and Movement</a></li>
                  <li><a class="darkgray" href="/enrichment/nocost#movement">Creative Movement</a></li>
                  <li><a class="darkgray" href="/enrichment/nocost#signLanguage">Sign Language</a></li>
                  <li><a class="darkgray" href="/enrichment/nocost#cultural">Cultural Enrichment</a></li>
                </ul>
              </li>
            </ul>
            <ul class="list-reset ml-6">
              <li><a class="darkgray" href="/enrichment/variable">Variable Cost</a></li>
            </ul>
            <ul class="list-reset ml-6">
              <li><a class="darkgray" href="/enrichment/fee">With Additional Fees</a>
                <ul class="list-reset ml-6">
                  <li><a class="darkgray" href="/enrichment/fieldtrips">Field Trips</a></li>
                  <li><a class="darkgray" href="/enrichment/kinderroo">Kinderroo Soccer</a></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <a class="darkgray" href="/ageGroups">Age Groups</a>
        <ul class="list-reset ml-6">
          <li><a class="darkgray" href="/ageGroups/ratios">Child/Teacher Ratios</a></li>
          <li><a class="darkgray" href="/ageGroups/summerschool#programming">Summer School Age Program</a></li>
          <li><a class="darkgray" href="/ageGroups/immersion">Spanish Immersion</a></li>
          <li><a class="darkgray" href="/gallery/">Kinderplatz Photos</a></li>
        </ul>
      </li>
      <SubMenu {...pages.tuition} />
      <SubMenu {...pages.credentials} />
      <SubMenu {...pages.contact} />
    </ul>
  </nav>
</section>