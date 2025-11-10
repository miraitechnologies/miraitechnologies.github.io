<script>
	import SectionHeader from '../section-header.svelte';
	import viewport from '../useViewportAction';
	import { locale, _ } from 'svelte-i18n';

	const blocks = [
		{
			titleKey: 'about.who_we_are',
			paragraphKey: 'about.who_we_are_desc',
			image: '/images/2.png'
		},
		{
			titleKey: 'about.what_we_do',
			paragraphKey: 'about.what_we_do_desc',
			image: '/images/3.png'
		},
		{
			titleKey: 'about.our_vision',
			paragraphKey: 'about.our_vision_desc',
			image: '/images/4.png'
		}
	];

	let isEnter = false;
</script>

<section id="about-section" class="relative" use:viewport on:enterViewport={() => (isEnter = true)}>
	<div
		class="bg-section bg-section-2 transition-opacity duration-1000 {isEnter
			? 'opacity-100'
			: 'opacity-0'}"
	/>
	<div class="bg-shape bg-shape-2" />
	<div class="container mx-auto px-5 xl:max-w-6xl">
		<div class="pt-24 pb-24 lg:pb-48">
			<SectionHeader title={$_('about.title')} description={$_('about.description')} />
			<div class="flex flex-col space-y-12 lg:space-y-24 mt-0 lg:mt-36">
				{#each blocks as block, i}
					<div class="grid grid-cols-1 lg:grid-cols-2 gap-x-6">
						<div
							class="order-2 flex flex-col space-y-6 justify-center px-5 lg:px-0 {i % 2 === 1
								? 'lg:order-2'
								: 'lg:order-1'}"
						>
							<h3
								class="text-2xl lg:text-5xl uppercase font-bold {i % 2 === 1
									? 'lg:text-left'
									: 'lg:text-right'}"
							>
								{$_(block.titleKey)}
							</h3>
							<p class="text-justify">{$_(block.paragraphKey)}</p>
						</div>
						<div
							class="order-1 flex lg:justify-center -mb-24 lg:mb-0 opacity-50 lg:opacity-100 -z-10 {i %
								2 ===
							1
								? 'lg:order-1'
								: 'lg:order-2'}"
						>
							<div
								class="w-full h-80 lg:h-96 bg-no-repeat bg-center bg-cover rounded-3xl lg:border lg:border-white/50 lg:border-spacing-4"
								style="background-image: url('{block.image}')"
							/>
						</div>
					</div>
				{/each}
			</div>

			<!-- Information Security Policy Section -->
			<div class="mt-24 lg:mt-36">
				<SectionHeader
					id="iso-section"
					title={$_('about.security_policy.title')}
					description={$_('about.security_policy.description')}
				/>
				<div class="flex flex-col items-center mt-8 max-w-4xl mx-auto">
					<!-- Title above first image -->
					<div class="text-center mb-6 px-5">
						<p class="text-white/90 text-lg leading-relaxed">
							Mirai Technologies has successfully implemented the project to introduce international
							standards in our information security management and has received the official
							certification for the Information Security Management System ISO/IEC 27001:2022
							standard.
						</p>
					</div>

					<img
						src="/iso/iso_cert_receiving.jpg"
						alt="ISO Certificate Receiving"
						class="w-full max-w-4xl h-auto rounded-lg mb-6"
					/>

					<!-- Text below first image -->
					<div class="text-center mb-8 px-5">
						<p class="text-white/80 text-base leading-relaxed mb-4">
							By integrating the ISO/IEC 27001:2022 standard, we are further strengthening the trust
							of our clients and partners, continuously improving the quality of our information
							security management system, and delivering products and services that exceed
							customers' expectations. In the future, we aim to bring Mirai Technologies'
							information security practices to the highest international standards.
						</p>
						<p class="text-white/80 text-base leading-relaxed">
							The project was implemented in collaboration with consulting services, and our team
							members have been certified as "Information Security Management System Internal
							Auditors".
						</p>
					</div>

					<img
						src="/iso/iso_cert.jpg"
						alt="ISO Certificate"
						class="w-full max-w-2xl h-auto rounded-lg mb-6"
					/>
				</div>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-12">
					<!-- First Column: Company Policy -->
					<div class="space-y-6">
						<p class="text-justify font-semibold text-lg leading-relaxed">
							{$_('about.security_policy.company_policy_intro')}
						</p>
						<ul class="space-y-4 text-justify">
							{#each $_('about.security_policy.company_policy_points') as point}
								<li class="flex items-start">
									<span class="mr-3 mt-1">•</span>
									<span>{point}</span>
								</li>
							{/each}
						</ul>
					</div>

					<!-- Second Column: Security Activities -->
					<div class="space-y-6">
						<p class="text-justify font-semibold text-lg leading-relaxed">
							{$_('about.security_policy.activities_intro')}
						</p>
						<ul class="space-y-4 text-justify">
							{#each $_('about.security_policy.activities_points') as point}
								<li class="flex items-start">
									<span class="mr-3 mt-1">•</span>
									<span>{point}</span>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
