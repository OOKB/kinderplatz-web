import _ from 'lodash/fp.js'
// import { oneOf } from 'understory'
import { setFieldWith } from 'prairie'
// Change these URLs to be on CAPE or something.
const LIST_FILES_URL = 'https://img.rogersandgoffigon.com/b2/files/cape-client/kinderplatz'
const IMG_URL = 'https://img.rogersandgoffigon.com/b2'
// const IMG_URL = 'http://127.0.0.1:8787/b2'

const getUrl = _.curry((variationId, id) => `${IMG_URL}/${variationId}/${id}`)
const getThumbnail = (id) => ({
  src: getUrl('w175', id),
})
const getName = _.flow(
  _.split('/'),
  _.last,
  _.split('.'),
  _.first,
)
const getImg = _.flow(
  setFieldWith('name', 'fileName', getName),
  _.pick(['fileId', 'height', 'width', 'segment', 'id', 'name']),
  setFieldWith('src', 'id', getUrl('raw')),
  setFieldWith('thumbnail', 'id', getThumbnail),
)
const getImages = _.flow(
  // _.slice(0, 5),
  _.map(getImg),
  _.groupBy('segment')
)
const getOtherImgs = (names, images) => images['cr-p'].filter(({ name }) => _.includes(name, names))

export const prerender = true;

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  const res = await fetch(LIST_FILES_URL);
  const { results } = await res.json();
  const images = getImages(results)
  const infant = getOtherImgs(['cr-p054', 'cr-p055', 'cr-p056', 'cr-p057', 'cr-p058'], images)
  const prek = getOtherImgs(['cr-p026', 'cr-p027', 'cr-p028', 'cr-p032', 'cr-p034', 'cr-p036', 'cr-p045', 'cr-p063'], images)
  const albums = [
    {
      title: 'Infant/Toddler Wing',
      id: 'infant',
      images: images['lkz-smr'].concat(infant), // 54-58
    },
    {
      title: 'Preschool/Pre-Kindergarten Wing',
      id: 'pre-k',
      images: images['bkz'].concat(prek), // 
    },
  ]
  return {
    albums,
  };
}
