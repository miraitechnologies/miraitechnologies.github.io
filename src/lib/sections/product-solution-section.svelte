<script>
	import SectionHeader from '../section-header.svelte';
	import viewport from '../useViewportAction';
	import { browser } from '$app/environment';
	import gsap from 'gsap';
	import SplitType from 'split-type';

	const MODAL_CLOSE_BTN_ID = 'modal-close-prod';
	const MODAL_IMAGE_ID = 'modal-image-prod';

	const products = [
		{
			name: 'AI-Powered Asphalt Finishing',
			brief:
				'Enhance your paving efficiency with our cutting-edge AI technology! Our software accurately detects roads and optimizes asphalt finishing, ensuring precision, quality, and reduced waste. Revolutionize road construction with smart automation!',
			detail:
				'Revolutionizing Asphalt Finishing with AI\n\nRoad construction is evolving, and we are leading the way with AI-powered asphalt finishing.\nOur innovative software leverages artificial intelligence to accurately detect road surfaces and optimize the paving process.\n\nPrecision Detection – Our AI system identifies roads with high accuracy, reducing errors and ensuring seamless asphalt application.\n\nOptimized Asphalt Finishing – Achieve perfect paving with intelligent automation that enhances quality and efficiency.\n\nCost-Effective & Sustainable – Reduce material waste and minimize operational costs with data-driven decision-making.\n\nOur technology empowers construction teams with smart solutions, making roadwork faster, safer, and more efficient.\n Experience the future of asphalt finishing today! ',
			image: '/images/products/asphalt_finisher.jpg'
		}
	];

	let isEnter = false;
	let selected = -1;

	let modals = [];

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

			console.log(modalImage[0]);

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
					const fullnameText = new SplitType(`#modal-text-fullname-${selected}`);
					const roleText = new SplitType(`#modal-text-role-${selected}`);
					const infoText = `#modal-info-${selected}`;
					gsap.set([fullnameText.chars, roleText.chars], {
						y: '120%',
						rotate: 15,
						opacity: 0
					});
					tl.to([fullnameText.chars, roleText.chars], {
						y: '0%',
						rotate: 0,
						stagger: 0.03,
						opacity: 1,
						duration: 1.2,
						ease: 'expo'
					});

					gsap.set(infoText, { opacity: 0, y: '200', display: 'block' });
					gsap.to(infoText, { opacity: 1, y: 0, display: 'block' });

					const closeButton = document.querySelectorAll(`#${MODAL_CLOSE_BTN_ID}-${i}`)[0];

					gsap.set(closeButton, { scale: 0.1, opacity: 0, visibility: 'visible' });
					gsap.to(closeButton, {
						scale: 1,
						opacity: 1,
						ease: 'elastic.out'
					});
				}
			});
		}
	}

	function hideDetail(_e, i) {
		if (browser) {
			const { body } = document;
			const modal = modals[i];
			const closeButton = document.querySelectorAll(`#${MODAL_CLOSE_BTN_ID}-${i}`)[0];

			const tl = gsap.timeline();
			tl.to(
				[modal, closeButton],
				{
					opacity: 0,
					onComplete: () => {
						gsap.set([modal, closeButton], { y: 0, opacity: 1, visibility: 'hidden' });
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
				title="Product & Solution"
				description="We harness the power of AI to create cutting-edge solutions that empower businesses with smarter, faster, and more efficient tools, unlocking new possibilities for growth and innovation."
			/>
			<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 mt-24">
				{#each products as product, i}
					<div
						on:click={(e) => showDetail(e, i)}
						on:keydown={(e) => showDetail(e, i)}
						class="member-thumbnail relative overflow-hidden transition-all w-full bg-white/10 hover:border-white/100 duration-300 cursor-pointer shadow-2xl rounded-sm group flex flex-col"
					>
						<img
							src={product.image ? product.image : '/images/members/no_photo.jpg'}
							class="object-cover w-full scale-100 group-hover:scale-110 duration-500 ease-out aspect-[16/9]"
							alt={product.name}
						/>
						<div
							class=" pt-10 pb-6 px-4 bg-[#081336]/75 backdrop-blur-lg group-hover:bg-[#1b2849] text-white  duration-300 ease-in flex-col justify-between flex-1 flex"
						>
							<div>
								<div
									class="uppercase whitespace-pre-line mb-4 text-2xl group-hover:text-sky-400  duration-300 ease-in"
								>
									<span class="font-bold">{product.name}</span>
								</div>
								<div class="text-xs opacity-60 line-clamp-limited ">
									{product.brief}
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
					If you are interested in our products, solutions, cooperation opportunities, or need a
					tailored solution for your needs, please contact us via email or phone in the <a
						href="#contact-section"
						class="underline">contact</a
					> section.
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
						<span class="font-bold">{product.name}</span>
					</h1>
					<div id="modal-info-{i}">
						{#if product.detail}
							<p class="text-justify mt-10 text-lg">{product.detail}</p>
						{/if}
					</div>
				</div>
				<div class="col-span-5 md:col-span-3 order-2 relative">
					<div id="{MODAL_IMAGE_ID}-{i}" class="w-full aspect-[4/4] ">
						<img
							src={product.image ? product.image : '/images/members/no_photo.jpg'}
							class="h-full w-full object-cover"
							alt={product.name}
						/>
					</div>
				</div>
			</div>
		</div>
	</div>

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
