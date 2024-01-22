<script>
	import Typography96 from '$lib/ui/Typography96.svelte';
	import TypographyText40 from '$lib/ui/TypographyText40.svelte';
</script>

<section class="px-5 lg:px-8 py-8 lg:py-28 text-center lg:text-left">
	<div
		class="container mx-auto max-w-7xl flex flex-col items-center lg:items-start gap-y-4 lg:gap-y-10"
	>
		<div class="relative">
			<Typography96>Security</Typography96>
			<div
				class="absolute top-1/2 lg:top-[52%] lg:w-[24rem] lg:h-[5.2rem] -translate-y-1/2 left-1/2 lg:left-[50%] -translate-x-1/2 rotate-1 w-[12rem] z-10 h-[3.1rem]"
			>
				<div class="bg-[#F9D2CB] w-full h-full"></div>
			</div>
		</div>
		<div class="flex flex-col gap-y-3">
			<TypographyText40
				><span class="lg:block"
					>Our company is SOC 2 Type 2 certified, which means an
				</span>independent auditor evaluated our products, infrastructure and policies, and
				certified that we meet or exceed user data security requirements.</TypographyText40
			>
			<TypographyText40
				>We work day-in-day-out to make sure this data can never be accessed by anyone without
				adequate permissions.</TypographyText40
			>
		</div>
	</div>
</section>
