<script>
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import gsap from 'gsap';
	import SplitType from 'split-type';
	import { _, locale } from 'svelte-i18n';
	import { membersJP, membersEN } from '../i18n/members.js';
	import { createCopyLinkFunction, createToastSystem } from '../modal-utils.js';
	import SectionHeader from '../section-header.svelte';
	import viewport from '../useViewportAction';

	// Select members based on current language
	$: members = $locale === 'jp' ? membersJP : membersEN;

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

	function openMember(member) {
		if (browser) {
			// Navigate to dedicated team member page
			const memberKey =
				`${member.firstname.toLowerCase()}_${member.lastname.toLowerCase()}`.replace(/\s+/g, '_');
			goto(`/team/${memberKey}`, { replaceState: false });
		}
	}

	async function copyMemberLink(member, event) {
		event.stopPropagation();

		if (browser) {
			const memberKey =
				`${member.firstname.toLowerCase()}_${member.lastname.toLowerCase()}`.replace(/\s+/g, '_');
			const url = `${window.location.origin}/team/${memberKey}`;

			try {
				await navigator.clipboard.writeText(url);
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

				showCopyToast();
			}
		}
	}
</script>

<section id="team-section" class="relative" use:viewport on:enterViewport={() => (isEnter = true)}>
	<div
		class="bg-section bg-section-3 transition-opacity duration-1000 {isEnter
			? 'opacity-100'
			: 'opacity-0'}"
	/>
	<div class="container mx-auto px-5">
		<div class="pt-24 pb-24 lg:pb-48">
			<SectionHeader title={$_('team.title')} description={$_('team.description')} />
			<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-24">
				{#each members as member, i}
					<div
						data-member-index={i}
						on:click={() => openMember(member)}
						on:keydown={() => openMember(member)}
						class="member-thumbnail relative overflow-hidden transition-all h-72 lg:h-80 w-full bg-white/10 border border-white/50 hover:border-white/100 duration-300 cursor-pointer shadow-2xl rounded-lg group"
					>
						<div class="relative">
							<img
								src={member.image ? member.image : '/images/members/no_photo.jpg'}
								class="object-cover w-full h-full scale-100 group-hover:scale-110 duration-500 ease-out"
								alt="{member.firstname} {member.lastname}"
							/>
							<!-- Share Button on Image -->
							<button
								on:click|stopPropagation={(e) => copyMemberLink(member, e)}
								class="absolute top-2 right-2 z-10 bg-black/70 hover:bg-black/90 text-white p-1 rounded-full transition-all duration-300 w-7 h-7 flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100"
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
							class="absolute bottom-0 left-0 right-0 py-3 px-1 bg-[#081336]/25 backdrop-blur-lg group-hover:bg-white/100 text-white group-hover:text-black duration-300 ease-in"
						>
							<div class="uppercase text-center whitespace-pre-line">
								<span class="whitespace-nowrap font-bold">{member.firstname}</span>
								<span class="whitespace-nowrap">{member.lastname}</span>
							</div>
							<div class="text-xs uppercase text-center opacity-60">
								{member.role}
							</div>
						</div>
					</div>
				{/each}
				<a
					href="https://www.zangia.mn/company/MIRAI-TECHNOLOGIES-LLC/"
					target="_blank"
					class="member-thumbnail relative overflow-hidden transition-all h-72 lg:h-80 w-full bg-[#141d3c] border border-[#2c3451] cursor-pointer shadow-2xl rounded-lg group"
					rel="noreferrer"
				>
					<img
						src="/images/svg/questionmark.svg"
						class="object-cover w-full h-full scale-110 group-hover:scale-100 duration-500 ease-out object-left-top"
						alt="questionmark"
					/>
					<div
						class="absolute bottom-0 left-0 right-0 top-0 py-6 px-6 text-white flex flex-col justify-end items-center space-y-6"
					>
						<div class="font-thin text-lg">{$_('team.career')}</div>
						<div
							class="text-center text-sm font-semibold py-2 px-5 bg-white text-black rounded-full"
						>
							{$_('team.cta')}
						</div>
					</div>
				</a>
			</div>

			<div class="mt-7">
				<p class="text-sm italic text-center">
					{$_('team.trouble_seeing_part1')}
					<a href="#contact-section" class="underline">{$_('team.trouble_seeing_part2')}</a>
					{$_('team.trouble_seeing_part3')}
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Toast Notification -->
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
