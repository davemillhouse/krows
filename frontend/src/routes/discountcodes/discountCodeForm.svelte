<script>
	import { enhance } from '$app/forms';
	import { Circle3 } from 'svelte-loading-spinners';

	export let discountCode;
    export let method;

    let working = false;

</script>

<form
	method="POST"
	action="/discountCodes?/{method}"
	use:enhance={() => {
		working = true;

		return async ({ update }) => {
			await update({ reset: false });
			working = false;
		};
	}}
>
	<input hidden type="text" name="id" bind:value={discountCode.id} />

	<div class="mb-3">
		<label class="form-label" for="name">Name</label>
		<input type="text" class="form-control" name="name" bind:value={discountCode.name} />
	</div>
	<div class="mb-3">
		<label class="form-label" for="textColor">Text color</label>
		<input class="form-control" type="text" name="textColor" bind:value={discountCode.textColor} />
	</div>
	<div class="mb-3">
		<label class="form-label" for="backgroundColor">Background color</label>
		<input
			class="form-control"
			type="text"
			name="backgroundColor"
			bind:value={discountCode.backgroundColor}
		/>
	</div>
	<div class="mb-3">
		<label class="form-label" for="description">Description</label>
		<textarea
			class="form-control"
			bind:value={discountCode.description}
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
