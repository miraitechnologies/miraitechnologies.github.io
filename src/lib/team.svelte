<script>
	import Carousel from 'svelte-carousel';

	/**
	 * @type {Carousel}
	 */
	let carousel;

	let current = 0;

	const handleNextClick = () => {
		carousel.goToNext();
	};
	const handlePrevClick = () => {
		carousel.goToPrev();
	};
	const members = [
		{
			role: 'Founder',
			fullname: 'Lkhagvasuren Jazag',
			image: '/images/lkhagvasuren.jpg'
		},
		{
			role: 'Bridge Engineer',
			fullname: 'Ankhbayar Tsagaan',
			image: '/images/ankhbayar.jpg'
		},
		{
			role: 'Software Engineer',
			fullname: 'Bat-Orshikh Baavgaikhuu',
			image: '/images/bat-orshikh.jpg'
		},
		{
			role: 'Bridge Engineer',
			fullname: 'Batzorigt Retsen',
			image: '/images/batzorigt.jpg'
		},
		{
			role: 'Software Engineer',
			fullname: 'Ganbayar Batkhishig',
			image: '/images/ganbayar.jpg'
		},
		{
			role: 'Bridge Engineer',
			fullname: 'Ganbold Sukhbat',
			image: '/images/ganbold.jpg'
		},
		{
			role: 'Bridge Engineer',
			fullname: 'Ider Erdenebaatar',
			image: '/images/ider.jpg'
		}
	];
</script>

<div class="-mx-2">
	<div class="rounded-3xl overflow-hidden">
		<Carousel
			particlesToShow={3}
			particlesToScroll={1}
			dots={false}
			arrows={false}
			bind:this={carousel}
			on:pageChange={(event) => (current = event.detail)}
		>
			{#each members as member, i}
				<div class="px-2">
					<div
						class="relative rounded-3xl overflow-hidden transition-all h-96 w-full bg-cover"
						style="background-image: url({member.image})"
					>
						<!-- <img src={member.image} class="object-cover w-full h-full" alt={member.fullname} /> -->
						<div class="absolute bottom-0 left-0 right-0 py-6 px-2 bg-black/75">
							<div class="text-center text-yellow-400">{member.role}</div>
							<div class="text-xl font-bold uppercase text-center truncate">
								{member.fullname}
							</div>
						</div>
					</div>
				</div>
			{/each}
		</Carousel>
	</div>
</div>
<div class="text-center mt-8">
	<button
		type="button"
		class="inline-flex items-center justify-center w-16 h-16 mr-2 text-yellow-100 transition-colors duration-150 bg-yellow-500 rounded-full focus:shadow-outline hover:bg-yellow-700"
		on:click={handlePrevClick}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-6 h-6"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
			/>
		</svg>
	</button>
	<button
		type="button"
		class="inline-flex items-center justify-center w-16 h-16 mr-2 text-yellow-100 transition-colors duration-150 bg-yellow-500 rounded-full focus:shadow-outline hover:bg-yellow-700"
		on:click={handleNextClick}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-6 h-6"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
			/>
		</svg>
	</button>
</div>
