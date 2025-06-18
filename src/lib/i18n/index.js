import { register, init, locale, isLoading } from 'svelte-i18n';
import { browser } from '$app/environment';
import { derived } from 'svelte/store';

register('en', () => import('./locales/en.json'));
register('jp', () => import('./locales/jp.json'));

const savedLocale = browser ? localStorage.getItem('lang') : null;

init({
	fallbackLocale: 'en',
	initialLocale: savedLocale || 'en'
});

// Keep language in localStorage
if (browser) {
	locale.subscribe((value) => {
		if (value) localStorage.setItem('lang', value);
	});
}

// Create a reactive store to check when loading is finished
export const localeReady = derived(isLoading, ($isLoading) => !$isLoading);
