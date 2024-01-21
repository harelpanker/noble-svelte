<script lang="ts">
	export let icon: string;
	export let title: string;
	export let text: string;
</script>

<li class="flex flex-col gap-y-3 items-center lg:items-start">
	<img src={icon} alt="" />
	<h3 class="text-[2rem] lg:max-w-full max-w-[328px] leading-[1.34]">{title}</h3>
	<p class="lg:text-xl w-full max-w-[25.5rem]">
		{text}
	</p>
</li>
