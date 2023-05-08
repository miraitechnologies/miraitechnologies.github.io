import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';

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
			base: dev ? '' : ''
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
