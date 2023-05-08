// import { browser } from '$app/environment';
// import '$lib/i18n';
// import { locale, waitLocale } from 'svelte-i18n';

export const prerender = true;
export const ssr = true;
export const csr = false;
export const trailingSlash = 'always';


// /** @type {import('./$types').PageLoad} */
// export const load = async () => {
// 	if (browser) {
// 		locale.set(window.navigator.language);
// 	}
// 	await waitLocale();
// };
