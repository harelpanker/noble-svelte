<script lang="ts">
	import ModalTrigger from './modal-unlock/ModalTrigger.svelte';
	import Typography40 from '$lib/ui/Typography40.svelte';

	import bgDesktop from '$lib/assets/images/cta/cta-desktop.svg';
	import bgMobile from '$lib/assets/images/cta/cta-mobile.svg';
</script>

<section
	class="relative overflow-hidden bg-black text-white px-5 lg:px-8 pt-32 pb-24 lg:pt-40 lg:pb-32"
>
	<div class="container mx-auto relative z-20 flex flex-col items-center text-center gap-y-9">
		<Typography40>
			<span class="lg:block">The AI-Powered Game-Changer for </span>
			Technical Support Engineers
		</Typography40>
		<ModalTrigger isWhite text="Learn more" />
	</div>

	<img
		class="absolute top-0 left-0 w-full h-full object-cover hidden lg:block"
		src={bgDesktop}
		alt=""
	/>
	<img class="absolute top-0 left-0 w-full h-full object-cover lg:hidden" src={bgMobile} alt="" />
</section>
