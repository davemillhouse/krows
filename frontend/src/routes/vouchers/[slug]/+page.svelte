<script>
	import { enhance } from '$app/forms';
	import { Circle3 } from 'svelte-loading-spinners';

	let working = false;

	export let data;
	const { products } = data;
	const { voucher } = data;
</script>

<div class="container-fluid p-0">
	<div class="row justify-content-center">
		<div class="col-lg-8">
			<div class="white_card card_height_100 mb_30">
				<div class="white_card_header">
					<div class="box_header m-0">
						<div class="main-title">
							<h3 class="m-0">Voucher details</h3>
						</div>
					</div>
				</div>
				<div class="white_card_body">
				
					<form
						method="POST"
						action="?/update"
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
							<input
								type="text"
								class="form-control"
								name="name"
								bind:value={voucher.name}
							/>
						</div>
						<div class="mb-3">
							<label class="form-label" for="textColor">Text color</label>
							<input class="form-control" type="text" name="textColor" bind:value={voucher.textColor} />
						</div>
						<div class="mb-3">
							<label class="form-label" for="backgroundColor">Background color</label>
							<input class="form-control" type="text" name="backgroundColor" bind:value={voucher.backgroundColor} />
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
				</div>
			</div>
		</div>
		<div class="col-lg-4">
			<div class="white_box mb_30">
				<div class="box_header">
					<div class="main-title">
						<h3 class="mb-0">Products</h3>
					</div>
				</div>

				<div class="white_card_body">
					<div>
						{#each products as product}
							<h4><span class="badge bg-secondary">{product.name}</span></h4>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
