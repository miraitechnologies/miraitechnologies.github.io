<script>
	import HeroSection from '../lib/sections/hero-section.svelte';
	import AboutSection from '../lib/sections/about-section.svelte';
	import TeamSection from '../lib/sections/team-section.svelte';
	import ProductSolutionSection from '../lib/sections/product-solution-section.svelte';
	import PartnerSection from '../lib/sections/partner-section.svelte';
	import ContactSection from '../lib/sections/contact-section.svelte';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	// Get product parameter from URL - handle both query params and pathname
	let productParam = null;

	$: if (browser) {
		// Check query parameter first
		const queryParam = $page.url.searchParams.get('product');
		if (queryParam) {
			productParam = queryParam;
		} else {
			// Check if we're on a product path like /products/asphalt_finisher
			const pathname = $page.url.pathname;
			const productMatch = pathname.match(/^\/products\/(.+)$/);
			if (productMatch) {
				const productKey = productMatch[1];
				// Redirect to main page with query parameter
				goto(`/?product=${productKey}`, { replaceState: true });
			}
		}
	}
</script>

<svelte:head>
	<title>Mirai Technologies LLC</title>
</svelte:head>

<main class="relative">
	<div class="bg-noise" />
	<div class="bg-main" />
	<HeroSection />
	<AboutSection />
	<TeamSection />
	<ProductSolutionSection {productParam} />
	<PartnerSection />
	<ContactSection />
</main>
