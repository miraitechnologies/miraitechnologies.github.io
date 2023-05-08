<script>
	import HeroSection from '../lib/sections/hero-section.svelte';
	import AboutSection from '../lib/sections/about-section.svelte';
	import TeamSection from '../lib/sections/team-section.svelte';
	import PartnerSection from '../lib/sections/partner-section.svelte';
	import ContactSection from '../lib/sections/contact-section.svelte';
	const currentYear = new Date().getFullYear();
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
			<small class="text-sm">© {currentYear} Mirai Technologies LLC</small>
		</p>
	</div>
</footer>
