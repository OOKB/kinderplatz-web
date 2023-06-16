import { get } from 'svelte/store';
import { load_Sections } from '$houdini'

function getLink({ page: { slug, title }, sectionColor }) {
  return {
    sectionColor,
    url: `/${slug}`,
    name: title,
  }
}
/** @type {import('./$types').LayoutLoad} */
export async function load(event) {
  const { Sections } = await load_Sections({ event })
  const links = get(Sections).data.sections.map(getLink)
  return { links };
}
