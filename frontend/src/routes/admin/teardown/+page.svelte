<script>
	import { enhance } from '$app/forms';
	</script>

<div class="container-fluid p-0">
	<div class="row">
		<div class="col-lg-4">
			<div class="white_card card_height_100 mb_30">
				

				<form method="POST" action="?/create" use:enhance>
				<div class="white_card_header">
					<div class="box_header m-0">
						<div class="main-title">
							<h3 class="m-0">Tear down</h3>
						</div>
					</div>
				</div>
				

				<div class="create_report_btn mt_30">
					<button type="submit" class="btn_1 radius_btn d-block text-center">destroy</button>
				</div>

			</form>

			</div>
		</div>
	</div>
</div>
