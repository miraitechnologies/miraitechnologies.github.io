<script>
	export let title = '';
	export let description = '';
</script>

<h2 class="text-4xl lg:text-7xl uppercase font-black text-white text-center">{title}</h2>
{#if description && description.length > 0}
	<p class="font-extralight text-xl text-white/80 text-center max-w-2xl mx-auto mt-3">
		{description}
	</p>
{/if}
