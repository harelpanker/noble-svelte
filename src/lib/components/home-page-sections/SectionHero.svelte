<script lang="ts">
	import { onMount } from 'svelte';
	import { timeline, stagger } from 'motion';
	import SplitType from 'split-type';
	import Button from '$lib/ui/Button.svelte';
	import hero from '$lib/assets/images/home-page/hero.png';

	onMount(() => {
		const splitTitle = new SplitType('.title', { types: 'words', tagName: 'span' });
		const splitText = new SplitType('.text', { types: 'lines', tagName: 'span' });
		const heroText = [...(<[]>splitTitle.words), ...(<[]>splitText.lines)];

		timeline([
			[heroText, { y: [24, 0], opacity: [0, 1] }, { duration: 1, delay: stagger(0.1) }],
			['.strip', { x: ['-100%', '0%'] }, { duration: 0.6, delay: stagger(0.1), at: '-1' }],
			['.button', { opacity: [0, 1] }, { duration: 0.6 }],
			['.image', { opacity: [0, 1], scale: [0.8, 1] }, { duration: 1, at: '<' }]
		]);
	});
</script>

<section class="px-5 lg:px-8 relative pt-6 lg:pt-28 text-center lg:text-left">
	<div class="container relative z-20 flex flex-col max-w-7xl mx-auto gap-y-4 lg:gap-y-24">
		<!-- top -->
		<div class="flex flex-col items-center lg:items-start lg:flex-row gap-x-10 gap-y-4">
			<div class="relative shrink-0 w-full max-w-sm">
				<h1
					class="title text-[2.5rem] font-polysans relative z-20 leading-[1.2] font-semibold lg:text-8xl lg:leading-[1]"
				>
					<span class="!block">The</span> Support team <span class="block">co-pilot</span>
				</h1>
				<div
					class="overflow-hidden flex absolute top-1/2 lg:top-[36%] lg:w-[24rem] lg:h-[5.2rem] -translate-y-1/2 left-1/2 lg:left-[48%] -translate-x-1/2 rotate-1 w-[18rem] z-10 h-[3.1rem]"
				>
					<div class="strip w-full h-full bg-[#F9D2CB]"></div>
				</div>
				<div
					class="hidden overflow-hidden lg:block absolute top-[63%] w-[15.5rem] h-[5.2rem] -translate-y-1/2 -left-2 rotate-1 z-10"
				>
					<div class="strip w-full h-full bg-[#F9D2CB]"></div>
				</div>
			</div>
			<div class="flex flex-col justify-between gap-y-10 items-start">
				<p
					class="text text-xl max-w-xl font-polysans lg:max-w-full lg:text-[2.5rem] lg:leading-normal"
				>
					Zen aggregates critical data from all the tools your support team uses like Salesforce,
					Slack & Confluence, supercharging your Zendesk into a highly efficient hub for your
					support team.
				</p>
				<div class="hidden button lg:block">
					<Button text="Get Started" />
				</div>
			</div>
		</div>

		<!-- bottom -->
		<figure class="image relative flex w-full justify-center">
			<img loading="eager" src={hero} alt="hero" />
		</figure>
	</div>
	<div class="absolute z-10 w-full inset-0 top-auto bg-black h-[28%] md:h-[40%] lg:h-[43%]"></div>
</section>
