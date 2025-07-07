<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;

	onMount(() => {
		// Redirect to main page with product parameter
		const productKey = $page.params.productKey;
		goto(`/?product=${productKey}`);
	});
</script>

<!-- This page will redirect to the main page with the product parameter -->
<div class="min-h-screen flex items-center justify-center">
	<div class="text-center">
		<div class="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto" />
		<p class="mt-4 text-white">Loading product...</p>
	</div>
</div>
