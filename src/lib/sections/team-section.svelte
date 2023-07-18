<script>
	import SectionHeader from '../section-header.svelte';
	import viewport from '../useViewportAction';
	const members = [
		{
			role: 'Founder',
			fullname: 'Temuulen Olonbayar',
			image: '/images/members/temuulen.jpeg'
		},
		{
			role: 'CEO',
			fullname: 'Lkhagvasuren Jazag',
			image: '/images/members/lkhagvasuren.jpeg'
		},
		{
			role: 'Consultant',
			fullname: 'Otgonbayar Uuye',
			image: '/images/members/otgonbayar.jpeg'
		},
		{
			role: 'Consultant',
			fullname: 'Bayarpurev Mongol',
			image: '/images/members/bayarpurev.jpeg'
		},
		{
			role: 'Consultant',
			fullname: 'Amartuvshin Renchin-Ochir',
			image: '/images/members/amartuvshin.jpeg'
		},
		{
			role: 'Consultant',
			fullname: 'Enkhtogtokh Togootogtokh',
			image: '/images/members/enkhtogtokh.jpeg'
		},
		{
			role: 'Consultant',
			fullname: 'Odonchimed Sodtavilan',
			image: '/images/members/sodtavilan.jpeg'
		},
		{
			role: 'Bridge Engineer',
			fullname: 'Ankhbayar Tsagaan',
			image: '/images/members/ankhbayar.jpeg'
		},
		{
			role: 'Bridge Engineer',
			fullname: 'Ganbold Sukhbat',
			image: '/images/members/ganbold.jpeg'
		},
		{
			role: 'Bridge Engineer',
			fullname: 'Ider Erdenebaatar',
			image: '/images/members/ider.jpeg'
		},
		{
			role: 'Software Engineer',
			fullname: 'Bat-Orshikh Baavgaikhuu',
			image: '/images/members/bat-orshikh.jpeg'
		},
		{
			role: 'Software Engineer',
			fullname: 'Ganbayar Batkhishig',
			image: '/images/members/ganbayar.jpeg'
		},
		{
			role: 'Software Engineer',
			fullname: 'Bilguun Bayartsengel',
			image: '/images/members/bilguun.jpeg'
		},
		{
			role: 'Office Manager',
			fullname: 'Maralmaa Oyun',
			image: '/images/members/maralmaa.jpeg'
		},
		{
			role: 'System Engineer',
			fullname: 'Sanchirmaa Lkhagvasuren',
			image: '/images/members/sanchirmaa.jpeg'
		},
		{
			role: 'Software Engineer',
			fullname: 'Sukh-Erdene Bolortuya',
			image: '/images/members/bsukherdene.jpeg'
		},
		{
			role: 'Software Engineer',
			fullname: 'Sukh-Erdene Nyamsukh',
			image: '/images/members/nsukherdene.jpeg'
		}
	];
	let isEnter = false;
</script>

<section id="team-section" class="relative" use:viewport on:enterViewport={() => (isEnter = true)}>
	<div
		class="bg-section bg-section-3 transition-opacity duration-1000 {isEnter
			? 'opacity-100'
			: 'opacity-0'}"
	/>
	<div class="container mx-auto px-5">
		<div class="pt-24 pb-24 lg:pb-48">
			<SectionHeader
				title="Team"
				description="Our team is made up of highly skilled and experienced professionals who are experts in their
			respective fields."
			/>
			<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-24">
				{#each members as member}
					<div
						class="relative overflow-hidden transition-all h-72 lg:h-80 w-full bg-white/10 border border-white/50 shadow-2xl rounded-lg bg-blur"
					>
						{#if member.image}
							<img src={member.image} class="object-cover w-full h-full" alt={member.fullname} />
						{/if}
						<div class="absolute bottom-0 left-0 right-0 py-4 px-2 backdrop-blur-lg bg-black/20">
							<div class="font-bold uppercase text-center">
								{member.fullname}
							</div>
							<div class="text-sm text-center text-white">{member.role}</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
