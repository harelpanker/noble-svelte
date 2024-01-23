<script lang="ts">
	import FooterLink from './FooterLink.svelte';

	import logo from '$lib/assets/images/global/logo.svg';
	import aicpa from '$lib/assets/images/global/aicpa.svg';
	import soc from '$lib/assets/images/global/soc.svg';
</script>

<footer class="px-5 lg:px-8 py-20">
	<div
		class="container max-w-[67rem] mx-auto flex flex-col lg:flex-row gap-y-10 justify-between gap-x-10"
	>
		<!-- left -->
		<div class="w-full gap-y-10 max-w-[42.5rem] flex flex-col lg:flex-row lg:gap-x-20 lg:items-end">
			<div class="flex flex-col gap-y-10 lg:gap-y-20">
				<a href="/">
					<figure>
						<img width={132} height={50} src={logo} alt="logo" />
					</figure>
				</a>
				<ul>
					<li><FooterLink text="Privacy Policy" /></li>
				</ul>
			</div>
			<ul><li><FooterLink text="Terms & Conditions" /></li></ul>
			<ul><li><FooterLink src="/security" text="Security" /></li></ul>
		</div>

		<!-- right -->
		<div class="flex gap-x-2 items-end">
			<figure><img src={aicpa} alt="aicpa" /></figure>
			<figure><img src={soc} alt="soc" /></figure>
		</div>
	</div>
</footer>
