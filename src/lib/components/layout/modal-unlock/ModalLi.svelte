<script lang="ts">
	import { Check } from 'phosphor-svelte';

	export let text: string;
</script>

<li
	class="pl-[5.88rem] bg-[#333333] py-6 border rounded-lg border-[#F9D2CB] flex items-center gap-x-4"
>
	<Check />
	<p>{text}</p>
</li>
