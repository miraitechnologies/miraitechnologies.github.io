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

<main class="relative">
	<div class="bg-noise -z-20" />
	<div class="bg-main -z-40" />
	<HeroSection />
	<AboutSection />
	<TeamSection />
	<PartnerSection />
	<ContactSection />
</main>
<footer>
	<div class="container mx-auto py-4">
		<p><small class="text-sm text-right">© 2022 Mirai Technologies LLC</small></p>
	</div>
</footer>

<style scoped>
	.bg-main {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-image: url('/images/bg/bg1.png');
		background-repeat: no-repeat;
		background-size: 75% auto;
	}
	.bg-noise {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-image: url('/images/bg/noise.png');
		background-repeat: repeat;
		background-size: 35px auto;
	}
</style>
