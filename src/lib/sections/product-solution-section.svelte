<script>
	import SectionHeader from '../section-header.svelte';
	import viewport from '../useViewportAction';
	import { browser } from '$app/environment';
	import gsap from 'gsap';
	import { locale, _ } from 'svelte-i18n';
	import { goto } from '$app/navigation';

	// Define product keys that match our JSON structure
	const productKeys = [
		'asphalt_finisher',
		'automated_forklift',
		'digital_twin',
		'ai_workplace_assistants',
		'document_insights'
	];

	// Define image paths for each product
	const productImages = {
		asphalt_finisher: '/images/products/asphalt_finisher.jpg',
		automated_forklift: '/images/products/Automated_guided_forklift.webp',
		digital_twin: '/images/products/AI_digitaltwin.webp',
		ai_workplace_assistants: '/images/products/AI_agent.png',
		document_insights: '/images/products/ttdcup.jpg'
	};

	// Reactive products array that updates when locale changes
	$: products = productKeys.map((key) => ({
		key,
		name: `product_solution.products.${key}.name`,
		brief: `product_solution.products.${key}.brief`,
		detail: `product_solution.products.${key}.detail`,
		image: productImages[key]
	}));

	let isEnter = false;
	let showToast = false;
	let toastMessage = '';

	function showCopyToast(message = 'Link copied to clipboard!') {
		toastMessage = message;
		showToast = true;
		setTimeout(() => {
			showToast = false;
		}, 2000);
	}

	async function copyProductLink(productKey, event) {
		event.stopPropagation(); // Prevent modal from opening

		if (browser) {
			const url = `${window.location.origin}/products/${productKey}`;

			try {
				await navigator.clipboard.writeText(url);
				copySuccess = true;
				showCopyToast();

				// Show success feedback
				const button = event.currentTarget;
				const originalHTML = button.innerHTML;
				button.innerHTML = `
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
						<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
					</svg>
				`;
				button.classList.add('text-green-400');

				setTimeout(() => {
					button.innerHTML = originalHTML;
					button.classList.remove('text-green-400');
					copySuccess = false;
				}, 2000);
			} catch (err) {
				console.error('Failed to copy: ', err);
				// Fallback for older browsers
				const textArea = document.createElement('textarea');
				textArea.value = url;
				document.body.appendChild(textArea);
				textArea.select();
				document.execCommand('copy');
				document.body.removeChild(textArea);

				copySuccess = true;
				showCopyToast();

				setTimeout(() => {
					copySuccess = false;
				}, 2000);
			}
		}
	}

	function openProduct(product) {
		if (browser) {
			// Navigate to dedicated product page
			goto(`/products/${product.key}`, { replaceState: false });
		}
	}
</script>

<section
	id="product-solution-section"
	class="relative"
	use:viewport
	on:enterViewport={() => (isEnter = true)}
>
	<div
		class="bg-section bg-section-3 transition-opacity duration-1000 {isEnter
			? 'opacity-100'
			: 'opacity-0'}"
	/>
	<div class="container mx-auto px-5">
		<div class="pt-24 pb-24 lg:pb-48">
			<SectionHeader
				title={$_('product_solution.title')}
				description={$_('product_solution.description')}
			/>
			<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 mt-24">
				{#each products as product, i}
					<div
						on:click={() => openProduct(product)}
						on:keydown={() => openProduct(product)}
						class="member-thumbnail relative overflow-hidden transition-all w-full bg-white/10 hover:border-white/100 duration-300 cursor-pointer shadow-2xl rounded-sm group flex flex-col"
					>
						<div class="relative">
							<img
								src={product.image ? product.image : '/images/members/no_photo.jpg'}
								class="object-cover w-full scale-100 group-hover:scale-110 duration-500 ease-out aspect-[16/9]"
								alt={product.name}
							/>
							<!-- Share Button on Image -->
							<button
								on:click|stopPropagation={(e) => copyProductLink(product.key, e)}
								class="absolute top-2 right-2 z-10 bg-black/70 hover:bg-black/90 text-white p-1 rounded-full transition-all duration-300 w-7 h-7 flex items-center justify-center shadow-md"
								title="Copy link to clipboard"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
									class="w-4 h-4"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0-3.933-2.185 2.25 2.25 0 0 0 3.933 2.185Z"
									/>
								</svg>
							</button>
						</div>
						<div
							class=" pt-10 pb-6 px-4 bg-[#081336]/75 backdrop-blur-lg group-hover:bg-[#1b2849] text-white  duration-300 ease-in flex-col justify-between flex-1 flex"
						>
							<div>
								<div
									class="uppercase whitespace-pre-line mb-4 text-2xl group-hover:text-sky-400  duration-300 ease-in"
								>
									<span class="font-bold">{$_(product.name)}</span>
								</div>
								<div class="text-xs opacity-60 line-clamp-limited ">
									{$_(product.brief)}
								</div>
							</div>
							<div>
								<img
									src="/images/svg/arrow.svg"
									alt="Right Arrow"
									class="w-10 h-10 rotate-45  filter invert justify-self-end"
								/>
							</div>
						</div>
					</div>
				{/each}
			</div>
			<div class="mt-7">
				<p class="text-sm italic text-center">
					{$_('product_solution.contact_part1')}<a href="#contact-section" class="underline"
						>{$_('product_solution.contact_part2')}</a
					>
					{$_('product_solution.contact_part3')}
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Custom Toast Notification -->
{#if showToast}
	<div
		class="fixed left-1/2 bottom-8 z-[9999] -translate-x-1/2 bg-black/90 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 text-base animate-fade-in-out pointer-events-none select-none"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="w-5 h-5 text-green-400"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
		</svg>
		<span>{toastMessage}</span>
	</div>
{/if}

<style>
	@keyframes fade-in-out {
		0% {
			opacity: 0;
			transform: translateY(20px) scale(0.95);
		}
		10% {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
		90% {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
		100% {
			opacity: 0;
			transform: translateY(20px) scale(0.95);
		}
	}
	.animate-fade-in-out {
		animation: fade-in-out 2s cubic-bezier(0.4, 0, 0.2, 1);
	}
</style>
