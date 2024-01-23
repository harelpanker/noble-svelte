<script lang="ts">
	import Typography96 from '$lib/ui/Typography96.svelte';
	import TypographyText40 from '$lib/ui/TypographyText40.svelte';

	export let title: string;
	export let text: string;
</script>

<section class="px-5 lg:px-8 py-8 lg:py-28 lg:text-left">
	<div class="container mx-auto max-w-7xl flex flex-col items-start gap-y-4 lg:gap-y-10">
		<div class="relative">
			<Typography96>{title}</Typography96>
			<div
				class="absolute hidden lg:block top-1/2 lg:top-[52%] lg:h-[5.2rem] -translate-y-1/2 left-1/2 lg:left-[50%] -translate-x-1/2 rotate-1 w-[105%] z-10 h-[3.1rem]"
			>
				<div class="bg-[#F9D2CB] w-full h-full"></div>
			</div>
		</div>
		<div class="flex flex-col gap-y-3">
			<TypographyText40>{text}</TypographyText40>
		</div>
	</div>
</section>
