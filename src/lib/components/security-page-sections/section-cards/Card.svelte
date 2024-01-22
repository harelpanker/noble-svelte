<script lang="ts">
	export let src: string;
	export let title: string;
	export let text1: string;
	export let text2: string = '';
</script>

<li class="flex flex-col gap-y-3 gap-x-6 lg:flex-row lg:items-center p-6 bg-white rounded-lg">
	<figure class="shrink-0"><img {src} alt="" /></figure>
	<div class="flex flex-col gap-y-4">
		<h2 class="text-xl font-semibold">{title}</h2>
		<div class="flex flex-col gap-y-3">
			<p>{text1}</p>
			{#if text2 !== ''}<p>{text2}</p>{/if}
		</div>
	</div>
</li>
