<script>
	import { enhance } from '$app/forms';
	import { Circle3 } from 'svelte-loading-spinners';

	let working = false;
</script>

<div class="container-fluid p-0">
	<div class="row">
		<div class="col-lg-4">
			<div class="white_card card_height_100 mb_30">
				

				<form method="POST" action="?/create" use:enhance={() => {
					working = true;
			
					return async ({ update }) => {
						await update({ reset: false });
						working = false;
					};
				}}>
				<div class="white_card_header">
					<div class="box_header m-0">
						<div class="main-title">
							<h3 class="m-0">Tear down</h3>
						</div>
					</div>
				</div>
				

				<div class="create_report_btn mt_30">
					{#if working}
						<div style="display:flex;" class="justify-content-center">
							<Circle3 size="35" /></div>
						{:else}
							<button style="height:60px;" class="btn-primary btn_1 text-center" type="submit"> Go </button>
						{/if}
				
				</div>

			</form>

			</div>
		</div>
	</div>
</div>
