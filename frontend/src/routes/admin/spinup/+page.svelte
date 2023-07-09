<script>
	import { enhance } from '$app/forms';
	import { Circle3 } from 'svelte-loading-spinners';

	let working = false;
</script>

<form
	method="POST"
	action="?/create"
	use:enhance={() => {
		working = true;

		return async ({ update }) => {
			await update({ reset: false });
			working = false;
		};
	}}
>
	<div class="container-fluid p-0">
		<div class="row">
			<div class="col-lg-4">
				<div class="white_card card_height_100 mb_30">
					<div class="white_card_header">
						<div class="box_header m-0">
							<div class="main-title">
								<h3 class="m-0">Spin up</h3>
							</div>
						</div>
					</div>
					<div class="white_card_body">
						<h6 class="card-subtitle mb-2">Categories</h6>
						<div class=" mb-0">
							<input
								type="number"
								class="form-control"
								name="categories"
								id="inputNumber"
								value="3"
							/>
						</div>
					</div>
					<div class="white_card_body">
						<h6 class="card-subtitle mb-2">Products</h6>
						<div class=" mb-0">
							<input
								type="number"
								class="form-control"
								name="products"
								id="inputNumber"
								value="10"
							/>
						</div>
					</div>
					<div class="white_card_body">
						<h6 class="card-subtitle mb-2">Tickets</h6>
						<div class=" mb-0">
							<input
								type="number"
								class="form-control"
								name="tickets"
								id="inputNumber"
								value="5"
							/>
						</div>
					</div>
					<div class="white_card_body">
						<h6 class="card-subtitle mb-2">Sessions</h6>
						<div class=" mb-0">
							<input
								type="number"
								class="form-control"
								name="sessions"
								id="inputNumber"
								value="3000"
							/>
						</div>
					</div>
					<div class="white_card_body">
						<h6 class="card-subtitle mb-2">Merchandise</h6>
						<div class=" mb-0">
							<input
								type="number"
								class="form-control"
								name="merchandise"
								id="merchandise"
								value="10"
							/>
						</div>
					</div>
					<div class="white_card_body">
						<h6 class="card-subtitle mb-2">Vouchers</h6>
						<div class=" mb-0">
							<input
								type="number"
								class="form-control"
								name="vouchers"
								id="vouchers"
								value="8"
							/>
						</div>
					</div>
				</div>
			</div>

			<div class="col-lg-4">
				<div class="white_card card_height_100 mb_30">
					<div class="white_card_header">
						<div class="box_header m-0">
							<div class="main-title">
								
							</div>
						</div>
					</div>

					<div class="white_card_body">
						<h6 class="card-subtitle mb-2">Orders</h6>
						<div class=" mb-0">
							<input
								type="number"
								class="form-control"
								name="orders"
								id="inputNumber"
								value="1000"
							/>
						</div>
					</div>
					<div class="white_card_body">
						<h6 class="card-subtitle mb-2">Extra bookings</h6>
						<div class=" mb-0">
							<input
								type="number"
								class="form-control"
								name="bookings"
								id="inputNumber"
								value="1000"
							/>
						</div>
						<small class="form-text text-muted">Each order has one booking by default</small>
					</div>
					<div class="white_card_body">
						<h6 class="card-subtitle mb-2">Extra sold tickets</h6>
						<div class=" mb-0">
							<input
								type="number"
								class="form-control"
								name="soldTickets"
								id="inputNumber"
								value="2000"
							/>
						</div>
						<small class="form-text text-muted">Each booking has one ticket by default</small>
					</div>
					<div class="white_card_body">
						<h6 class="card-subtitle mb-2">Sold vouchers</h6>
						<div class=" mb-0">
							<input
								type="number"
								class="form-control"
								name="soldVouchers"
								id="soldVouchers"
								value="500"
							/>
						</div>
					</div>
					<div class="white_card_body">
						<h6 class="card-subtitle mb-2">Sold merchandise</h6>
						<div class=" mb-0">
							<input
								type="number"
								class="form-control"
								name="soldMerchandise"
								id="soldMerchandise"
								value="400"
							/>
						</div>
					</div>
					<div class="white_card_body">
						<h6 class="card-subtitle mb-2">Stripe payments</h6>
						<div class=" mb-0">
							<input
								type="number"
								class="form-control"
								name="stripePayments"
								id="stripePayments"
								value="2000"
							/>
						</div>
					</div>
					<div class="white_card_body">
						<h6 class="card-subtitle mb-2">Voucher payments</h6>
						<div class=" mb-0">
							<input
								type="number"
								class="form-control"
								name="voucherPayments"
								id="voucherPayments"
								value="1000"
							/>
						</div>
					</div>
					<div class="white_card_body">
						<h6 class="card-subtitle mb-2">Cash payments</h6>
						<div class=" mb-0">
							<input
								type="number"
								class="form-control"
								name="cashPayments"
								id="cashPayments"
								value="500"
							/>
						</div>
					</div>
				</div>
			</div>

			<div class="col-lg-4">
				<div class="white_card card_height_100 mb_30">
					<div class="white_card_header">
						<div class="box_header m-0">
							<div class="main-title">
								
							</div>
						</div>
					</div>
					<div class="white_card_body">
						{#if working}
						<div style="display:flex;" class="justify-content-center">
							<Circle3 size="35" /></div>
						{:else}
							<button style="height:60px;" class="w-100 btn-primary" type="submit"> Go </button>
						{/if}
						
					</div>
				</div>
			</div>
		</div>
	</div>
</form>
