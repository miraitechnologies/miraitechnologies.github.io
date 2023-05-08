<script>
	import SectionHeader from '../section-header.svelte';
	const blocks = [
		{
			title: 'Who we are',
			paragraph:
				'Mirai Technologies LLC is a Mongolian outsourcing company established in 2022 with the investment of Shinmei Corporation of Japan. Since its inception, it has formed a team of skilled people and has been working on software development and AI development projects.',
			image: '/images/svg/startup.svg'
		},
		{
			title: 'What we do',
			paragraph:
				'We write code. We perform a variety of tasks using the latest technology with best solutions like software development, artificial intelligence development, machine learning, computer vision, mobile app development, website development, etc.',
			image: '/images/svg/coding.svg'
		},
		{
			title: 'Our vision',
			paragraph:
				'Our vision is simple. We want to be one of the major players in the field of artificial intelligence development without losing the trust of those who trust us.',
			image: '/images/svg/rocket_launch.svg'
		}
	];
</script>

<section id="about-section" class="relative">
	<div class="bg-section bg-section-2" />
	<div class="bg-shape bg-shape-2" />
	<div class="container mx-auto px-5 xl:max-w-6xl">
		<div class="pt-24 pb-24 lg:pb-48">
			<SectionHeader
				title="About"
				description="About who we are, what we do and what is our vision."
			/>
			<div class="flex flex-col space-y-12 lg:space-y-24 mt-0 lg:mt-36">
				{#each blocks as block, i}
					<div class="grid grid-cols-1 lg:grid-cols-2 gap-x-6">
						<div
							class="order-2 flex flex-col space-y-6 justify-center {i % 2 === 1
								? 'lg:order-2'
								: 'lg:order-1'}"
						>
							<h3
								class="text-2xl lg:text-5xl uppercase font-bold {i % 2 === 1
									? 'lg:text-left'
									: 'lg:text-right'}"
							>
								{block.title}
							</h3>
							<p class="text-justify">{block.paragraph}</p>
						</div>
						<div
							class="order-1 flex lg:justify-center -mb-24 lg:mb-0 opacity-50 lg:opacity-100 -z-10 {i %
								2 ===
							1
								? 'lg:order-1'
								: 'lg:order-2'}"
						>
							<div
								class="w-full h-80 lg:h-96 bg-no-repeat bg-center bg-contain"
								style="background-image: url('{block.image}')"
							/>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
