<script>
	import logo from '$lib/assets/images/global/logo.svg';
	import ModalTrigger from './modal-unlock/ModalTrigger.svelte';
</script>

<header class="h-[4.5rem] flex justify-center sticky top-0 z-30 border-[#E3E3E3] border-b bg-white">
	<div class="container mx-auto max-w-screen-2xl px-5 lg:px-8 flex items-center justify-between">
		<a href="/">
			<figure class="relative z-20">
				<img src={logo} alt="logo" />
			</figure>
		</a>
		<ModalTrigger isSM />
	</div>
</header>
