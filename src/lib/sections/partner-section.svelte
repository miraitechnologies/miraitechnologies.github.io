<script>
	import SectionHeader from '../section-header.svelte';

	const partners = [
		{
			name: 'Shinmei',
			image: '/images/shinmei.svg',
			link: 'https://www.shinmei.co.jp/'
		},
		{
			name: 'MKSC',
			image: '/images/mksc.svg',
			link: 'https://mksc.jp/'
		}
	];
</script>

<section id="partner-section" class="relative">
	<div class="bg-section bg-section-4" />
	<div class="bg-shape bg-shape-4" />
	<div class="container mx-auto px-5 xl:max-w-6xl">
		<div class="pt-24 pb-24 lg:pb-48">
			<SectionHeader
				title="Partners"
				description="We are thankful for the unwavering support of our investors and partners, who have helped us
			navigate through challenges and achieve goals."
			/>
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
					Become a partner and place your logo here
				</div>
			</div>
		</div>
	</div>
</section>
