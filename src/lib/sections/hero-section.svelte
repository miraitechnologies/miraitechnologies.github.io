<script>
	import viewport from '../useViewportAction';
	let y = 0;
	let isEnter = false;
</script>

<svelte:window bind:scrollY={y} />

<section id="hero-section" class="relative" use:viewport on:enterViewport={() => (isEnter = true)}>
	<div
		class="bg-section bg-section-1 transition-opacity duration-1000 {isEnter
			? 'opacity-100'
			: 'opacity-0'}"
	/>
	<div class="bg-shape bg-shape-1" />
	<div class="container mx-auto">
		<div class="min-h-screen flex justify-center relative">
			<div class="grow grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10">
				<div
					class="flex opacity-50 lg:mt-0 lg:opacity-100 order-2 -z-10"
				>
					<div
						class="lg:my-auto w-full aspect-square lg:rounded-3xl bg-cover"
						style="background-image: url('/images/1.png')"
					/>
				</div>
				<div
					class="flex flex-col justify-center lg:justify-center space-y-12 lg:space-y-12 order-1 p-2 lg:p-0 absolute top-0 bottom-0 lg:relative"
				>
					<h1 class="text-6xl lg:text-8xl font-black uppercase text-white text-center lg:text-left">
						Create the <span class="">future</span>.
					</h1>
					<h3 class="text-xl font-medium uppercase lg:text-white/80 text-center lg:text-left z-10">
						We help to make the future with coding that supports people and vehicles.
					</h3>
				</div>
			</div>
			<div class="self-center py-6 transition-opacity bottom-0 absolute" class:opacity-0={y > 0}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="animate-bounce w-8 h-8 opacity-50"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
					/>
				</svg>
			</div>
		</div>
	</div>
</section>
