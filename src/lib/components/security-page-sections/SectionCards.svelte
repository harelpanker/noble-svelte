<script>
	import Card from './section-cards/Card.svelte';

	import icon1 from '$lib/assets/images/security-page/icon-1.svg';
	import icon2 from '$lib/assets/images/security-page/icon-2.svg';
	import icon3 from '$lib/assets/images/security-page/icon-3.svg';
</script>

<section class="px-5 lg:px-8 bg-black py-10 lg:py-48">
	<ul class="container mx-auto max-w-[64rem] flex flex-col gap-y-8">
		<Card
			src={icon1}
			title="Cloud infrastructure"
			text1="All of our services run in the cloud. We don't host or run our own routers, load balancers, DNS servers, or physical servers. Our service is built on Amazon Web Services. They provide strong security measures to protect our infrastructure and are compliant with most certifications."
		/>
		<Card
			src={icon2}
			title="Data center security"
			text1="Our data center is located in the United States. It is a Tier IV, SOC 2, and ISO 27001 compliant facility. The data center facilities are protected 24/7 with different security measures (guards, CCTV, electronic access control, etc.) Monitoring and alerting is in place for security breaches, power, HVAC, and temperature."
		/>
		<Card
			src={icon3}
			title="Data encryption"
			text1="Encryption in transit: All data sent to or from our infrastructure is encrypted in transit via industry best-practices using Transport Layer Security (TLS) version 1.2."
			text2="Encryption at rest: All our user data is encrypted at rest in our database using the industry-standard AES-256 algorithm. All passwords are hashed with bcrypt. We use AWS KMS for secure encryption key management."
		/>
	</ul>
</section>
