<script lang="ts">
	import SectionCards from '$lib/components/home-page-sections/SectionCards.svelte';
	import SectionHero from '$lib/components/home-page-sections/SectionHero.svelte';
	import SectionIntegrate from '$lib/components/home-page-sections/SectionIntegrate.svelte';
	import SectionUnlock from '$lib/components/home-page-sections/SectionUnlock.svelte';
	import SeoHead from '$lib/components/layout/SEOHead.svelte';
	import SectionCTA from '$lib/components/layout/SectionCTA.svelte';
	import SectionNewsletter from '$lib/components/layout/SectionNewsletter.svelte';
</script>

<SeoHead />

<SectionHero />
<SectionUnlock />
<SectionCards />
<SectionIntegrate />
<SectionCTA />
<SectionNewsletter />
