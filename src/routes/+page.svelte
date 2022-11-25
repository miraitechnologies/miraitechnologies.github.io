<script>
	// @ts-nocheck
	import { inview } from 'svelte-inview';
	import Background from '$lib/background.svelte';
	import Team from '$lib/team.svelte';

	let current = 0;

	const inView = (pos) => (current = pos);
</script>

<main class="relative">
	<Background {current} />

	<section
		id="start"
		class="relative z-20"
		use:inview={{ threshold: 0.5 }}
		on:enter={() => inView(0)}
	>
		<div class="container mx-auto">
			<div class="min-h-screen flex flex-col justify-center w-1/2">
				<div class="text-9xl font-bold leading-none uppercase">Create the future.</div>
				<div class="text-2xl text-[#00a0e9] uppercase font-bold mt-12">
					We make the future with technology that supports people and vehicles.
				</div>
			</div>
		</div>
	</section>
	<section
		id="about"
		class="relative z-20"
		use:inview={{ threshold: 0.5 }}
		on:enter={() => inView(1)}
	>
		<div class="container mx-auto max-w-7xl">
			<div class="min-h-screen flex flex-col justify-center">
				<div class="flex flex-row justify-end">
					<div class="w-1/2 pl-4">
						<div class="text-8xl font-bold text-right uppercase">About the company</div>
						<p class="text-xl text-justify mt-8">
							Mirai Technologies was established and partnership with Shinmei in 2022, and in its
							history, the has become a significant player in the AI sector of Mongolia. We work
							with an aim of using technological solutions to bring all public and private sector
							services closer to the people.
						</p>
						<p class="text-xl text-justify ">[Shinmei ohin company ]</p>
						<div class="mt-4">
							<!-- svelte-ignore security-anchor-rel-noreferrer -->
							<a href="https://www.shinmei.co.jp/" target="_blank">
								<img src="/images/shinmei.svg" class="w-60" alt="shinmei" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section
		id="team"
		class="relative z-20"
		use:inview={{ threshold: 0.5 }}
		on:enter={() => inView(2)}
	>
		<div class="container mx-auto max-w-7xl">
			<div class="flex flex-col justify-start py-64">
				<div class="grid grid-cols-3 gap-8">
					<div>
						<div class="text-8xl font-bold leading-none uppercase">Our team</div>
						<div class="text-3xl leading-none mt-16">Build with us.</div>
						<p class="text-lg text-justify mt-8">
							We are actively hiring intentional, empathetic and curious people who thrive on
							creating delightful experiences
						</p>
					</div>
					<div class="col-span-2 pt-4">
						<Team />
					</div>
				</div>
			</div>
		</div>
	</section>
	<section
		id="contact"
		class="relative z-20"
		use:inview={{ threshold: 0.5 }}
		on:enter={() => inView(3)}
	>
		<div class="container mx-auto max-w-7xl">
			<div class="min-h-screen flex flex-col justify-center py-32">
				<div class="w-1/2">
					<div class="text-8xl font-bold uppercase">Contact us</div>
					<div class="text-lg mt-8">If you wish to contact us, you can email us directly</div>
					<p class="mt-12 text-2xl text-emerald-500">
						<a href="mailto:contact@mirai-technologies.com"> contact@mirai-technologies.com </a>
					</p>
					<div class="text-lg mt-8">Address</div>
					<p class="mt-4">Apartment 34, Street Backula Renbuchi 15171, Ulaanbaatar, Mongolia</p>
				</div>
			</div>
		</div>
	</section>
</main>
