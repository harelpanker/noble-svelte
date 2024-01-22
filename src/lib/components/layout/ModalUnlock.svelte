<script lang="ts">
	import { Dialog } from 'bits-ui';
	import ModalUnlockContent from './modal-unlock/ModalUnlockContent.svelte';
	import { isModalOpen } from '$lib/store/modal-store';
</script>

<Dialog.Root bind:open={$isModalOpen}>
	<!-- <Dialog.Trigger
		class={`${isSM ? 'p-3 text-sm min-h-10' : 'py-[14px] px-5 min-h-14 text-lg'} ${isWhite ? 'text-black bg-white' : 'text-white bg-black'} flex items-center justify-center rounded transition hover:bg-[#D7988D]`}
	>
		{text}
	</Dialog.Trigger> -->
	<ModalUnlockContent />
</Dialog.Root>
