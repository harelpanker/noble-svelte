<script lang="ts">
	import { Dialog, Label, Button, Checkbox } from 'bits-ui';
	import { X, Check, Minus } from 'phosphor-svelte';
	import ModalFormMobileTop from './ModalFormMobileTop.svelte';
	import ModalSuccess from './ModalSuccess.svelte';
	let myChecked = true;
	let success = false;

	const handleSubmit = (event: any) => {
		const myForm = event.target;
		const formData = new FormData(myForm);

		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams(formData as any).toString()
		})
			.then(() => (success = true))
			.catch((error) => alert(error));
	};
</script>

<ModalFormMobileTop />
<div class="p-6 lg:p-12 grow">
	<div class="hidden lg:flex justify-end"><Dialog.Close><X /></Dialog.Close></div>
	{#if !success}
		<form
			on:submit|preventDefault={handleSubmit}
			name="contact"
			data-netlify="true"
			class="flex flex-col gap-y-3 lg:gap-y-4"
		>
			<!-- name -->
			<div class="flex flex-col gap-y-4 gap-x-4 xl:grid xl:grid-cols-2">
				<!-- first name -->
				<div class="flex flex-col gap-y-1">
					<Label.Root id="firstName-label" for="firstName" class="text-sm">First Name*</Label.Root>
					<input
						name="firstName"
						id="firstName"
						placeholder="Your first name"
						type="text"
						required
						class="rounded border border-[#D8D8D8] p-[0.88rem] focus:ring focus:ring-[#D8D8D8]"
					/>
				</div>
				<!-- last name -->
				<div class="flex flex-col gap-y-1">
					<Label.Root id="lastName-label" for="lastName" class="text-sm">Last Name*</Label.Root>
					<input
						name="lastName"
						id="lastName"
						placeholder="Your last name"
						type="text"
						required
						class="rounded border border-[#D8D8D8] p-[0.88rem] focus:ring focus:ring-[#D8D8D8]"
					/>
				</div>
			</div>
			<!-- email -->
			<div class="flex flex-col gap-y-1">
				<Label.Root id="email-label" for="email" class="text-sm">Email Address*</Label.Root>
				<input
					name="email"
					id="email"
					placeholder="Your email address"
					type="email"
					required
					class="rounded border border-[#D8D8D8] p-[0.88rem] focus:ring focus:ring-[#D8D8D8]"
				/>
			</div>
			<!-- company -->
			<div class="flex flex-col gap-y-1">
				<Label.Root id="company-label" for="company" class="text-sm">Company Name*</Label.Root>
				<input
					name="company"
					id="company"
					placeholder="Your company name"
					type="text"
					required
					class="rounded border border-[#D8D8D8] p-[0.88rem] focus:ring focus:ring-[#D8D8D8]"
				/>
			</div>
			<!-- website -->
			<div class="flex flex-col gap-y-1">
				<Label.Root id="website-label" for="website" class="text-sm">Website address</Label.Root>
				<input
					name="website"
					id="website"
					placeholder="Website address"
					type="text"
					class="rounded border border-[#D8D8D8] p-[0.88rem] focus:ring focus:ring-[#D8D8D8]"
				/>
			</div>
			<!-- checkbox -->
			<div class="flex items-start gap-x-2">
				<Checkbox.Root
					id="confirm"
					aria-labelledby="confirm-label"
					class="peer relative top-[2px] inline-flex items-center w-4 h-4 justify-center p-[2px] rounded-md border border-muted bg-foreground active:scale-98 data-[state=unchecked]:border-black/20 data-[state=checked]:border-black data-[state=unchecked]:bg-white data-[state=unchecked]:text-black data-[state=checked]:bg-black data-[state=checked]:text-white"
					checked={myChecked}
				>
					<Checkbox.Indicator
						let:isChecked
						class="inline-flex max-w-[100%] rounded-xl items-center justify-center text-background"
					>
						{#if isChecked}
							<Check width={12} weight="bold" />
						{:else}
							<Minus width={12} weight="bold" />
						{/if}
					</Checkbox.Indicator>
				</Checkbox.Root>
				<Label.Root id="confirm-label" for="confirm" class="text-sm">
					By checking this box, I approve that Noble may contact me, using automated technology,
					with the contact details entered on this form, to share relevant opportunities. I confirm
					that I've read the <a class="underline" href="/">Noble Privacy Policy</a>.
				</Label.Root>
			</div>
			<input type="hidden" name="form-name" value="contact" />
			<Button.Root
				type="submit"
				class="w-full bg-[#333333] hover:bg-[#D7988D] transition rounded-md text-white min-h-12 text-center flex items-center justify-center"
				>Request a demo</Button.Root
			>
		</form>
	{:else}
		<ModalSuccess />
	{/if}
</div>
