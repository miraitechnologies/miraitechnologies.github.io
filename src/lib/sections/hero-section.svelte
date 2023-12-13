<script>
	import viewport from '../useViewportAction';
	let y = 0;
	let isEnter = false;
</script>

<svelte:window bind:scrollY={y} />

<section id="hero-section" class="relative" use:viewport on:enterViewport={() => (isEnter = true)}>
	<div class="bg-section bg-section-1" />
	<div class="bg-shape bg-shape-1" />
	<div class="min-h-screen grid bg-cover bg-bottom bg-[url('/images/1.png')]">
		<div
			class="col-start-1 row-start-1  bg-gradient-to-b from-[#081336] to-[#081336]/0 w-full h-full"
		/>
		<div class="col-start-1 row-start-1 mx-auto my-auto">
			<h1 class="text-6xl lg:text-9xl font-black uppercase text-white text-center px-2">
				Create the <b
					class="text-transparent bg-clip-text bg-gradient-to-r from-[#00a0e9] to-[#0068b7]"
					>future.</b
				>
			</h1>
			<h3 class="text-xl lg:text-3xl font-medium uppercase mt-6 text-center px-2">
				We help to make the future with coding that supports people and vehicles.
			</h3>
		</div>
		<div
			class="col-start-1 row-start-1 mx-auto mt-auto p-6 transition-opacity"
			class:opacity-0={y > 0}
		>
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
</section>
