<script>
	import '../app.css';

	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import ModalUnlock from '$lib/components/layout/ModalUnlock.svelte';
</script>

<div class="min-h-dvh relative antialiased w-full overflow-x-clip font-inter flex flex-col">
	<!-- header -->
	<Header />
	<div class="flex flex-col grow">
		<!-- main -->
		<main class="relative z-10 grow">
			<slot />
		</main>
		<!-- footer -->
		<Footer />
	</div>
	<ModalUnlock />
</div>
