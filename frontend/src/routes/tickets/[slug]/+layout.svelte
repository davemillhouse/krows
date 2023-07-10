<script>

	export let data;
	const { ticket } = data;

	let addButtonText = 'Add a ticket';

	function showAddTicket() {
		if (view == 'cards') {
			addButtonText = 'View tickets';
		} else {
			addButtonText = 'Add a ticket';
		}
	}
</script>

<svelte:head>
    <title>Krowz - {ticket.name}</title> 
</svelte:head>

<div class="container-fluid p-0 sm_padding_15px">
	<div class="row">
		<div class="col-12">
			<div class="page_title_box d-flex align-items-center justify-content-between">
				<div class="page_title_left">
					<h3 class="f_s_30 f_w_700 dark_text">{ticket.name}</h3>
					<ol class="breadcrumb page_bradcam mb-0">
						<li class="breadcrumb-item">Details</li>
						<li class="breadcrumb-item">Products</li>
					</ol>
				</div>
				<button class="btn_2" on:click={showAddTicket}>{addButtonText}</button>
			</div>
		</div>

	<slot></slot>
	</div>
</div>
