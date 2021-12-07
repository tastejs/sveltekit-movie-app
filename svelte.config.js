import preprocess from 'svelte-preprocess';
// import { resolve } from "path";
import path from 'path';
import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					$components: path.resolve('./src/components'),
					$stores: path.resolve('./src/lib/stores'),
					$actions: path.resolve('./src/actions'),
					$api: path.resolve('./src/routes/api')
				}
			}
		}
	}
};

export default config;
