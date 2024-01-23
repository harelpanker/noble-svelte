<script lang="ts">
	let placeholder = 'Your email address';

	let screenWidth: number;
	$: if (screenWidth > 768) {
		placeholder = 'Enter your email to stay up to date with our product roadmap';
	} else {
		placeholder = 'Your email address';
	}

	let form: HTMLFormElement;
	let status = '';
	let success = false;

	async function handleSubmit(event: any) {
		const data = new FormData(event.target);
		fetch(event.target.action, {
			method: form.method,
			body: data,
			headers: {
				Accept: 'application/json'
			}
		})
			.then((response) => {
				if (response.ok) {
					success = true;
					form.reset();
				} else {
					response.json().then((data) => {
						status = 'Oops! There was a problem submitting your form';
					});
				}
			})
			.catch((error) => {
				status = 'Oops! There was a problem submitting your form';
			});
	}
</script>

<svelte:window bind:innerWidth={screenWidth} />

<section class="bg-black px-5 lg:px-8 pt-4 pb-12 lg:pt-6 lg:pb-10">
	<div class="container max-w-[46rem] mx-auto">
		<form
			on:submit|preventDefault={handleSubmit}
			bind:this={form}
			class="w-full flex gap-x-4 flex-col md:flex-row gap-y-4"
			action="https://formspree.io/f/xvoezkjb"
			method="POST"
		>
			<input type="text" name="_gotcha" style="display:none" />
			<div class="flex flex-col gap-y-[2px] grow">
				<!-- email -->
				<input
					class={`${success ? 'pointer-events-none' : ''} h-12 px-3 rounded input placeholder:text-black/85`}
					type="email"
					name="email"
					{placeholder}
					required
				/>
				{#if success}<p class="text-white">Thank you for subscribing!</p>{/if}
			</div>
			<button
				disabled={success}
				type="submit"
				class={`${success ? 'pointer-events-none opacity-50' : ''} h-12 px-4 text-lg text-black bg-white hover:bg-white/85 rounded transition`}
			>
				Subscribe
			</button>
		</form>
	</div>
</section>
