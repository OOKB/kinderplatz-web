// Stub in some values for section colors. Could be replaced with external file later.
const sectionColors = {
  agegroups: 'bg-green-500',
  approach: 'bg-yellow-500',
  contact: 'bg-red-500',
  credentials: 'bg-fuchsia-500',
  introduction: 'bg-orange-500',
  testimonials: 'bg-pink-600',
  tuition: 'bg-blue-600',
}

export function getSlugColor(id) {
  return sectionColors[id] || sectionColors.testimonials
}
