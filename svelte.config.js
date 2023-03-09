import adapter from '@sveltejs/adapter-cloudflare';

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
		})
	}
};

export default config;
