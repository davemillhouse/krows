<script>
	export let data;
	const { categories } = data;

	console.log(categories);

	let addButtonText = 'Add a category';
	let listOrCardsText = 'Card view';
	let view = 'cards';

	function showAddCategory() {
		if (view == 'cards') {
			addButtonText = 'View categories';
		} else {
			addButtonText = 'Add a category';
		}
	}

	function switchBetweenListAndCards() {
		if (view == 'cards') {
			listOrCardsText = 'List view';
			view = 'list';
		} else {
			listOrCardsText = 'Card view';
			view = 'cards';
		}
	}
</script>

<div class="container-fluid p-0 sm_padding_15px">
	<div class="row">
		<div class="col-12">
			<div class="page_title_box d-flex align-items-center justify-content-between">
				<div class="page_title_left">
					<h3 class="f_s_30 f_w_700 dark_text">Your categories</h3>
					<ol class="breadcrumb page_bradcam mb-0">
						
						<li class="breadcrumb-item active">
							<button on:click={switchBetweenListAndCards}>{listOrCardsText}</button>
						</li>
					</ol>
				</div>
				<button class="btn_2" on:click={showAddCategory}>{addButtonText}</button>
			</div>
		</div>

		{#if view == 'list'}
			<div class="row justify-content-center">
				<div class="col-lg-12">
					<div class="white_card card_height_100 mb_30">
						<div class="white_card_header">
							<div class="box_header m-0">
								<div class="main-title">
									<h3 class="m-0">Category List</h3>
								</div>
							</div>
						</div>
						<div class="white_card_body">
							<table class="table table-striped">
								<th>Name</th>
								<th>Description</th>
								<tbody>
									{#each categories as category}
										<tr>
											<td>{category.name}!</td>
											<td><button type="button" class="btn mb-3 btn-warning"><i class="ti-heart f_s_14 me-2"></i>Warning</button></td>
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
			{#each categories as category}
				<div class="col-lg-4">
					<a href="categories/{category.id}">
						<div
							class="card_box box_shadow position-relative mb_30"
							style="background-color: {category.backgroundColor};color: {category.textColor}"
						>
							<div
								class="white_box_tittle"
								style="background-color: {category.backgroundColor};color: {category.textColor}"
							>
								<div class="main-title2">
									<h4 class="mb-2 text_white">{category.name}</h4>
								</div>
							</div>
							<div class="box_body">
								<p
									class="f-w-400"
									style="background-color: {category.backgroundColor};color: {category.textColor}"
								>
								<button type="button" class="btn mb-3 btn-warning">Product <i class="ml-1 bi-x"></i></button>
								</p>
							</div>
						</div>
					</a>
				</div>
			{/each}
		{/if}
		{#if view == 'add'}
			<form method="POST" action="?/create">
				<label>
					add a category
					<input name="name" autocomplete="off" />
				</label>
			</form>
		{/if}
	</div>
</div>
