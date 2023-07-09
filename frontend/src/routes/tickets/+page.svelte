<script>
	import { enhance } from '$app/forms';

	export let data;
	const { tickets } = data;

	let addButtonText = 'Add a ticket';
	let listOrCardsText = 'Cards';
	let view = 'cards';

	function showAddTicket() {
		if (view == 'cards') {
			view = 'add';
			addButtonText = 'View tickets';
		} else {
			view = 'cards'
			addButtonText = 'Add a ticket';
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
					<h3 class="f_s_30 f_w_700 dark_text">Your tickets</h3>
					<ol class="breadcrumb page_bradcam mb-0">
						<li class="breadcrumb-item active">
							
							<button on:click={switchBetweenListAndCards}>{listOrCardsText}</button>
						</li>
					</ol>
				</div>
				<button class="btn_2" on:click={showAddTicket}>{addButtonText}</button>
			</div>
		</div>

		{#if view == 'list'}
			<div class="row justify-content-center">
				<div class="col-lg-12">
					<div class="white_card card_height_100 mb_30">
						<div class="white_card_header">
							<div class="box_header m-0">
								<div class="main-title">
									<h3 class="m-0">Ticket List</h3>
								</div>
							</div>
						</div>
						<div class="white_card_body">
							<table class="table table-striped">
								<th>Name</th>
								<th>Description</th>
								<tbody>
									{#each tickets as ticket}
										<tr>
											<td>{ticket.name}</td>
											<td>{ticket.description}</td>
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
			{#each tickets as ticket}
				<div class="col-lg-4">
					<a href="tickets/{ticket.id}">
						<div
							class="card_box box_shadow position-relative mb_30"
							style="background-color: {ticket.backgroundColor};color: {ticket.textColor}"
						>
							<div
								class="white_box_tittle"
								style="background-color: {ticket.backgroundColor};color: {ticket.textColor}"
							>
								<div class="main-title2">
									<h4 class="mb-2 text_white">{ticket.name}</h4>
								</div>
							</div>
							<div class="box_body">
								<p
									class="f-w-400"
									style="background-color: {ticket.backgroundColor};color: {ticket.textColor}"
								>
									{ticket.description}
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
										<h3 class="m-0">No tickets</h3>
									</div>
								</div>
							
							</div>
						</div>
						<div class="white_card_body" style="height:100%;max-height:378px;">
							You do not have any tickets as yet.
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
								<h3 class="m-0">Create a ticket for sale</h3>
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
