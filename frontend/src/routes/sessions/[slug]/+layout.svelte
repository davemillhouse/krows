<script>
	import Time from 'svelte-time';
	
	export let data;
	const { session } = data;


	let view = 'schedules';
	let addButtonText = 'Add a schedule';

	function showAddSession() {
		if (view == 'cards') {
			addButtonText = 'View schedules';
		} else {
			addButtonText = 'Add a schedule';
		}
	}


</script>


<div class="container-fluid p-0 sm_padding_15px">
	<div class="row">
		<div class="col-12">
			<div class="page_title_box d-flex align-items-center justify-content-between">
				<div class="page_title_left">
                    <h3 class="f_s_30 f_w_700 dark_text">{session.productName} - <Time format="dddd MMMM D, YYYY @ h:mm A" timestamp={session.startDateTimeUtc} /></h3>
                    <ol class="breadcrumb page_bradcam mb-0">
						<li class="breadcrumb-item"><a href="/sessions/{session.id}">Details</a></li>
                        <li class="breadcrumb-item"><a href="/sessions/{session.id}/bookings">Bookings</a></li>
                        <li class="breadcrumb-item"><a href="/sessions/{session.id}/questions">Attendees</a></li>
                        <li class="breadcrumb-item"><a href="/sessions/{session.id}/comms">Comms</a></li>
                    </ol>
                </div>
				<button class="btn_2" on:click={showAddSession}>{addButtonText}</button>
			</div>
		</div>

        

<slot session={session} />

</div>
</div>
