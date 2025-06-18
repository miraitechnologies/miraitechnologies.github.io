<script>
	import '../app.scss';
	import newBadge from '$lib/images/new_badge.png';
	import { locale, _ } from 'svelte-i18n';
	import { browser } from '$app/environment';

	if (browser) {
		const savedLocale = localStorage.getItem('lang') || 'en-US';
		locale.set(savedLocale);
	}

	let currentLocale = $locale;
	let selectedValue = currentLocale || null;

	function selectOption(option) {
		selectedValue = option;
		locale.set(option);
	}

	let y = 0;

	const currentYear = new Date().getFullYear();

	const menu = [
		{ textKey: 'menu.home', anchor: 'hero-section' },
		{ textKey: 'menu.about', anchor: 'about-section' },
		{ textKey: 'menu.team', anchor: 'team-section' },
		{ textKey: 'menu.product_solution', anchor: 'product-solution-section' },
		{ textKey: 'menu.partners', anchor: 'partner-section' },
		{ textKey: 'menu.contact', anchor: 'contact-section' }
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
				class="flex justify-between items-center h-14 lg:h-20 max-[550px]:flex-col max-[550px]:pt-5 max-[550px]:gap-5"
			>
				<div class="flex max-[550px]:justify-between max-[550px]:w-full max-[550px]:min-w-[350px]">
					<div
						class="h-8 lg:h-10 flex flex-row items-center"
						title="Mobile, Innovation, Robotics ,Artificial, Intellence"
					>
						<img src="/images/logo.svg" class="h-8 lg:h-10" alt="Logo" />
						<img src="/images/logo_text.svg" class="h-6 lg:h-8 ml-2" alt="Logo Text" />
					</div>
					<div
						class="items-center gap-2 ml-8 pl-8 border-l border-opacity-20 border-[#ffffff33] opacity-60 hidden  max-[550px]:flex"
					>
						<button
							class="bare-button {selectedValue === 'en-US' ? 'selected-button' : ''}"
							on:click={() => selectOption('en-US')}>EN</button
						>
						<button
							class="bare-button {selectedValue === 'jp' ? 'selected-button' : ''}"
							on:click={() => selectOption('jp')}>JP</button
						>
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
									on:click={handleAnchorClick}>{$_(item.textKey)}</a
								>
							</li>
						{/each}
						<li class="relative">
							<img class="absolute w-[46px] right-[-13px] top-[-21px]" src={newBadge} alt="" />
							<a
								class="block uppercase font-bold opacity-60 hover:opacity-100 transition-opacity duration-300 relative z-10"
								href="http://Summit2025.mirai-technologies.com"
								target="_blank"
								rel="noreferrer">{$_('menu.summit')}</a
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
							rel="noreferrer">Summit 2025s</a
						>
					</li>
				</ul>
				<div
					class="flex items-center gap-2 ml-8 pl-8 border-l border-opacity-20 border-[#ffffff33] opacity-60 max-[550px]:hidden"
				>
					<button
						class="bare-button {selectedValue === 'en-US' ? 'selected-button' : ''}"
						on:click={() => selectOption('en-US')}>EN</button
					>
					<button
						class="bare-button {selectedValue === 'jp' ? 'selected-button' : ''}"
						on:click={() => selectOption('jp')}>JP</button
					>
				</div>
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

<style>
	.bare-button {
		background: none;
		border: 2px solid transparent;
		cursor: pointer;
		padding: 0.25rem 0.5rem;
		font-weight: 500;
		color: var(--white);
		transition: all 0.3s ease;
		border-radius: 4px;
		opacity: 0.9;
	}
	.selected-button {
		border-color: var(--white);
		opacity: 1;
	}
</style>
