import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			// See https://kit.svelte.dev/docs/adapter-cloudflare#options for an explanation.
			// routes: {
			// 	include: ['/*'],
			// 	exclude: ['<all>']
			// }
		}),
		alias: {
			$houdini: './$houdini',
		}
	}
};

export default config;
