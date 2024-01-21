<script>
	import Button from '$lib/ui/Button.svelte';
	import ListItem from './section-unlock/ListItem.svelte';

	import icon1 from '$lib/assets/images/home-page/icons/icon-1.svg';
	import icon2 from '$lib/assets/images/home-page/icons/icon-2.svg';
	import icon3 from '$lib/assets/images/home-page/icons/icon-3.svg';
	import icon4 from '$lib/assets/images/home-page/icons/icon-4.svg';
</script>

<section
	class="text-white bg-black text-center lg:text-left px-5 lg:px-8 pt-12 pb-20 lg:pt-24 lg:pb-24"
>
	<div class="container mx-auto max-w-[65rem] flex flex-col gap-y-10">
		<h2
			class="text-center text-[2.5rem] leading-[1.2] lg:font-semibold lg:leading-[1.4] lg:text-[4rem]"
		>
			<span class="lg:block">Unlock the Full Potential of </span>Your Support Team with Zen
		</h2>

		<ul class="flex flex-col gap-y-10 lg:grid lg:grid-cols-2 lg:gap-x-[4.36rem]">
			<ListItem
				icon={icon1}
				title="Empower Your Support Team"
				text="Zen is designed to transform your support engineers into powerhouse problem-solvers, accelerating issue resolution and elevating the quality of customer support."
			/>
			<ListItem
				icon={icon2}
				title="Accelerated Ticket Resolution"
				text="With instant access to integrated data within Zendesk, your team can resolve tickets more swiftly and effectively."
			/>
			<ListItem
				icon={icon3}
				title="Simplified Onboarding"
				text="Streamlined access to information and structured processes ensure new team members quickly become proficient and effective."
			/>
			<ListItem
				icon={icon4}
				title="Empowering Diverse Skill Levels"
				text="en enables support engineers, regardless of their experience level, to confidently handle complex support cases, thereby reducing dependence on product/engineering teams."
			/>
		</ul>

		<div class="flex justify-center lg:justify-start">
			<Button isWhite text="Learn more" />
		</div>
	</div>
</section>
