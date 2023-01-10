<script>
	// @ts-nocheck
	import { inview } from 'svelte-inview';
	import HeroSection from '../lib/sections/hero-section.svelte';
	import AboutSection from '../lib/sections/about-section.svelte';
	import TeamSection from '../lib/sections/team-section.svelte';
	import PartnerSection from '../lib/sections/partner-section.svelte';
	import ContactSection from '../lib/sections/contact-section.svelte';

	let current = 0;

	const inView = (pos) => (current = pos);
</script>

<svelte:head>
	<title>Mirai Technologies</title>
</svelte:head>
<main class="relative">
	<div class="bg-noise" />
	<div class="bg-main" />
	<HeroSection />
	<AboutSection />
	<TeamSection />
	<PartnerSection />
	<ContactSection />
</main>
<footer>
	<div class="container mx-auto py-4">
		<p class="text-center lg:text-right">
			<small class="text-sm">© 2022 Mirai Technologies LLC</small>
		</p>
	</div>
</footer>
