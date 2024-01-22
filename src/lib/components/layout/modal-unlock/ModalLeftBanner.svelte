<script>
	import ModalLi from './ModalLi.svelte';

	import bg from '$lib/assets/images/modal/modal-bg.svg';

	const data = [
		{ id: 1, text: 'Empower Your Support Team' },
		{ id: 2, text: 'Accelerated Ticket Resolution' },
		{ id: 3, text: 'Simplified Onboarding' },
		{ id: 4, text: 'Empowering Diverse Skill Levels' }
	];
</script>

<div class="hidden relative lg:flex items-center justify-center shrink-0">
	<div class="absolute z-20 inset-0 flex flex-col items-center justify-center gap-y-8">
		<h2 class="text-center text-[#F9D2CB] font-polysans text-3xl">
			<span class="lg:block">Unlock the Full Potential of </span>Your Support Team with Zen
		</h2>
		<ul class="w-full text-white max-w-[28.2rem] flex flex-col gap-y-2">
			{#each data as item (item.id)}
				<ModalLi text={item.text} />
			{/each}
		</ul>
	</div>
	<figure class="relative z-10 h-full">
		<img class="w-full h-full object-cover" src={bg} alt="" />
	</figure>
</div>
