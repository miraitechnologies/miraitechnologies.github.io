<script>
	import '../app.css';
	let y = 0;

	const menu = [
		{
			text: 'About',
			anchor: 'about'
		},
		{
			text: 'Team',
			anchor: 'team'
		},
		{
			text: 'Contact',
			anchor: 'contact'
		}
	];

	/**
	 * @param {{ preventDefault: () => void; currentTarget: any; }} event
	 */
	function handleAnchorClick(event) {
		event.preventDefault();
		const link = event.currentTarget;
		const anchorId = new URL(link.href).hash.replace('#', '');
		const anchor = document.getElementById(anchorId);
		window.scrollTo({
			// @ts-ignore
			top: anchor.offsetTop,
			behavior: 'smooth'
		});
	}
</script>

<nav class="w-full z-40 fixed top-0 left-0 right-0" class:backdrop-blur-lg={y > 0}>
	<div class="container mx-auto py-4">
		<div class="flex flex-row justify-between items-center">
			<a href="#start" on:click={handleAnchorClick}>
				<div class="h-10 flex flex-row items-center">
					<img src="/images/logo.svg" class="h-10" alt="" />
					<img src="/images/logo_text.svg" class="h-8 ml-2" alt="" />
				</div>
			</a>

			<div>
				<ul class="list-none flex flex-row gap-8">
					{#each menu as item}
						<li class="block">
							<a class="uppercase font-bold" href="#{item.anchor}" on:click={handleAnchorClick}
								>{item.text}</a
							>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</nav>
<slot />

<svelte:window bind:scrollY={y} />
