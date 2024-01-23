<script lang="ts">
	export let title: string = 'The support team co-pilot';
	export let description: string =
		'kojo aggregates critical data from all the tools your support team uses like Salesforce, Slack & Confluence, supercharging your Zendesk into a highly efficient hub for your support team.';
	export let url: string = 'https://getkojo.ai/';
	export let image: string =
		'https://uploads-ssl.webflow.com/61794d6858e879e3897ad8f0/65b002410407f4c453ee442e_og-image%20(1).jpg';
</script>

<svelte:head>
	<!-- HTML Meta Tags -->
	<title>{`kojo | ${title}`}</title>
	<meta name="description" content={description} />
	<!-- Facebook Meta Tags -->
	<meta property="og:url" content={url} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={`kojo | ${title}`} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="benoble.io" />
	<meta property="twitter:url" content={url} />
	<meta name="twitter:title" content={`kojo | ${title}`} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />

	<!-- Meta Tags Generated via https://www.opengraph.xyz -->
</svelte:head>
