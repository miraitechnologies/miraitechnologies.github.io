<script>
	import '../app.css';
	let y = 0;

	const menu = [
		{
			text: 'Home',
			anchor: 'hero-section'
		},
		{
			text: 'About',
			anchor: 'about-section'
		},
		{
			text: 'Team',
			anchor: 'team-section'
		},
		{
			text: 'Partners',
			anchor: 'partner-section'
		},
		{
			text: 'Contact',
			anchor: 'contact-section'
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

<header>
	<nav class="fixed w-full z-40 top-0 left-0 right-0">
		<div
			class="absolute top-0 bottom-0 left-0 right-0 w-full bg-[#081336]/20 backdrop-blur-lg -z-10 transition-opacity duration-300 {y >
			0
				? 'opacity-100'
				: 'opacity-0'}"
		/>
		<div class="container mx-auto relative">
			<div class="flex justify-between items-center h-24">
				<div>
					<a href="#start" on:click={handleAnchorClick}>
						<div class="h-10 flex flex-row items-center">
							<img src="/images/logo.svg" class="h-10" alt="" />
							<img src="/images/logo_text.svg" class="h-8 ml-2" alt="" />
						</div>
					</a>
				</div>
				<div>
					<ul class="list-none flex flex-row gap-10">
						{#each menu as item}
							<li class="block">
								<a
									class="uppercase font-bold text-white/60 hover:text-white active:text-white transition-colors duration-300"
									href="#{item.anchor}"
									on:click={handleAnchorClick}>{item.text}</a
								>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</nav>
</header>
<slot />

<svelte:window bind:scrollY={y} />
