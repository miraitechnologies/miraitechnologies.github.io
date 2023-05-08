import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? '' : process.env.BASE_PATH
		},
		appDir: 'internal'
	},
	prerender: { default: true, crawl: true, concurrency: 1 },
	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
