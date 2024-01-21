<script lang="ts">
	import Badge from '$lib/ui/Badge.svelte';

	export let bgColor: string = '#333333';
	export let badgeText: string;
	export let title: string;
	export let text: string;
	export let imageMobile: string;
	export let imageDesktop: string;
	export let alt: string = '';
</script>

<section
	style={`background-color: ${bgColor}`}
	class={`container rounded-lg overflow-hidden mx-auto max-w-[67rem] text-center lg:text-left flex flex-col lg:grid lg:grid-cols-2`}
>
	<!-- content -->
	<div
		class="p-6 pt-8 lg:p-16 lg:pt-16 flex flex-col gap-y-6 items-center lg:items-start justify-between"
	>
		<Badge text={badgeText} />
		<div class="flex flex-col gap-y-2 lg:gap-y-4 w-full max-w-screen-sm">
			<h2 class="text-[2rem] leading-[1.2] lg:text-[2.5rem]">
				{title}
			</h2>
			<p class="lg:text-xl">
				{text}
			</p>
		</div>
	</div>
	<!-- image -->
	<figure class="lg:hidden">
		<img class="w-full" src={imageMobile} {alt} />
	</figure>
	<figure class="hidden lg:block">
		<img class="w-full" src={imageDesktop} {alt} />
	</figure>
</section>
