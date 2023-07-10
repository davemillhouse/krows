<script>
	import { enhance } from '$app/forms';

	export let data;
	const { merchandise } = data;

	let addButtonText = 'Add merchandise';
	let listOrCardsText = 'Cards';
	let view = 'cards';

	function showAddMerchandise() {
		if (view == 'cards') {
			view = 'add';
			addButtonText = 'View merchandise';
		} else {
			view = 'cards'
			addButtonText = 'Add merchandise';
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

<svelte:head>
    <title>Krowz - Merchandise</title> 
</svelte:head>

<div class="container-fluid p-0 sm_padding_15px">
	<div class="row">
		<div class="col-12">
			<div class="page_title_box d-flex align-items-center justify-content-between">
				<div class="page_title_left">
					<h3 class="f_s_30 f_w_700 dark_text">Your merchandise</h3>
					<ol class="breadcrumb page_bradcam mb-0">
						<li class="breadcrumb-item active">
							
							<button on:click={switchBetweenListAndCards}>{listOrCardsText}</button>
						</li>
					</ol>
				</div>
				<button class="btn_2" on:click={showAddMerchandise}>{addButtonText}</button>
			</div>
		</div>

		{#if view == 'list'}
			<div class="row justify-content-center">
				<div class="col-lg-12">
					<div class="white_card card_height_100 mb_30">
						<div class="white_card_header">
							<div class="box_header m-0">
								<div class="main-title">
									<h3 class="m-0">Merchandise List</h3>
								</div>
							</div>
						</div>
						<div class="white_card_body">
							<table class="table table-striped">
								<th>Name</th>
								<th>Description</th>
								<tbody>
									{#each merchandise as merchandise}
										<tr>
											<td>{merchandise.name}</td>
											<td>{merchandise.description}</td>
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
			{#each merchandise as merchandise}
				<div class="col-lg-4">
					<a href="merchandise/{merchandise.id}">
						<div
							class="card_box box_shadow position-relative mb_30"
							style="background-color: {merchandise.backgroundColor};color: {merchandise.textColor}"
						>
							<div
								class="white_box_tittle"
								style="background-color: {merchandise.backgroundColor};color: {merchandise.textColor}"
							>
								<div class="main-title2">
									<h4 class="mb-2 text_white">{merchandise.name}</h4>
								</div>
							</div>
							<div class="box_body">
								<p
									class="f-w-400"
									style="background-color: {merchandise.backgroundColor};color: {merchandise.textColor}"
								>
									{merchandise.description}
								</p>
							</div>
						</div>
					</a>
				</div>
			{/each}
		{/if}

		{#if view == 'add'}
			<div class="col-lg-6">
				<div class="white_card card_height_100 mb_30">
					<div class="white_card_header">
						<div class="box_header m-0">
							<div class="main-title">
								<h3 class="m-0">Create a merchandise for sale</h3>
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
