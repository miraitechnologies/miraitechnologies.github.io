<script>
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import gsap from 'gsap';
	import SplitType from 'split-type';
	import { _, locale } from 'svelte-i18n';
	import { membersJP, membersEN } from '../../../lib/i18n/members-jp.ts';
	import { onMount } from 'svelte';

	// Get member parameter from URL
	let memberKey = '';
	let member = null;
	let isAnimating = false;

	// Track scroll position for scrolling indicator
	let y = 0;

	$: if (browser) {
		memberKey = $page.params.member;
		// Select members based on current language
		const members = $locale === 'jp' ? membersJP : membersEN;
		member = members.find((m) => {
			const key = `${m.firstname.toLowerCase()}_${m.lastname.toLowerCase()}`.replace(/\s+/g, '_');
			return key === memberKey;
		});
	}

	onMount(() => {
		if (member) {
			// Animate page load
			animatePageLoad();
		}
	});

	function animatePageLoad() {
		if (browser) {
			// Animate the page content
			const tl = gsap.timeline();

			// Animate hero section
			tl.fromTo(
				'.hero-content',
				{ opacity: 0, y: 50 },
				{ opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' }
			);

			// Animate member image
			tl.fromTo(
				'.member-image',
				{ opacity: 0, scale: 0.9 },
				{ opacity: 1, scale: 1, duration: 0.6, ease: 'expo.out' },
				'-=0.4'
			);

			// Animate text content
			tl.fromTo(
				'.member-text',
				{ opacity: 0, y: 30 },
				{ opacity: 1, y: 0, duration: 0.6, ease: 'expo.out' },
				'-=0.3'
			);

			// Animate content sections
			tl.fromTo(
				'.content-section',
				{ opacity: 0, y: 20 },
				{ opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'expo.out' },
				'-=0.2'
			);

			// Animate name and role with SplitType
			setTimeout(() => {
				const fullnameText = new SplitType('#member-fullname', { types: 'chars' });
				const roleText = new SplitType('#member-role', { types: 'chars' });

				gsap.set([fullnameText.chars, roleText.chars], {
					y: '120%',
					rotate: 15,
					opacity: 0
				});

				gsap.to([fullnameText.chars, roleText.chars], {
					y: '0%',
					rotate: 0,
					opacity: 1,
					ease: 'elastic.out',
					duration: 0.8,
					stagger: 0.02,
					delay: 0.2
				});
			}, 500);
		}
	}

	function goBack() {
		if (browser && !isAnimating) {
			isAnimating = true;

			// Animate out
			gsap.to('.page-content', {
				opacity: 0,
				y: -50,
				scale: 0.95,
				duration: 0.5,
				ease: 'expo.in',
				onComplete: () => {
					goto('/#team-section', { replaceState: true });
				}
			});
		}
	}

	function copyMemberLink() {
		if (browser) {
			const url = `${window.location.origin}/team/${memberKey}`;

			navigator.clipboard
				.writeText(url)
				.then(() => {
					// Show success feedback
					const button = document.getElementById('copy-button');
					const originalHTML = button.innerHTML;
					button.innerHTML = `
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
						<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
					</svg>
					Copied!
				`;
					button.classList.add('text-green-600');

					setTimeout(() => {
						button.innerHTML = originalHTML;
						button.classList.remove('text-green-600');
					}, 2000);
				})
				.catch((err) => {
					console.error('Failed to copy: ', err);
				});
		}
	}
</script>

<svelte:window bind:scrollY={y} />

<svelte:head>
	<title
		>{member
			? `${member.firstname} ${member.lastname} - Mirai Technologies`
			: 'Team Member - Mirai Technologies'}</title
	>
	<meta
		name="description"
		content={member
			? `Learn more about ${member.firstname} ${member.lastname}, ${member.role} at Mirai Technologies`
			: 'Team Member at Mirai Technologies'}
	/>
</svelte:head>

{#if member}
	<div class="page-content min-h-screen bg-gradient-to-br from-[#081336] to-[#1a2a4a]">
		<!-- Hero Section -->
		<div class="hero-content relative overflow-hidden">
			<div class="absolute inset-0 bg-gradient-to-r from-[#081336]/90 to-transparent z-10" />
			<div class="container mx-auto px-5 py-24 relative z-20">
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<!-- Member Image -->
					<div class="member-image order-2 lg:order-1">
						<div class="w-full aspect-[3/4] overflow-hidden shadow-2xl rounded-3xl">
							<img
								src={member.image ? member.image : '/images/members/no_photo.jpg'}
								class="h-full w-full object-cover"
								alt="{member.firstname} {member.lastname}"
							/>
						</div>
					</div>

					<!-- Member Info -->
					<div class="member-text order-1 lg:order-2 text-white">
						<h1 id="member-fullname" class="text-5xl md:text-7xl uppercase mb-4">
							<span class="font-bold">{member.firstname}</span>
							<span>{member.lastname}</span>
						</h1>
						<h2 id="member-role" class="text-3xl md:text-5xl font-thin mb-8 text-blue-300">
							{member.role}
						</h2>

						{#if member.bio}
							<p class="text-xl leading-relaxed mb-8 text-gray-300">
								{member.bio}
							</p>
						{/if}

						<!-- Action Buttons -->
						<div class="flex flex-col sm:flex-row gap-4">
							<button
								on:click={goBack}
								class="inline-flex items-center px-8 py-4 bg-white/20 hover:bg-white/30 text-white rounded-full transition-all duration-300 font-medium backdrop-blur-sm"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-5 h-5 mr-2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
									/>
								</svg>
								Back to Team
							</button>

							<button
								id="copy-button"
								on:click={copyMemberLink}
								class="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 font-medium"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-5 h-5 mr-2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186Zm0-12.814a2.25 2.25 0 10-3.933-2.185 2.25 2.25 0 003.933 2.185Z"
									/>
								</svg>
								Share Profile
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Scrolling Indicator -->
		<div class="relative">
			<div
				class="self-center py-6 transition-opacity bottom-0 absolute left-1/2 transform -translate-x-1/2"
				class:opacity-0={y > 0}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="animate-bounce w-8 h-8 opacity-50"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
					/>
				</svg>
			</div>
		</div>

		<!-- Content Section -->
		<div class="bg-white py-24">
			<div class="container mx-auto px-5">
				<div class="max-w-4xl mx-auto">
					{#if member.current && member.current.length > 0}
						<div class="content-section mb-12">
							<h3
								class="text-3xl uppercase font-bold text-[#081336] border-b-2 border-[#081336] mb-8"
							>
								{$_('team.current_positions')}
							</h3>
							<div class="grid gap-6">
								{#each member.current as item}
									<div
										class="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow"
									>
										<h4 class="text-2xl font-semibold text-gray-900 mb-2">{item.title}</h4>
										<p class="text-lg text-gray-700 mb-4">{item.organization}</p>
										<div class="flex flex-wrap gap-4 text-sm text-gray-600">
											{#if item.date}
												<div class="flex items-center space-x-2">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
														fill="currentColor"
														class="w-4 h-4"
													>
														<path
															fill-rule="evenodd"
															d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
															clip-rule="evenodd"
														/>
													</svg>
													<span>{item.date}</span>
												</div>
											{/if}
											{#if item.location}
												<div class="flex items-center space-x-2">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
														fill="currentColor"
														class="w-4 h-4"
													>
														<path
															fill-rule="evenodd"
															d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
															clip-rule="evenodd"
														/>
													</svg>
													<span>{item.location}</span>
												</div>
											{/if}
										</div>
									</div>
								{/each}
							</div>
						</div>
					{/if}

					{#if member.expierences && member.expierences.length > 0}
						<div class="content-section mb-12">
							<h3
								class="text-3xl uppercase font-bold text-[#081336] border-b-2 border-[#081336] mb-8"
							>
								{$_('team.experience')}
							</h3>
							<div class="space-y-6">
								{#each member.expierences as item}
									<div
										class="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow"
									>
										<h4 class="text-xl font-semibold text-gray-900 mb-2">{item.title}</h4>
										<p class="text-lg text-gray-700 mb-4">{item.organization}</p>
										<div class="flex flex-wrap gap-4 text-sm text-gray-600">
											{#if item.date}
												<div class="flex items-center space-x-2">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
														fill="currentColor"
														class="w-4 h-4"
													>
														<path
															fill-rule="evenodd"
															d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
															clip-rule="evenodd"
														/>
													</svg>
													<span>{item.date}</span>
												</div>
											{/if}
											{#if item.location}
												<div class="flex items-center space-x-2">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
														fill="currentColor"
														class="w-4 h-4"
													>
														<path
															fill-rule="evenodd"
															d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
															clip-rule="evenodd"
														/>
													</svg>
													<span>{item.location}</span>
												</div>
											{/if}
										</div>
									</div>
								{/each}
							</div>
						</div>
					{/if}

					{#if member.educations && member.educations.length > 0}
						<div class="content-section mb-12">
							<h3
								class="text-3xl uppercase font-bold text-[#081336] border-b-2 border-[#081336] mb-8"
							>
								{$_('team.education')}
							</h3>
							<div class="space-y-6">
								{#each member.educations as item}
									<div
										class="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow"
									>
										<h4 class="text-xl font-semibold text-gray-900 mb-2">{item.title}</h4>
										<p class="text-lg text-gray-700 mb-4">{item.organization}</p>
										<div class="flex flex-wrap gap-4 text-sm text-gray-600">
											{#if item.date}
												<div class="flex items-center space-x-2">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
														fill="currentColor"
														class="w-4 h-4"
													>
														<path
															fill-rule="evenodd"
															d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
															clip-rule="evenodd"
														/>
													</svg>
													<span>{item.date}</span>
												</div>
											{/if}
											{#if item.location}
												<div class="flex items-center space-x-2">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
														fill="currentColor"
														class="w-4 h-4"
													>
														<path
															fill-rule="evenodd"
															d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
															clip-rule="evenodd"
														/>
													</svg>
													<span>{item.location}</span>
												</div>
											{/if}
										</div>
									</div>
								{/each}
							</div>
						</div>
					{/if}

					{#if member.projects && member.projects.length > 0}
						<div class="content-section mb-12">
							<h3
								class="text-3xl uppercase font-bold text-[#081336] border-b-2 border-[#081336] mb-8"
							>
								{$_('team.projects')}
							</h3>
							<ul class="space-y-4">
								{#each member.projects as item}
									<li class="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
										<p class="text-lg text-gray-800">{item}</p>
									</li>
								{/each}
							</ul>
						</div>
					{/if}

					{#if member.achievements && member.achievements.length > 0}
						<div class="content-section mb-12">
							<h3
								class="text-3xl uppercase font-bold text-[#081336] border-b-2 border-[#081336] mb-8"
							>
								{$_('team.achievements')}
							</h3>
							<ul class="space-y-4">
								{#each member.achievements as item}
									<li class="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
										<p class="text-lg text-gray-800">{item}</p>
									</li>
								{/each}
							</ul>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
{:else}
	<!-- Member not found -->
	<div
		class="min-h-screen bg-gradient-to-br from-[#081336] to-[#1a2a4a] flex items-center justify-center"
	>
		<div class="text-center text-white">
			<h1 class="text-6xl font-bold mb-4">404</h1>
			<p class="text-xl mb-8">Team member not found</p>
			<button
				on:click={() => goto('/')}
				class="inline-flex items-center px-8 py-4 bg-white/20 hover:bg-white/30 text-white rounded-full transition-all duration-300 font-medium backdrop-blur-sm"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-5 h-5 mr-2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
					/>
				</svg>
				Back to Home
			</button>
		</div>
	</div>
{/if}
