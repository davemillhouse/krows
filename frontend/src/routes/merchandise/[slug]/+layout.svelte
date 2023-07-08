<script>
	
	export let data;
	const { product } = data;

	console.log(product);

	let view = 'schedules';
	let addButtonText = 'Add a schedule';

	function showAddProduct() {
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
                    <h3 class="f_s_30 f_w_700 dark_text">{product.name}</h3>
                    <ol class="breadcrumb page_bradcam mb-0">
						<li class="breadcrumb-item"><a href="/products/{product.id}">Details</a></li>
                        <li class="breadcrumb-item"><a href="/products/{product.id}/schedules">Schedules</a></li>
                        <li class="breadcrumb-item"><a href="/products/{product.id}/bookings">Bookings</a></li>
                        <li class="breadcrumb-item"><a href="/products/{product.id}/questions">Questions</a></li>
                        <li class="breadcrumb-item"><a href="/products/{product.id}/comms">Comms</a></li>
                        <li class="breadcrumb-item"><a href="/products/{product.id}/categories">Categories</a></li>
                    </ol>
                </div>
				<button class="btn_2" on:click={showAddProduct}>{addButtonText}</button>
			</div>
		</div>

        

<slot product={product} />

</div>
</div>
