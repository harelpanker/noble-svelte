<script lang="ts">
	import hero from '$lib/assets/images/home-page/hero.png';
	import ModalTrigger from '../layout/modal-unlock/ModalTrigger.svelte';
</script>

<section class="px-5 lg:px-8 relative pt-6 lg:pt-28 text-center lg:text-left">
	<div class="container relative z-20 flex flex-col max-w-7xl mx-auto gap-y-4 lg:gap-y-24">
		<!-- top -->
		<div class="flex flex-col items-center lg:items-start lg:flex-row gap-x-10 gap-y-4">
			<div class="relative shrink-0 w-full max-w-sm">
				<h1
					class="text-[2.5rem] font-polysans relative z-20 leading-[1.2] font-semibold lg:text-8xl lg:leading-[1]"
				>
					<span class="block">The</span> Support team <span class="block">co-pilot</span>
				</h1>
				<div
					class="absolute top-1/2 lg:top-[36%] lg:w-[24rem] lg:h-[5.2rem] -translate-y-1/2 left-1/2 lg:left-[48%] -translate-x-1/2 rotate-1 w-[18rem] z-10 h-[3.1rem] bg-[#F9D2CB]"
				></div>
				<div
					class="hidden lg:block absolute top-[63%] w-[15.5rem] h-[5.2rem] -translate-y-1/2 -left-2 rotate-1 z-10 bg-[#F9D2CB]"
				></div>
			</div>
			<div class="flex max-w-xl flex-col justify-between lg:max-w-full gap-y-10 items-start">
				<p class="text-xl font-polysans lg:text-[2.5rem] lg:leading-normal">
					kojo aggregates critical data from all the tools your support team uses like Salesforce,
					Slack & Confluence, supercharging your kojodesk into a highly efficient hub for your
					support team.
				</p>
				<div class="hidden lg:block">
					<ModalTrigger text="Get Started" />
				</div>
			</div>
		</div>

		<!-- bottom -->
		<figure class="relative flex w-full justify-center">
			<img loading="eager" src={hero} alt="hero" />
		</figure>
	</div>
	<div class="absolute z-10 w-full inset-0 top-auto bg-black h-[28%] md:h-[40%] lg:h-[43%]"></div>
</section>
