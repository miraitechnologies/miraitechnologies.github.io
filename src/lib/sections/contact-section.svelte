<script>
	import { Jp, Mn } from 'svelte-flag-icons';
	import SectionHeader from '../section-header.svelte';

	const email = 'info@mirai-technologies.com';

	const phone1 = '+81-90-9051-1386';
	const phone2 = '+976-9580-0317';

	const address = '2F, Erkht center, 2nd khoroo, Chingeltei district, Ulaanbaatar, Mongolia';
</script>

<section id="contact-section" class="bg-blur border-white/10 border-t border-b">
	<div class="container mx-auto px-5 xl:max-w-7xl">
		<div class="py-24">
			<SectionHeader
				title="Contact"
				description="If you would like more information about our company or products, please feel free to reach
			out to us."
			/>
			<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12 lg:mt-24">
				<div>
					<div
						class="flex flex-row lg:flex-col items-center space-x-4 lg:space-x-0 lg:space-y-2 lg:text-center"
					>
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="w-6 h-6 lg:w-10 lg:h-10 text-yellow-400"
							>
								<path
									d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"
								/>
								<path
									d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"
								/>
							</svg>
						</div>
						<div>{email}</div>
					</div>
				</div>
				<div>
					<div
						class="flex flex-row lg:flex-col items-center space-x-4 lg:space-x-0 lg:space-y-2 lg:text-center"
					>
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="w-6 h-6 lg:w-10 lg:h-10 text-green-500"
							>
								<path
									fill-rule="evenodd"
									d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<div class="flex flex-col">
							<div class="flex items-center space-x-2">
								<div>
									<Jp class="w-6 h-6" />
								</div>
								<div>{phone1}</div>
							</div>
							<div class="flex items-center space-x-2">
								<div>
									<Mn class="w-6 h-6" />
								</div>
								<div>{phone2}</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div
						class="flex flex-row lg:flex-col items-center space-x-4 lg:space-x-0 lg:space-y-2 lg:text-center"
					>
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="w-6 h-6 lg:w-10 lg:h-10 text-red-600"
							>
								<path
									fill-rule="evenodd"
									d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<p>{address}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
