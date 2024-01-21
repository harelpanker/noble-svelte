<script lang="ts">
	import Cards from '$lib/components/home-page-sections/section-integrations/Cards.svelte';
	import Badge from '$lib/ui/Badge.svelte';
	import Button from '$lib/ui/Button.svelte';
	import Typography40 from '$lib/ui/Typography40.svelte';
</script>

<section
	class="px-5 overflow-hidden lg:px-8 bg-black text-white text-center pt-9 lg:pt-20 border-t-[12px] border-b-[12px] lg:border-t-0 border-[#0C8CE9]"
>
	<div class="container max-w-[67rem] mx-auto flex flex-col gap-y-9 lg:gap-y-28">
		<!-- content -->
		<div class="flex flex-col items-center gap-y-8">
			<Badge textLight={false} bgColor="#F9D2CB" text="Resolve" />
			<div class="flex flex-col gap-y-2">
				<Typography40>
					<span class="lg:block">Integrate with all the tools you already</span>
					know and love
				</Typography40>
				<p class="lg:text-xl">
					Amplify the value of your existing tools by integrating withZen for a seamless experience
				</p>
			</div>
			<Button isWhite text="Learn more" />
		</div>
		<!-- cards -->
		<Cards />
	</div>
</section>
