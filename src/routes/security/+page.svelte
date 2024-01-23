<script lang="ts">
	import SeoHead from '$lib/components/layout/SEOHead.svelte';
	import SectionCards from '$lib/components/security-page-sections/SectionCards.svelte';
	import SectionHero from '$lib/components/security-page-sections/SectionHero.svelte';
</script>

<SeoHead
	title="Security"
	description="Our company is SOC 2 Type 2 certified, which means an independent auditor evaluated our products, infrastructure and policies, and certified that we meet or exceed user data security requirements."
	url="https://getkojo.ai/security"
/>

<SectionHero />
<SectionCards />
