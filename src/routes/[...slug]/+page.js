import _ from 'lodash/fp.js'
import { get } from 'svelte/store'
import { load_PageData } from '$houdini'

/* @type { import('./$houdini').PageLoad } */
export async function load(event) {
  const { PageData } = await load_PageData({
    blocking: true,
    event,
    variables: event.params,
  })
  const pgData = get(PageData)
  return { ...pgData.data.page };
}
