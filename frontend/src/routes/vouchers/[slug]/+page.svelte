<script>
	import VoucherForm from "../voucherForm.svelte";

	export let data;
	const { products } = data;
	let { voucher } = data;
</script>

<div class="container-fluid p-0">
	<div class="row justify-content-center">
		<div class="col-lg-8">
			<div class="white_card card_height_100 mb_30">
				<div class="white_card_header">
					<div class="box_header m-0">
						<div class="main-title">
							<h3 class="m-0">Voucher details</h3>
						</div>
					</div>
				</div>
				<div class="white_card_body">
				
					<VoucherForm { voucher } method="update"></VoucherForm>
	
				</div>
			</div>
		</div>
		<div class="col-lg-4">
			<div class="white_box mb_30">
				<div class="box_header">
					<div class="main-title">
						<h3 class="mb-0">Products</h3>
					</div>
				</div>

				<div class="white_card_body">
					<div>
						{#each products as product}
							<h4><span class="badge bg-secondary">{product.name}</span></h4>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
