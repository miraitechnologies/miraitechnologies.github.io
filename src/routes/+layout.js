import { dev, browser } from '$app/environment';
import '$lib/i18n';
import { locale, waitLocale } from 'svelte-i18n';

export const ssr = true;
export const csr = dev;
export const prerender = false;

/** @type {import('./$types').PageLoad} */
export const load = async () => {
	if (browser) {
		locale.set(window.navigator.language);
	}
	await waitLocale();
};
