<script>
	import SectionHeader from '../section-header.svelte';

	const members = [
		{
			role: 'Founder',
			fullname: 'Temulen Olonbayar',
			image: '/images/members/temuulen.jpeg'
		},
		{
			role: 'Founder',
			fullname: 'Lkhagvasuren Jazag',
			image: '/images/members/lkhagvasuren3.jpeg'
		},
		{
			role: 'Founder',
			fullname: 'Olonbayar Badraa',
			image: '/images/members/olonbayar3.jpeg'
		},
		{
			role: 'Bridge Engineer',
			fullname: 'Ankhbayar Tsagaan',
			image: '/images/members/ankhbayar4.jpeg'
		},
		{
			role: 'Software Engineer',
			fullname: 'Bat-Orshikh Baavgaikhuu',
			image: '/images/members/bat-orshikh3.jpeg'
		},
		{
			role: 'Bridge Engineer',
			fullname: 'Batzorigt Retsen',
			image: '/images/members/batzorigt4.jpeg'
		},
		{
			role: 'Software Engineer',
			fullname: 'Ganbayar Batkhishig',
			image: '/images/members/ganbayar4.jpeg'
		},
		{
			role: 'Bridge Engineer',
			fullname: 'Ganbold Sukhbat',
			image: '/images/members/ganbold4.jpeg'
		},
		{
			role: 'Bridge Engineer',
			fullname: 'Ider Erdenebaatar',
			image: '/images/members/ider4.jpeg'
		},
		{
			role: 'Manager',
			fullname: 'Megu',
			image: '/images/members/megu3.jpeg'
		},

	];
</script>

<section id="team-section" class="background">
	<div class="container mx-auto">
		<div class="min-h-screen pt-24 pb-48">
			<SectionHeader
				title="Team"
				description="Our team is made up of highly skilled and experienced professionals who are experts in their
			respective fields."
			/>
			<div class="grid grid-cols-7 gap-4 mt-24">
				{#each members as member}
					<div class="relative overflow-hidden transition-all h-80 w-full bg-white/10 border border-white/50 shadow-2xl">
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

<style scoped>
	.background {
		background-image: url('/images/bg/bg4.png');
		background-repeat: no-repeat;
		background-size: auto 100%;
		background-position: center center;
	}
	.bg-blur {
		background-image: url('/images/bg/blur.png');
	}
</style>
