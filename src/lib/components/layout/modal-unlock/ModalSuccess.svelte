<script lang="ts">
	import { Dialog } from 'bits-ui';
	import { X } from 'phosphor-svelte';
</script>

<div class="relative text-center h-full flex items-center">
	<div class="absolute top-3 lg:top-9 lg:right-9 right-3 left-auto bottom-auto text-white">
		<Dialog.Close><X /></Dialog.Close>
	</div>
	<div class="flex flex-col items-center justify-center gap-y-6">
		<div class="flex gap-y-2 mx-auto w-full max-w-sm justify-center flex-col">
			<h2 class="font-polysans font-semibold text-2xl">Thank you!</h2>
			<p>
				Your email has been received. We'll be in touch shortly to schedule your demo.<br />Get
				ready to elevate your skills with kojo!
			</p>
		</div>
		<Dialog.Close
			class="text-white bg-[#11444A] w-24 h-12 rounded text-center flex items-center justify-center"
			>Done</Dialog.Close
		>
	</div>
</div>
