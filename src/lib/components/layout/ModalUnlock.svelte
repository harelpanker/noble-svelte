<script lang="ts">
	import { Dialog } from 'bits-ui';
	import ModalUnlockContent from './modal-unlock/ModalUnlockContent.svelte';
	import { isModalOpen } from '$lib/store/modal-store';
</script>

<Dialog.Root bind:open={$isModalOpen}>
	<ModalUnlockContent />
</Dialog.Root>
