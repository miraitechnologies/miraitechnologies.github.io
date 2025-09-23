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
	<ProductSolutionSection />
	<PartnerSection />
	<ContactSection />
</main>
