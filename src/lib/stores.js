import { derived } from 'svelte/store'
import { page } from '$app/stores'
import { getSlugColor } from '$lib/meta.js'

function getSectionId(page) {
  const id = page.params?.slug || page.route.id.substring(1)
  if (id.includes('/')) return id.split('/')[0]
  return id
}
export const sectionId = derived(page, getSectionId)
export const pageColor = derived(sectionId, getSlugColor)
