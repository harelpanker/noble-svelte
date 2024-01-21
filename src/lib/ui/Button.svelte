<script lang="ts">
	import { Button } from 'bits-ui';

	export let isWhite: boolean = false;
	export let isSM: boolean = false;
	export let text: string = 'Request Demo';
	export let href: string = '/';
</script>

<Button.Root
	{href}
	class={`${isSM ? 'p-3 text-sm min-h-10' : 'py-[14px] px-5 min-h-14 text-lg'} ${isWhite ? 'text-black bg-white hover:bg-white/85' : 'text-white bg-black hover:bg-black/85'} flex items-center justify-center rounded transition`}
>
	{text}
</Button.Root>
