<script>
	import SectionHeader from '../section-header.svelte';
	import viewport from '../useViewportAction';
	import { browser } from '$app/environment';
	import gsap from 'gsap';
	import { locale, _ } from 'svelte-i18n';
	import { goto } from '$app/navigation';

	// Props
	export let productParam = null;

	const MODAL_CLOSE_BTN_ID = 'modal-close-prod';
	const MODAL_IMAGE_ID = 'modal-image-prod';

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
	let selected = -1;
	let modals = [];
	let copySuccess = false;
	let showToast = false;
	let toastMessage = '';
	let isClosingModal = false;

	function showCopyToast(message = 'Link copied to clipboard!') {
		toastMessage = message;
		showToast = true;
		setTimeout(() => {
			showToast = false;
		}, 2000);
	}

	// Handle URL parameter to open specific product modal
	$: if (productParam && browser && !isClosingModal) {
		const productIndex = productKeys.indexOf(productParam);
		if (productIndex !== -1 && selected === -1) {
			// Small delay to ensure DOM is ready
			setTimeout(() => {
				showDetailFromUrl(productIndex);
			}, 100);
		}
	}

	function showDetailFromUrl(i) {
		if (browser) {
			selected = i;
			const { body } = document;
			const modalImage = document.querySelectorAll(`#${MODAL_IMAGE_ID}-${i}`);
			const thumbnail = document.querySelectorAll('.member-thumbnail')[i];

			if (!thumbnail || !modalImage[0] || !modals[i]) return;

			body.classList.add('noscroll');

			const clone = thumbnail.cloneNode(true);
			const background = thumbnail.cloneNode(false);

			const tl = gsap.timeline({ defaults: { ease: 'expo' } });
			const from = calculatePosition(thumbnail);
			const to = calculatePosition(modalImage[0]);
			const toBackground = calculatePosition(modals[i]);

			background.className = 'z-50 rounded-lg';
			clone.classList.remove('member-thumbnail');
			clone.classList.remove('border-white/50');
			clone.classList.remove('hover:border-white/100');
			clone.classList.remove('cursor-pointer');
			clone.classList.add('z-50');
			clone.classList.add('border-white/100');

			clone.children[0].classList.remove('scale-100');
			clone.children[0].classList.remove('group-hover:scale-110');
			clone.children[0].classList.add('scale-110');

			clone.children[1].classList.remove('bg-[#081336]/25');
			clone.children[1].classList.remove('group-hover:bg-white/100');
			clone.children[1].classList.remove('group-hover:text-black');
			clone.children[1].classList.remove('backdrop-blur-lg');
			clone.children[1].classList.add('bg-white/100');

			const thumbnails = document.querySelectorAll('.member-thumbnail');
			if (thumbnails && thumbnails.length > 0) {
				gsap.to(thumbnails, {
					scale: 0.5,
					opacity: 0,
					ease: 'circ.out',
					autoRound: false,
					duration: 0.1,
					onComplete: function () {
						gsap.set(this._targets, { visibility: 'hidden' });
					}
				});
			}

			gsap.set([clone, background], { position: 'absolute' });
			gsap.set([clone, background], from);
			gsap.set(background, { opacity: 0 });

			body.appendChild(background);
			body.appendChild(clone);

			gsap.to(clone.children[0], {
				scale: 1,
				ease: 'strong4.out',
				duration: 0.2,
				onComplete: function () {
					clone.children[0].classList.remove('scale-110');
				}
			});

			gsap.to(clone.children[1], {
				opacity: 0,
				y: 100,
				ease: 'strong4.out',
				duration: 0.2,
				onComplete: function () {
					gsap.set(this._targets, { visibility: 'hidden' });
				}
			});

			tl.to(clone, {
				...to,
				ease: 'strong4.out',
				border: 0,
				borderRadius: 24,
				duration: 0.4
			}).to(background, {
				...toBackground,
				borderRadius: 0,
				ease: 'strong4.out',
				opacity: 1,
				duration: 0.2,
				onComplete: () => {
					gsap.set(modals[i], { visibility: 'visible' });
					body.removeChild(clone);
					body.removeChild(background);

					const nameText = `#modal-text-fullname-${selected}`;
					const infoText = `#modal-info-${selected}`;

					gsap.set(nameText, { opacity: 0, y: '50', display: 'block' });
					gsap.to(nameText, { opacity: 1, y: 0, duration: 0.8, ease: 'expo' });

					gsap.set(infoText, { opacity: 0, y: '200', display: 'block' });
					gsap.to(infoText, { opacity: 1, y: 0, display: 'block' });

					const closeButton = document.querySelectorAll(`#${MODAL_CLOSE_BTN_ID}-${i}`)[0];
					const shareButton = document.querySelectorAll(`#modal-share-${i}`)[0];

					gsap.set(closeButton, { scale: 0.1, opacity: 0, visibility: 'visible' });
					gsap.to(closeButton, {
						scale: 1,
						opacity: 1,
						ease: 'elastic.out'
					});

					if (shareButton) {
						gsap.set(shareButton, { scale: 0.1, opacity: 0, visibility: 'visible' });
						gsap.to(shareButton, {
							scale: 1,
							opacity: 1,
							ease: 'elastic.out',
							delay: 0.1
						});
					}
				}
			});
		}
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

	function showDetail(e, i) {
		if (e.currentTarget && browser) {
			selected = i;
			const { body } = document;
			const { currentTarget } = e;
			const modalImage = document.querySelectorAll(`#${MODAL_IMAGE_ID}-${i}`);

			body.classList.add('noscroll');

			const clone = currentTarget.cloneNode(true);
			const background = currentTarget.cloneNode(false);

			const tl = gsap.timeline({ defaults: { ease: 'expo' } });
			const from = calculatePosition(currentTarget);

			const to = calculatePosition(modalImage[0]);
			const toBackground = calculatePosition(modals[i]);

			background.className = 'z-50 rounded-lg';
			clone.classList.remove('member-thumbnail');
			clone.classList.remove('border-white/50');
			clone.classList.remove('hover:border-white/100');
			clone.classList.remove('cursor-pointer');
			clone.classList.add('z-50');
			clone.classList.add('border-white/100');

			clone.children[0].classList.remove('scale-100');
			clone.children[0].classList.remove('group-hover:scale-110');
			clone.children[0].classList.add('scale-110');

			clone.children[1].classList.remove('bg-[#081336]/25');
			// clone.children[1].classList.remove('text-white');
			clone.children[1].classList.remove('group-hover:bg-white/100');
			clone.children[1].classList.remove('group-hover:text-black');
			clone.children[1].classList.remove('backdrop-blur-lg');
			clone.children[1].classList.add('bg-white/100');
			// clone.children[1].classList.add('text-black');

			const thumbnails = document.querySelectorAll('.member-thumbnail');
			if (thumbnails && thumbnails.length > 0) {
				gsap.to(thumbnails, {
					scale: 0.5,
					opacity: 0,
					ease: 'circ.out',
					autoRound: false,
					duration: 0.1,
					onComplete: function () {
						gsap.set(this._targets, { visibility: 'hidden' });
					}
				});
			}

			gsap.set([clone, background], { position: 'absolute' });
			gsap.set([clone, background], from);
			gsap.set(background, { opacity: 0 });

			body.appendChild(background);
			body.appendChild(clone);

			gsap.to(clone.children[0], {
				scale: 1,
				ease: 'strong4.out',
				duration: 0.2,
				onComplete: function () {
					clone.children[0].classList.remove('scale-110');
				}
			});

			gsap.to(clone.children[1], {
				opacity: 0,
				y: 100,
				ease: 'strong4.out',
				duration: 0.2,
				onComplete: function () {
					gsap.set(this._targets, { visibility: 'hidden' });
				}
			});

			tl.to(clone, {
				...to,
				ease: 'strong4.out',
				border: 0,
				borderRadius: 24,
				duration: 0.4
			}).to(background, {
				...toBackground,
				borderRadius: 0,
				ease: 'strong4.out',
				opacity: 1,
				duration: 0.2,
				onComplete: () => {
					gsap.set(modals[i], { visibility: 'visible' });
					body.removeChild(clone);
					body.removeChild(background);

					// Simple animation for name (like detail) instead of SplitType
					const nameText = `#modal-text-fullname-${selected}`;
					const infoText = `#modal-info-${selected}`;

					gsap.set(nameText, { opacity: 0, y: '50', display: 'block' });
					gsap.to(nameText, { opacity: 1, y: 0, duration: 0.8, ease: 'expo' });

					gsap.set(infoText, { opacity: 0, y: '200', display: 'block' });
					gsap.to(infoText, { opacity: 1, y: 0, display: 'block' });

					const closeButton = document.querySelectorAll(`#${MODAL_CLOSE_BTN_ID}-${i}`)[0];
					const shareButton = document.querySelectorAll(`#modal-share-${i}`)[0];

					gsap.set(closeButton, { scale: 0.1, opacity: 0, visibility: 'visible' });
					gsap.to(closeButton, {
						scale: 1,
						opacity: 1,
						ease: 'elastic.out'
					});

					if (shareButton) {
						gsap.set(shareButton, { scale: 0.1, opacity: 0, visibility: 'visible' });
						gsap.to(shareButton, {
							scale: 1,
							opacity: 1,
							ease: 'elastic.out',
							delay: 0.1
						});
					}
				}
			});
		}
	}

	function hideDetail(_e, i) {
		if (browser) {
			const { body } = document;
			const modal = modals[i];
			const closeButton = document.querySelectorAll(`#${MODAL_CLOSE_BTN_ID}-${i}`)[0];
			const shareButton = document.querySelectorAll(`#modal-share-${i}`)[0];

			const tl = gsap.timeline();
			tl.to(
				[modal, closeButton, shareButton],
				{
					opacity: 0,
					onComplete: () => {
						gsap.set([modal, closeButton, shareButton], { y: 0, opacity: 1, visibility: 'hidden' });
					}
				},
				-0.1
			);
			const thumbnails = document.querySelectorAll('.member-thumbnail');
			if (thumbnails && thumbnails.length > 0) {
				gsap.set(thumbnails, { visibility: 'visible' });
				gsap.to(thumbnails, {
					scale: 1,
					opacity: 1,
					ease: 'circ.out',
					autoRound: false,
					duration: 0.2,
					onComplete: () => {
						selected = -1;
						body.classList.remove('noscroll');

						// Check if modal was opened via URL parameter - only in browser
						if (browser) {
							const urlParams = new URLSearchParams(window.location.search);
							const hasProductParam = urlParams.has('product');

							if (hasProductParam) {
								// If opened via URL, go to main domain
								isClosingModal = true; // Prevent modal from reopening
								goto('/', { replaceState: true });
								// Reset flag after navigation completes
								setTimeout(() => {
									isClosingModal = false;
								}, 500);
							}
						}
						// If opened via card click, just close modal (no navigation)
					}
				});
			}
		}
	}

	function calculatePosition(element) {
		var rect = element.getBoundingClientRect();
		var root = document.documentElement;
		var body = document.body;

		var scrollTop = window.pageYOffset || root.scrollTop || body.scrollTop || 0;
		var scrollLeft = window.pageXOffset || root.scrollLeft || body.scrollLeft || 0;

		var clientTop = root.clientTop || body.clientTop || 0;
		var clientLeft = root.clientLeft || body.clientLeft || 0;

		console.log(rect.top, scrollTop, clientTop);

		return {
			top: Math.round(rect.top + scrollTop - clientTop),
			left: Math.round(rect.left + scrollLeft - clientLeft),
			height: rect.height,
			width: rect.width
		};
	}

	// $: modals = modals.filter(el => el);
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
						on:click={(e) => showDetail(e, i)}
						on:keydown={(e) => showDetail(e, i)}
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

<!-- MODAL SECTION NEED FIX -->

{#each products as product, i}
	<div
		id={`id-${i}`}
		class="fixed top-0 bottom-0 left-0 right-0 w-full h-full bg-[#1b2849] z-40 detail overflow-y-auto"
		style="visibility: hidden"
		bind:this={modals[i]}
	>
		<div class="container mx-auto text-white max-w-7xl py-5 md:pb-24 md:pt-32 px-2">
			<div class="grid grid-cols-5 gap-x-10 ">
				<div class="col-span-5 md:col-span-2 order-1 pt-5 content-center">
					<h1
						id="modal-text-fullname-{i}"
						class="text-3xl md:text-5xl uppercase text-center md:text-left"
					>
						<span class="font-bold">{$_(product.name)}</span>
					</h1>
					<div id="modal-info-{i}">
						{#if product.detail}
							<p class="text-justify mt-10 text-lg">
								{@html $_(product.detail)}
							</p>
						{/if}
					</div>
				</div>
				<div class="col-span-5 md:col-span-3 order-2 relative">
					<div id="{MODAL_IMAGE_ID}-{i}" class="w-full aspect-[4/4] ">
						<img
							src={product.image ? product.image : '/images/members/no_photo.jpg'}
							class="h-full w-full object-cover"
							alt={$_(product.name)}
						/>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Share Button for Modal -->
	<button
		type="button"
		id="modal-share-{i}"
		class="fixed right-20 top-2 z-50 w-16 h-16 bg-white/50 border border-black/50 text-white rounded-full flex justify-center items-center hover:opacity-100"
		style="visibility: hidden"
		on:click={(e) => copyProductLink(product.key, e)}
		title="Copy link to clipboard"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-6 h-6"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0-3.933-2.185 2.25 2.25 0 0 0 3.933 2.185Z"
			/>
		</svg>
	</button>

	<button
		type="button"
		id="{MODAL_CLOSE_BTN_ID}-{i}"
		class="fixed right-2 top-2 z-50 w-16 h-16 bg-white/50 border border-black/50 text-white rounded-full flex justify-center items-center hover:opacity-100"
		style="visibility: hidden"
		on:click={(e) => hideDetail(e, i)}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-6 h-6"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
		</svg>
	</button>
{/each}

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
