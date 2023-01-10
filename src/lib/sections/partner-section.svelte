<script>
	import SectionHeader from '../section-header.svelte';
</script>

<section id="partner-section" class="relative">
	<div class="bg-section -z-30" />
	<div class="bg-circle -z-10" />
	<div class="container mx-auto max-w-6xl">
		<div class="pt-24 pb-48">
			<SectionHeader
				title="Partners"
				description="We are thankful for the unwavering support of our investors and partners, who have helped us
			navigate through challenges and achieve goals."
			/>
			<div class="flex flex-row justify-center items-center space-x-12 mt-36">
				<div class="h-24 opacity-50 hover:opacity-100 transition-opacity bg-blur rounded-lg p-4">
					<a
						rel="noopener noreferrer"
						target="_blank"
						href="https://www.shinmei.co.jp/"
						title="Shinmei"
					>
						<img src="/images/shinmei.svg" alt="shinmei" class="w-auto h-full object-fill" />
					</a>
				</div>
				<div class="h-24 opacity-50 hover:opacity-100 transition-opacity bg-blur rounded-lg p-4">
					<a rel="noopener noreferrer" target="_blank" href="https://mksc.jp/" title="MK System">
						<img src="/images/mksc.svg" alt="mksystem" class="w-auto h-full object-fill" />
					</a>
				</div>
				<div
					class="h-24 opacity-50 hover:opacity-100 transition-opacity  p-4 flex justify-center items-center font-mono uppercase bg-blur rounded-lg text-lg"
				>
					Your Logo Here
				</div>
			</div>
		</div>
	</div>
</section>

<style scoped>
	.bg-blur {
		background-image: url('/images/bg/blur.png');
	}
	.bg-section,
	.bg-circle {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}
	.bg-circle {
		background-image: url('/images/bg/circle.svg');
		background-repeat: no-repeat;
		background-size: 100% auto;
		background-position: center top;
	}

	.bg-section::after {
		display: block;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		content: '';
		background-image: url('/images/bg/bg9.png');
		background-repeat: no-repeat;
		background-size: 50% 100%;
		background-position: right bottom;
	}
	.bg-section::before {
		display: block;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		content: '';
		background-image: url('/images/bg/bg8.png');
		background-repeat: no-repeat;
		background-size: 50% 100%;
		background-position: left bottom;
	}
</style>
