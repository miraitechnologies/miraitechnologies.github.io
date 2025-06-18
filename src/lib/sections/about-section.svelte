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
		</div>
	</div>
</section>
