<script>
	
	export let data;
	const { merchandise } = data;

	let view = 'schedules';
	let addButtonText = 'Add a schedule';

	function showAddMerchandise() {
		if (view == 'cards') {
			addButtonText = 'View schedules';
		} else {
			addButtonText = 'Add a schedule';
		}
	}


</script>

<svelte:head>
    <title>Krowz - {merchandise.name}</title> 
</svelte:head>


<div class="container-fluid p-0 sm_padding_15px">
	<div class="row">
		<div class="col-12">
			<div class="page_title_box d-flex align-items-center justify-content-between">
				<div class="page_title_left">
                    <h3 class="f_s_30 f_w_700 dark_text">{merchandise.name}</h3>
                    <ol class="breadcrumb page_bradcam mb-0">
						<li class="breadcrumb-item"><a href="/merchandises/{merchandise.id}">Details</a></li>
                        <li class="breadcrumb-item"><a href="/merchandises/{merchandise.id}/schedules">Schedules</a></li>
                        <li class="breadcrumb-item"><a href="/merchandises/{merchandise.id}/bookings">Bookings</a></li>
                        <li class="breadcrumb-item"><a href="/merchandises/{merchandise.id}/questions">Questions</a></li>
                        <li class="breadcrumb-item"><a href="/merchandises/{merchandise.id}/comms">Comms</a></li>
                        <li class="breadcrumb-item"><a href="/merchandises/{merchandise.id}/categories">Categories</a></li>
                    </ol>
                </div>
				<button class="btn_2" on:click={showAddMerchandise}>{addButtonText}</button>
			</div>
		</div>

        

<slot merchandise={merchandise} />

</div>
</div>
