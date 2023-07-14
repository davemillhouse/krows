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
		<label class="form-label" for="backgroundColor">Max uses</label>
		<input
			class="form-control"
			type="number"
			name="backgroundColor"
			bind:value={discountCode.maxUses}
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
