<script>
	import { enhance } from '$app/forms';

	export let data;
	const { products } = data;

	let addButtonText = 'Add a product';
	let listOrCardsText = 'Cards';
	let view = 'cards';

	function showAddProduct() {
		if (view == 'cards') {
			view = 'add';
			addButtonText = 'View products';
		} else {
			view = 'cards'
			addButtonText = 'Add a product';
		}

		
	}

	function switchBetweenListAndCards() {
		if (view == 'cards') {
			listOrCardsText = 'List';
			view = 'list';
		} else {
			listOrCardsText = 'Cards';
			view = 'cards';
		}
	}
</script>

<div class="container-fluid p-0 sm_padding_15px">
	<div class="row">
		<div class="col-12">
			<div class="page_title_box d-flex align-items-center justify-content-between">
				<div class="page_title_left">
					<h3 class="f_s_30 f_w_700 dark_text">Your products</h3>
					<ol class="breadcrumb page_bradcam mb-0">
						<li class="breadcrumb-item active">
							
							<button on:click={switchBetweenListAndCards}>{listOrCardsText}</button>
						</li>
					</ol>
				</div>
				<button class="btn_2" on:click={showAddProduct}>{addButtonText}</button>
			</div>
		</div>

		{#if view == 'list'}
			<div class="row justify-content-center">
				<div class="col-lg-12">
					<div class="white_card card_height_100 mb_30">
						<div class="white_card_header">
							<div class="box_header m-0">
								<div class="main-title">
									<h3 class="m-0">Product List</h3>
								</div>
							</div>
						</div>
						<div class="white_card_body">
							<table class="table table-striped">
								<th>Name</th>
								<th>Description</th>
								<tbody>
									{#each products as product}
										<tr>
											<td>{product.name}</td>
											<td>{product.description}</td>
										</tr>
									{/each}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		{/if}
		{#if view == 'cards'}
			{#each products as product}
				<div class="col-lg-4">
					<a href="products/{product.id}">
						<div
							class="card_box box_shadow position-relative mb_30"
							style="background-color: {product.backgroundColor};color: {product.textColor}"
						>
							<div
								class="white_box_tittle"
								style="background-color: {product.backgroundColor};color: {product.textColor}"
							>
								<div class="main-title2">
									<h4 class="mb-2 text_white">{product.name}</h4>
								</div>
							</div>
							<div class="box_body">
								<p
									class="f-w-400"
									style="background-color: {product.backgroundColor};color: {product.textColor}"
								>
									{product.description}
								</p>
							</div>
						</div>
					</a>
				</div>
			
				{:else}
				<div class="col-xl-8">
					<div class="white_card mb_30 card_height_100" style="max-height:460px;">
						<div class="white_card_header">
							<div class="row align-items-center justify-content-between flex-wrap">
								<div class="col-lg-4">
									<div class="main-title">
										<h3 class="m-0">No products</h3>
									</div>
								</div>
							
							</div>
						</div>
						<div class="white_card_body" style="height:100%;max-height:378px;">
							You do not have any products as yet.
						</div>
					</div>
				</div>
				{/each}
	
	
		{/if}

		{#if view == 'add'}
			<div class="col-lg-6">
				<div class="white_card card_height_100 mb_30">
					<div class="white_card_header">
						<div class="box_header m-0">
							<div class="main-title">
								<h3 class="m-0">Create a product for sale</h3>
							</div>
						</div>
					</div>
					<div class="white_card_body">
						<h6 class="card-subtitle mb-2">Insert the details below</h6>
						<form method="POST" action="?/create" use:enhance>
							<div class="mb-3">
								<label class="form-label" for="exampleInputPassword1">Name</label>
								<input name="name" autocomplete="off" class="form-control" placeholder="Name" />
							</div>
							<div class="mb-3">
								<label class="form-label" for="exampleInputEmail1">Description</label>
								<input
									class="form-control"
									name="description"
									aria-describedby="emailHelp"
									placeholder="Description"
								/>
								<small id="emailHelp" class="form-text text-muted"
									>Not too long!</small
								>
							</div>

							<div class="mb-3 form-check">
								<input type="checkbox" class="form-check-input" id="exampleCheck1" />
								<label class="form-label form-check-label" for="exampleCheck1">Check me out</label>
							</div>
							<button type="submit" class="btn btn-primary">Submit</button>
						</form>
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>
