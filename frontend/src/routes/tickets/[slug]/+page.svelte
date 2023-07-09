<script>
	import { enhance } from '$app/forms';

	export let data;
	const { products } = data;
</script>

<div class="container-fluid p-0">
	<div class="row justify-content-center">
		<div class="col-lg-8">
			<div class="white_card card_height_100 mb_30">
				<div class="white_card_header">
					<div class="box_header m-0">
						<div class="main-title">
							<h3 class="m-0">Ticket details</h3>
						</div>
					</div>
				</div>
				<div class="white_card_body">
					<h6 class="card-subtitle mb-2">Enter the details of this ticket.</h6>
					<form>
						<div class="mb-3">
							<label class="form-label" for="exampleInputEmail1">Name</label>
							<input
								type="email"
								class="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder=""
							/>
						</div>
						<div class="mb-3">
							<label class="form-label" for="exampleInputPassword1">Description</label>
							<input class="form-control" id="exampleInputPassword1" placeholder="" />
						</div>

						<button type="submit" class="btn btn-primary">Submit</button>
					</form>
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
