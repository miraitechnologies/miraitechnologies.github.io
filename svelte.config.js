import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: true,
			strict: true
		}),
		paths: {
			base: dev ? '' : process.env.BASE_PATH
		},
		appDir: 'internal'
	},
	prerender: { entries: [] },
	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
