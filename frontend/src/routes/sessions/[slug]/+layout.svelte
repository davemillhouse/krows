<script>
	import Time from 'svelte-time';
	
	export let data;
	const { session } = data;

</script>

<svelte:head>
    <title>Krowz - {session.productName}</title> 
</svelte:head>

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
			</div>
		</div>

        

<slot session={session} />

</div>
</div>
