import _ from 'lodash/fp.js'
// Change this.
const URL = 'https://img.rogersandgoffigon.com/files'

const getImg = _.pick(['fileId', 'height', 'width', 'segment'])
const getImages = _.flow(
  // _.slice(0, 5),
  _.map(getImg),
  _.groupBy('segment')
)

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  const res = await fetch(URL);
  const { results } = await res.json();
  const images = getImages(results)
  return {
    images,
  };
}
