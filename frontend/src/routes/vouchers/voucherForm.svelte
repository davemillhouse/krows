<script>
	import { enhance } from '$app/forms';
	import { Circle3 } from 'svelte-loading-spinners';

	export let voucher;
    export let method;

    console.log(method);

    let working = false;

</script>

<form
	method="POST"
	action="/vouchers?/{method}"
	use:enhance={() => {
		working = true;

		return async ({ update }) => {
			await update({ reset: false });
			working = false;
		};
	}}
>
	<input hidden type="text" name="id" bind:value={voucher.id} />

	<div class="mb-3">
		<label class="form-label" for="name">Name</label>
		<input type="text" class="form-control" name="name" bind:value={voucher.name} />
	</div>
	<div class="mb-3">
		<label class="form-label" for="textColor">Text color</label>
		<input class="form-control" type="text" name="textColor" bind:value={voucher.textColor} />
	</div>
	<div class="mb-3">
		<label class="form-label" for="backgroundColor">Background color</label>
		<input
			class="form-control"
			type="text"
			name="backgroundColor"
			bind:value={voucher.backgroundColor}
		/>
	</div>
	<div class="mb-3">
		<label class="form-label" for="description">Description</label>
		<textarea
			class="form-control"
			bind:value={voucher.description}
			id="description"
			name="description"
		/>
	</div>

	{#if working}
		<div style="display:flex;" class="justify-content-center">
			<Circle3 size="35" />
		</div>
	{:else}
		<button class="btn-primary" type="submit"> Go </button>
	{/if}
</form>
