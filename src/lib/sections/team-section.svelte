<script>
	import SectionHeader from '../section-header.svelte';

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
			role: 'Bridge Engineer',
			fullname: 'Ankhbayar Tsagaan',
			image: '/images/members/ankhbayar.jpeg'
		},
		{
			role: 'Bridge Engineer',
			fullname: 'Batzorigt Retsen',
			image: '/images/members/batzorigt.jpeg'
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
		}
	];
</script>

<section id="team-section" class="relative">
	<div class="bg-section bg-section-3" />
	<div class="container mx-auto px-5">
		<div class="pt-24 pb-24 lg:pb-48">
			<SectionHeader
				title="Team"
				description="Our team is made up of highly skilled and experienced professionals who are experts in their
			respective fields."
			/>
			<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 mt-24">
				{#each members as member}
					<div
						class="relative overflow-hidden transition-all h-56 md:h-80 w-full bg-white/10 border border-white/50 shadow-2xl rounded-lg bg-blur"
					>
						{#if member.image}
							<img src={member.image} class="object-cover w-full h-full" alt={member.fullname} />
						{/if}
						<div class="absolute bottom-0 left-0 right-0 py-4 px-2 backdrop-blur-lg bg-black/20">
							<div class="font-bold uppercase text-center truncate">
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
