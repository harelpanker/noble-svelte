<script lang="ts">
	const email = 'harelpanker@protonmail.com';
	const thankYouPath = 'https://golden-capybara-467f34.netlify.app/thank-you';

	let placeholder = 'Your email address';

	let screenWidth: number;
	$: if (screenWidth > 768) {
		placeholder = 'Enter your email to stay up to date with our product roadmap';
	} else {
		placeholder = 'Your email address';
	}
</script>

<svelte:window bind:innerWidth={screenWidth} />

<section class="bg-black px-5 lg:px-8 pt-4 pb-12 lg:pt-6 lg:pb-10">
	<div class="container max-w-[46rem] mx-auto">
		<form
			name="subscribe"
			class="w-full flex gap-x-4 flex-col md:flex-row gap-y-4"
			action={`https://formsubmit.co/${email}`}
			method="POST"
		>
			<input type="hidden" name="_next" value={thankYouPath} />
			<input type="hidden" name="form-name" value="subscribe" />
			<input type="hidden" name="_subject" value="New submission!" />
			<input type="hidden" name="_captcha" value="false" />
			<input type="text" name="_honey" style="display:none" />
			<!-- email -->
			<input
				class="grow h-12 px-3 rounded input placeholder:text-black/85"
				type="email"
				name="email"
				{placeholder}
				required
			/>
			<!-- <input type="text" name="_honey" style="display:none" /> -->
			<button
				type="submit"
				class="h-12 px-4 text-lg text-black bg-white hover:bg-white/85 rounded transition"
			>
				Subscribe
			</button>
		</form>
	</div>
</section>
