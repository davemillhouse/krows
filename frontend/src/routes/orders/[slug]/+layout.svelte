<script>
	export let data;
	const { order } = data;

	let view = 'orders';
	let addButtonText = 'Add an order';

	function showAddProduct() {
		if (view == 'cards') {
			addButtonText = 'View orders';
		} else {
			addButtonText = 'Add an order';
		}
	}
</script>

<svelte:head>
    <title>Krowz - Order {order.customerOrderId}</title> 
	<li><a href="login.html">Bookings</a></li>
</svelte:head>

<div class="container-fluid p-0 sm_padding_15px">
	<div class="row">
		<div class="col-12">
			<div class="page_title_box d-flex align-items-center justify-content-between">
				<div class="page_title_left">
					<h3 class="f_s_30 f_w_700 dark_text">Order {order.customerOrderId}</h3>
					<ol class="breadcrumb page_bradcam mb-0">
						<li class="breadcrumb-item"><a href="/orders/{order.id}">Details</a></li>
						<li class="breadcrumb-item"><a href="/orders/{order.id}/customer">Customer</a></li>
						<li class="breadcrumb-item"><a href="/orders/{order.id}/attendees">Attendees</a></li>
						<li class="breadcrumb-item"><a href="/orders/{order.id}/comms">Comms</a></li>
					</ol>
				</div>
				<button class="btn_2" on:click={showAddProduct}>{addButtonText}</button>
			</div>
		</div>

		<slot {order} />
	</div>
</div>
