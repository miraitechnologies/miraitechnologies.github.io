import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: 'index.html'
		}),
		paths: {
			base: dev ? '' : process.env.BASE_PATH
		},
		appDir: 'internal'
	},
	prerender: { default: true },
	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
