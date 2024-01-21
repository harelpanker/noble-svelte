<script lang="ts">
	import { Button } from 'bits-ui';

	export let isWhite: boolean = false;
	export let isSM: boolean = false;
	export let text: string = 'Request Demo';
	export let href: string = '/';
</script>

<Button.Root
	{href}
	class={`${isSM ? 'p-3 text-sm' : 'py-3 px-4 text-lg'} ${isWhite ? 'text-black bg-white hover:bg-white/85' : 'text-white bg-black hover:bg-black/85'} rounded transition`}
>
	{text}
</Button.Root>
