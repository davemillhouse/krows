<script>
	export let data;
	const { suppliers } = data;

</script>

<div class="container-fluid p-0 sm_padding_15px">
	<div class="row">
		
			<div class="row justify-content-center">
				<div class="col-lg-12">
					<div class="white_card card_height_100 mb_30">
						<div class="white_card_header">
							<div class="box_header m-0">
								<div class="main-title">
									<h3 class="m-0">Supplier List</h3>
								</div>
							</div>
						</div>
						<div class="white_card_body">
							<table class="table table-striped">
								<th>Name</th>
								<th>Description</th>
								<tbody>
									{#each suppliers as supplier}
										<tr>
											<td>{supplier.name}!</td>
											<td></td>
										</tr>
									{/each}
								</tbody>
							</table>
							
						</div>
					</div>
				</div>
			</div>



	</div>
</div>
