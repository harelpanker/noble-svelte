<script lang="ts">
	export let text: string;
	export let bgColor: string = '#333333';
	export let textLight = true;
</script>

<div
	style={`background-color: ${bgColor}`}
	class={`${textLight ? 'text-white' : 'text-black'} text-sm px-2 py-[5px]`}
>
	{text}
</div>
