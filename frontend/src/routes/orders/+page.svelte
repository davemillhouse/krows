<script>
	import Time from 'svelte-time';

	export let data;
	const { orders } = data;

    const { recentlyViewedOrders } = data;

	const {headerText} = data;
</script>

<div class="container-fluid p-0">
	<div class="row">
		<div class="col-12">
			<div class="page_title_box d-flex flex-wrap align-items-center justify-content-between">
				<div class="page_title_left d-flex align-items-center">
					<h3 class="f_s_25 f_w_700 dark_text mr_30">Your orders</h3>
					<ol class="breadcrumb page_bradcam mb-0">
						<li class="breadcrumb-item"></li>
					</ol>
				</div>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-xl-8">
			<div class="white_card card_height_100 mb_30">
				<div class="white_card_header">
					<div class="row align-items-center">
						<div class="col-lg-4">
							<div class="main-title">
								<h3 class="m-0">{headerText}</h3>
							</div>
						</div>
						<div class="col-lg-8">
							<div class="row justify-content-end">
								<div class="col-lg-8 d-flex justify-content-end">
									<div class="serach_field-area theme_bg d-flex align-items-center">
										<div class="search_inner">
											<form action="#">
												<div class="search_field">
													<input type="text" placeholder="Search" />
												</div>
												<button type="submit"> <img src="img/icon/icon_search.svg" alt /> </button>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="white_card_body">
					{#each orders as order}
					<a href="/orders/{order.id}">
						<div class="single_user_pil d-flex align-items-center justify-content-between">
							<div class="user_pils_thumb">
								<div class="f_s_14 f_w_400 text_color_11">{order.customer.firstName} {order.customer.lastName}</div>
								<div class="user_info">{order.customerOrderId}</div>
							</div>
							<div class="user_info">£55</div>
							<div class="user_info"><Time relative timestamp={order.completedDateTimeUtc} /></div>
						</div>
					</a>
					{/each}
				</div>
			</div>
		</div>
		<div class="col-xl-4">
			<div class="white_card card_height_100 mb_30">
				<div class="white_card_header">
					<div class="box_header m-0">
						<div class="main-title">
							<h3 class="m-0">Recently viewed</h3>
						</div>
						<div class="header_more_tool">
							<div class="dropdown">
								<span class="dropdown-toggle" id="dropdownMenuButton" data-bs-toggle="dropdown">
									<i class="ti-more-alt bi bi-gear" />
								</span>
								<div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
									<i class="ti-eye" /> Action
									<i class="ti-trash" /> Delete
									<i class="fas fa-edit" /> Edit
									<i class="ti-printer" /> Print
									<i class="fa fa-download" /> Download
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="white_card_body">
                    {#each recentlyViewedOrders as order}
						<div class="single_user_pil d-flex align-items-center justify-content-between">
							<div class="user_pils_thumb">
								<div class="f_s_14 f_w_400 text_color_11">{order.customer.lastName}</div>
							
							</div>
							<div class="user_info">{order.customerOrderId}</div>
						</div>
					{/each}
                </div>
			</div>
		</div>
	</div>
</div>
