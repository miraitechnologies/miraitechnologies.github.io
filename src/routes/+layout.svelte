<script>
	import '../app.scss';
	import newBadge from '$lib/images/new_badge.png';

	let y = 0;

	const currentYear = new Date().getFullYear();

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
			text: 'Product & Solution',
			anchor: 'product-solution-section'
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
			top: anchor.offsetTop,
			behavior: 'smooth'
		});
	}
</script>

<svelte:window bind:scrollY={y} />

<header>
	<nav class="fixed w-full z-40 top-0 left-0 right-0">
		<div
			class="absolute top-0 bottom-0 left-0 right-0 w-full bg-[#081336]/30 backdrop-blur-lg -z-10 transition-opacity duration-300 {y >
			0
				? 'opacity-100'
				: 'opacity-0'}"
		/>
		<div class="container mx-auto px-5 relative">
			<div
				class="flex justify-between items-center h-14 lg:h-20 max-[340px]:flex-col max-[340px]:pt-5 max-[340px]:gap-5"
			>
				<div>
					<div
						class="h-8 lg:h-10 flex flex-row items-center"
						title="Mobile, Innovation, Robotics ,Artificial, Intellence"
					>
						<img src="/images/logo.svg" class="h-8 lg:h-10" alt="Logo" />
						<img src="/images/logo_text.svg" class="h-6 lg:h-8 ml-2" alt="Logo Text" />
					</div>
				</div>
				<div class="hidden lg:block">
					<ul class="list-none flex flex-row gap-10">
						{#each menu as item, i}
							<!-- Hiding last two elements due to menu width overflow issue since we add "summit 2025" menu
							So Hidding when max width 1280px or below. -->
							<li
								class={i === menu.length - 1 || i === menu.length - 2 ? 'max-[1280px]:hidden' : ''}
							>
								<a
									class="block uppercase font-bold opacity-60 hover:opacity-100 transition-opacity duration-300"
									href="#{item.anchor}"
									on:click={handleAnchorClick}>{item.text}</a
								>
							</li>
						{/each}
						<li class="relative">
							<img class="absolute w-[46px] right-[-13px] top-[-21px]" src={newBadge} alt="" />
							<a
								class="block uppercase font-bold opacity-60 hover:opacity-100 transition-opacity duration-300 relative z-10"
								href="http://Summit2025.mirai-technologies.com"
								target="_blank"
								rel="noreferrer">Summit 2025</a
							>
						</li>
					</ul>
				</div>
				<ul class="list-none  flex-row gap-10 hidden max-[1023px]:flex">
					<li class="relative">
						<img class="absolute w-[46px] right-[-13px] top-[-21px]" src={newBadge} alt="" />
						<a
							class="block uppercase font-bold opacity-60 hover:opacity-100 transition-opacity duration-300 relative z-10"
							href="http://Summit2025.mirai-technologies.com"
							target="_blank"
							rel="noreferrer">Summit 2025</a
						>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</header>
<slot />
<footer>
	<div class="container mx-auto py-4">
		<p class="text-center lg:text-right">
			<small class="text-sm">© {currentYear} Mirai Technologies LLC</small>
		</p>
	</div>
</footer>
