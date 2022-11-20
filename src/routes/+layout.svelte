<script>
	import '../app.css';
	let y = 0;
</script>

<nav class="w-full z-40 fixed top-0 left-0 right-0" class:backdrop-blur-lg={y > 0}>
	<div class="container mx-auto py-4">
		<div class="h-10 flex flex-row items-center">
			<img src="/images/logo.svg" class="h-10" alt="" />
			<img src="/images/logo_text.svg" class="h-8 ml-2" alt="" />
		</div>
	</div>
</nav>
<slot />

<svelte:window bind:scrollY={y} />
