<script lang="ts">
	import Card from './section-cards/Card.svelte';

	import desktop1 from '$lib/assets/images/home-page/section-cards/desktop-1.svg';
	import desktop2 from '$lib/assets/images/home-page/section-cards/desktop-2.svg';
	import desktop3 from '$lib/assets/images/home-page/section-cards/desktop-3.svg';
	import mobile1 from '$lib/assets/images/home-page/section-cards/mobile-1.svg';
	import mobile2 from '$lib/assets/images/home-page/section-cards/mobile-2.svg';
	import mobile3 from '$lib/assets/images/home-page/section-cards/mobile-3.svg';
</script>

<div class="px-5 lg:px-8 py-10 lg:py-32 flex flex-col gap-y-10">
	<Card
		badgeText="Integrate"
		title="Data Aggregation"
		text="Easily define the data points crucial to your operations, kojo aggregates data from a broad spectrum of internal systems, bringing essential information to your fingertips."
		imageDesktop={desktop1}
		imageMobile={mobile1}
		bgColor="#DB7415"
	/>
	<Card
		badgeText="Customize"
		title="Pre-Built Modules for kojo Agent View"
		text="kojo enriches the kojodesk experience with an array of pre-built modules  Our intuitive kojo admin panel allows support teams to handpick from a diverse library of  convert resolved issues into informative knowledge center articles."
		imageDesktop={desktop2}
		imageMobile={mobile2}
		bgColor="#E3A916"
	/>
	<Card
		badgeText="Resolve"
		title="Resolution & Escalation Management"
		text="kojo streamlines post-investigation actions, enabling swift response creation, efficient issue escalation, and the conversion of resolved tickets into valuable knowledge base articles, enhancing your team's future performance."
		imageDesktop={desktop3}
		imageMobile={mobile3}
		bgColor="#6FA23C"
	/>
</div>
