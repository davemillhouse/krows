<script>

	import VoucherForm from '../voucherForm.svelte';

	export let data;
	let { voucher } = data;

	let addButtonText = 'Add a voucher';
    let view = "list"

	function showAddVoucher() {
		if (view == 'list') {
			addButtonText = 'Add a voucher';
			view = 'add';
		} else {
			addButtonText = 'View vouchers';
			view = 'list';
		}
	}
</script>

<svelte:head>
    <title>Krowz - {voucher.name}</title> 
</svelte:head>

<div class="container-fluid p-0 sm_padding_15px">
	<div class="row">
		<div class="col-12">
			<div class="page_title_box d-flex align-items-center justify-content-between">
				<div class="page_title_left">
					<h3 class="f_s_30 f_w_700 dark_text">{voucher.name}</h3>
					<ol class="breadcrumb page_bradcam mb-0">
						<li class="breadcrumb-item">Details</li>
						<li class="breadcrumb-item">Products</li>
					</ol>
				</div>
				<button class="btn_2" on:click={showAddVoucher}>{addButtonText}</button>
			</div>
		</div>


	<slot></slot>



	</div>
</div>
