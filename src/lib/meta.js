import _ from 'lodash/fp.js'
// import { pages } from './page-info.js'

// Stub in some values for section colors. Could be replaced with external file later.
const sectionColors = _.mapValues(_.get('sectionColor'), {})

export function getSlugColor(key) {
  return sectionColors[key] || sectionColors.testimonials
}
