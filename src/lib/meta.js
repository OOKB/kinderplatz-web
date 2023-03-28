import _ from 'lodash/fp.js'
import { pages } from './page-info.js'

// Stub in some values for section colors. Could be replaced with external file later.
const sectionColors = _.mapValues(({ sectionColor }) => `bg-${sectionColor}`, pages)
export function getSlugColor(id) {
  return sectionColors[id] || sectionColors.testimonials
}
