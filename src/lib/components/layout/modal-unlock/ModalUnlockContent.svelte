<script lang="ts">
	import { Dialog } from 'bits-ui';
	import { fade } from 'svelte/transition';
	import ModalLeftBanner from './ModalLeftBanner.svelte';
	import ModalForm from './ModalForm.svelte';
</script>

<Dialog.Portal>
	<Dialog.Overlay
		transition={fade}
		transitionConfig={{ duration: 150 }}
		class="fixed w-full h-dvh inset-0 z-40 bg-black/50 backdrop-blur-sm"
	/>
	<Dialog.Content
		class="fixed flex left-1/2 top-1/2 z-50 w-full max-w-[67rem] -translate-x-1/2 -translate-y-1/2 bg-white"
	>
		<!-- modal left -->
		<ModalLeftBanner />
		<!-- modal right -->
		<ModalForm />
	</Dialog.Content>
</Dialog.Portal>
