<script>
	




</script>
<svelte:head>
    <title>Krowz - Admin</title> 
</svelte:head>

<div class="container-fluid p-0 sm_padding_15px">
	<div class="row">
		<div class="col-12">
			<div class="page_title_box d-flex align-items-center justify-content-between">
				<div class="page_title_left">
                    <h3 class="f_s_30 f_w_700 dark_text">Admin</h3>
                    <ol class="breadcrumb page_bradcam mb-0">
						<li class="breadcrumb-item"><a href="/admin">Suppliers</a></li>
                        <li class="breadcrumb-item"><a href="/admin/teardown">Tear down</a></li>
                        <li class="breadcrumb-item"><a href="/admin/spinup">Spin up</a></li>
                        <li class="breadcrumb-item"><a href="/admin/reports">Reports</a></li>
                    </ol>
                </div>
				
			</div>
		</div>

        

<slot />

</div>
</div>
