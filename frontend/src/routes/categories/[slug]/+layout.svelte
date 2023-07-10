<script>

	export let data;
	const { category } = data;

	let addButtonText = 'Add a schedule';

	function showAddCategory() {
		if (view == 'cards') {
			addButtonText = 'View schedules';
		} else {
			addButtonText = 'Add a schedule';
		}
	}
</script>

<svelte:head>
    <title>Krowz - {category.name}</title> 
</svelte:head>

<div class="container-fluid p-0 sm_padding_15px">
	<div class="row">
		<div class="col-12">
			<div class="page_title_box d-flex align-items-center justify-content-between">
				<div class="page_title_left">
					<h3 class="f_s_30 f_w_700 dark_text">{category.name}</h3>
					<ol class="breadcrumb page_bradcam mb-0">
						<li class="breadcrumb-item">Details</li>
						<li class="breadcrumb-item">Products</li>
					</ol>
				</div>
				<button class="btn_2" on:click={showAddCategory}>{addButtonText}</button>
			</div>
		</div>

	<slot></slot>
	</div>
</div>
