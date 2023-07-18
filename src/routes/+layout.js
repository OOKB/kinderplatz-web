import _ from 'lodash/fp.js'
import { get } from 'svelte/store';
import { load_Sections } from '$houdini'

function getSectionId({ params, route }) {
  const id = params?.slug || route.id.substring(1)
  if (id.includes('/')) return id.split('/')[0]
  return id
}

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
  const sections = get(Sections).data.sections || []
  const links = sections.filter(_.get('menuItem')).map(getLink)
  const sectionId = getSectionId(event)
  const sectionInfo = sections?.find(_.matches({ id: sectionId })) || { sectionColor: 'red' }
  const sectionLinks = sections.map(({ page, pages, links }) => ({ ...page, links: pages.concat(links)}))
  return { links, sectionId, sectionInfo, sectionLinks };
}
