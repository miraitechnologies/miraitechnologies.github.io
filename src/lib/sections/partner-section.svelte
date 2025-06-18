<script>
	import SectionHeader from '../section-header.svelte';
	import viewport from '../useViewportAction';
	import { locale, _ } from 'svelte-i18n';
	const partners = [
		{
			name: 'Shinmei',
			image: '/images/shinmei.png',
			link: 'https://www.shinmei.co.jp/'
		},
		{
			name: 'MKSC',
			image: '/images/mksc.png',
			link: 'https://mksc.jp/'
		}
	];
	let isEnter = false;
</script>

<section
	id="partner-section"
	class="relative"
	use:viewport
	on:enterViewport={() => (isEnter = true)}
>
	<div
		class="bg-section bg-section-4 transition-opacity duration-1000 {isEnter
			? 'opacity-100'
			: 'opacity-0'}"
	/>
	<div class="bg-shape bg-shape-4" />
	<div class="container mx-auto px-5 xl:max-w-6xl">
		<div class="pt-24 pb-24 lg:pb-48">
			<SectionHeader title={$_('partner.title')} description={$_('partner.description')} />
			<div
				class="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-12 mt-24 lg:mt-36"
			>
				{#each partners as partner}
					<a
						rel="noopener noreferrer"
						target="_blank"
						href={partner.link}
						title={partner.name}
						class="opacity-60 hover:opacity-100 transition-opacity bg-blur rounded-lg p-4 h-20 lg:h-24"
					>
						<img src={partner.image} alt={partner.name} class="w-auto h-full object-contain" />
					</a>
				{/each}
				<div
					class="h-24 opacity-60 hover:opacity-100 transition-opacity  p-4 flex justify-center items-center uppercase bg-blur rounded-lg text-xs w-48 text-center"
				>
					{$_('partner.become_a_partner')}
				</div>
			</div>
		</div>
	</div>
</section>
