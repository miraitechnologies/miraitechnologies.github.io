<script>
	import SectionHeader from '../section-header.svelte';
	import viewport from '../useViewportAction';
	import { browser } from '$app/environment';
	import gsap from 'gsap';
	import SplitType from 'split-type';

	const MODAL_CLOSE_BTN_ID = 'modal-close-prod';

	const products = [
		{
			name: 'Temuulen',
			brief:
				'Precise quality control driven by AI to detect in real time all defects in a product and simultaneously check for configuration errors or damages.',
			detail:
				'24 VISION offers a quality control system powered by AI. It ensures error-free production and worry-free quality management. It detects defects and configuration errors in a variety of automotive products, including car seats, doors, control panels and even entire cars. By leveraging real-time detection, the system can quickly identify and alert users to any potential issues in the production.',
			image: '/images/members/temuulen.jpeg'
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
			const modalImage = document.querySelectorAll(`#modal-image-${i}`);

			body.classList.add('noscroll');

			const clone = currentTarget.cloneNode(true);
			const background = currentTarget.cloneNode(false);

			const tl = gsap.timeline({ defaults: { ease: 'expo' } });
			const from = calculatePosition(currentTarget);
			const to = calculatePosition(modalImage[0]);
			const toBackground = calculatePosition(modals[i]);

			background.className = 'bg-white z-50 rounded-lg';
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
			clone.children[1].classList.remove('text-white');
			clone.children[1].classList.remove('group-hover:bg-white/100');
			clone.children[1].classList.remove('group-hover:text-black');
			clone.children[1].classList.remove('backdrop-blur-lg');
			clone.children[1].classList.add('bg-white/100');
			clone.children[1].classList.add('text-black');

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

					gsap.set(infoText, { opacity: 0, y: '200', display: 'none' });
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
									<span class="whitespace-nowrap font-bold">{product.name}</span>
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
		class="fixed top-0 bottom-0 left-0 right-0 w-full h-full bg-white z-40 detail overflow-y-auto"
		style="visibility: hidden"
		bind:this={modals[i]}
	>
		<div class="container mx-auto text-black max-w-6xl py-5 md:py-24 px-5">
			<div class="grid grid-cols-5 gap-x-10">
				<div class="col-span-5 md:col-span-3 order-2 pt-5">
					<h1
						id="modal-text-fullname-{i}"
						class="text-3xl md:text-6xl uppercase text-center md:text-left"
					>
						<span class="font-bold">{product.firstname}</span>
						<span>{product.lastname}</span>
					</h1>
					<h2
						id="modal-text-role-{i}"
						class="text-2xl md:text-4xl font-thin mt-1 md:mt-4 text-center md:text-left"
					>
						{product.role}
					</h2>
					<div id="modal-info-{i}">
						{#if product.bio}
							<p class="text-justify mt-10">{product.bio}</p>
						{/if}

						{#if product.current && product.current.length > 0}
							<div id="modal-current-position-{i}" class="mt-10">
								<h3 class="text-2xl uppercase font-bold text-[#081336] border-b-2 border-[#081336]">
									Current positions
								</h3>
								<ul class="list-none mt-5 space-y-5">
									{#each product.current as item}
										<li class="">
											<h4 class="text-xl font-medium capitalize">{item.title}</h4>
											<p class="text-lg">{item.organization}</p>
											<div class="flex justify-between">
												<div class="flex items-center space-x-1 text-gray-600 text-sm">
													{#if item.date}
														<div>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																viewBox="0 0 20 20"
																fill="currentColor"
																class="w-5 h-5"
															>
																<path
																	fill-rule="evenodd"
																	d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
																	clip-rule="evenodd"
																/>
															</svg>
														</div>
														<div>
															{item.date}
														</div>
													{/if}
												</div>
												<div class="flex items-center space-x-1 text-gray-600 text-sm">
													{#if item.location}
														<div>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																viewBox="0 0 20 20"
																fill="currentColor"
																class="w-5 h-5"
															>
																<path
																	fill-rule="evenodd"
																	d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
																	clip-rule="evenodd"
																/>
															</svg>
														</div>
														<div>
															{item.location}
														</div>
													{/if}
												</div>
											</div>
										</li>
									{/each}
								</ul>
							</div>
						{/if}

						{#if product.expierences && product.expierences.length > 0}
							<div id="modal-experience-{i}" class="mt-10">
								<h3 class="text-2xl uppercase font-bold text-[#081336] border-b-2 border-[#081336]">
									Experience
								</h3>
								<ul class="list-none mt-5 space-y-5">
									{#each product.expierences as item}
										<li class="">
											<h4 class="text-xl font-medium capitalize">{item.title}</h4>
											<p class="text-lg">{item.organization}</p>
											<div class="flex justify-between">
												<div class="flex items-center space-x-1 text-gray-600 text-sm">
													{#if item.date}
														<div>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																viewBox="0 0 20 20"
																fill="currentColor"
																class="w-5 h-5"
															>
																<path
																	fill-rule="evenodd"
																	d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
																	clip-rule="evenodd"
																/>
															</svg>
														</div>
														<div>
															{item.date}
														</div>
													{/if}
												</div>
												<div class="flex items-center space-x-1 text-gray-600 text-sm">
													{#if item.location}
														<div>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																viewBox="0 0 20 20"
																fill="currentColor"
																class="w-5 h-5"
															>
																<path
																	fill-rule="evenodd"
																	d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
																	clip-rule="evenodd"
																/>
															</svg>
														</div>
														<div>
															{item.location}
														</div>
													{/if}
												</div>
											</div>
										</li>
									{/each}
								</ul>
							</div>
						{/if}

						{#if product.educations && product.educations.length > 0}
							<div id="modal-education-{i}" class="mt-10">
								<h3 class="text-2xl uppercase font-bold text-[#081336] border-b-2 border-[#081336]">
									Education
								</h3>
								<ul class="list-none mt-5 space-y-5">
									{#each product.educations as item}
										<li class="">
											<h4 class="text-xl font-medium capitalize">{item.title}</h4>
											<p class="text-lg">{item.organization}</p>
											<div class="flex justify-between">
												<div class="flex items-center space-x-1 text-gray-600 text-sm">
													{#if item.date}
														<div>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																viewBox="0 0 20 20"
																fill="currentColor"
																class="w-5 h-5"
															>
																<path
																	fill-rule="evenodd"
																	d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
																	clip-rule="evenodd"
																/>
															</svg>
														</div>
														<div>
															{item.date}
														</div>
													{/if}
												</div>
												<div class="flex items-center space-x-1 text-gray-600 text-sm">
													{#if item.location}
														<div>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																viewBox="0 0 20 20"
																fill="currentColor"
																class="w-5 h-5"
															>
																<path
																	fill-rule="evenodd"
																	d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
																	clip-rule="evenodd"
																/>
															</svg>
														</div>
														<div>
															{item.location}
														</div>
													{/if}
												</div>
											</div>
										</li>
									{/each}
								</ul>
							</div>
						{/if}

						{#if product.projects && product.projects.length > 0}
							<div id="modal-projects-{i}" class="mt-10">
								<h3 class="text-2xl uppercase font-bold text-[#081336] border-b-2 border-[#081336]">
									Projects
								</h3>
								<ul class="list-disc ml-5 mt-5">
									{#each product.projects as item}
										<li class="">
											<p class="text-lg">{item}</p>
										</li>
									{/each}
								</ul>
							</div>
						{/if}

						{#if product.achievements && product.achievements.length > 0}
							<div id="modal-achievements-{i}" class="mt-10">
								<h3 class="text-2xl uppercase font-bold text-[#081336] border-b-2 border-[#081336]">
									Achievements
								</h3>
								<ul class="list-disc ml-5 mt-5">
									{#each product.achievements as item}
										<li class="">
											<p class="text-lg">{item}</p>
										</li>
									{/each}
								</ul>
							</div>
						{/if}
					</div>
				</div>
				<div class="col-span-5 md:col-span-2 order-1 relative">
					<div
						id="modal-image-{i}"
						class="w-full aspect-[3/4] overflow-hidden shadow-2xl rounded-3xl sticky top-24 bottom-24"
					>
						<img
							src={product.image ? product.image : '/images/members/no_photo.jpg'}
							class="h-full w-full object-cover"
							alt="{product.firstname} {product.lastname}"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>

	<button
		type="button"
		id="${MODAL_CLOSE_BTN_ID}-{i}"
		class="fixed right-2 top-2 z-50 w-16 h-16 bg-white/50 border border-black/50 text-black rounded-full flex justify-center items-center hover:opacity-100"
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
