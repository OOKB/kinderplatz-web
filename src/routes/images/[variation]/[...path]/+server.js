const IMG_URL = 'http://img.rogersandgoffigon.com'
const ACCOUNT = 'kinderplatz'

/** @type {import('./$types').PageServerLoad} */
export async function GET({ params: { variation, path }, request }) {
  const url = `${IMG_URL}/b2/path/${variation}/${ACCOUNT}/images/${path}`
  // console.log(variation, path, url)
  const headers = {
    accept: request.headers.get('accept'),
    'accept-encoding': request.headers.get('accept-encoding'),
    'accept-language': request.headers.get('accept-language'),
    'user-agent': request.headers.get('user-agent'),
  }

  return fetch(url, { headers })
}
