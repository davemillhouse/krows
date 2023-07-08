<script>
	import Time from 'svelte-time';

	export let data;
	const { order } = data;

	console.log(order);
</script>

<div class="container-fluid p-0">
	<div class="row">
		<div class="col-xl-8">

			{#each order.bookings as booking}
			<div class="white_card mb-3">
				
				<div class="white_card_header  border_bottom_1px">
					<div class="box_header m-0">
						<div class="main-title">
							
							<h4><i  class="generic-circle bi bi-circle-fill"></i>{booking.productName}</h4>
							<h5 class="card-title mb-0">
								<a href="/sessions/{booking.sessionId}">
								<Time format="dddd MMMM D, YYYY @ h:mm A" timestamp={booking.sessionStartDateTimeUtc} /></a></h5>
						
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

				<div class="card-body">
					<div class="table-responsive shopping-cart">
						<table class="table mb-0">
							<tbody>
								<tr>
									<td>
										<img src="img/products/img-5.png" alt="" height="52" />
										<p
											class="d-inline-block align-middle mb-0 product-name f_s_16 f_w_600 color_theme2"
										>
											Adult ticket
										</p>
									</td>
									<td>2</td>
									<td>£198</td>
								</tr>
								<tr>
									<td>
										<img src="img/products/01.png" alt="" height="52" />
										<p
											class="d-inline-block align-middle mb-0 product-name f_s_16 f_w_600 color_theme2"
										>
											Child ticket
										</p>
									</td>
									<td>2</td>
									<td>£150</td>
								</tr>
								{#each booking.soldMerchandise as soldMerchandise}
								<tr>
									<td>
										<img src="img/products/img-5.png" alt="" height="52" />
										<p
											class="d-inline-block align-middle mb-0 product-name f_s_16 f_w_600 color_theme2"
										>
											{soldMerchandise.name}
										</p>
									</td>
									<td>{soldMerchandise.quantity}</td>
									<td>{soldMerchandise.salesAmountString}</td>
								</tr>
								{/each}
								
								
							</tbody>
						</table>
					</div>

			
				</div>
			</div>
			{/each}
		</div>
		<div class="col-xl-4">
			<div class="white_card card_height_100 mb_30">
				<div class="white_card_header">
					<div class="box_header m-0">
						<div class="main-title">
							<h3 class="m-0">Timeline</h3>
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
					<div class="Activity_timeline">
						<ul>
							{#each order.timeline as timelineItem}
								<li>
									<div
										class="activity_bell"
										style="background-color:{timelineItem.backgroundColor}"
									/>
									<div class="timeLine_inner d-flex align-items-center">
										<div class="activity_wrap">
											<h6><Time relative timestamp={timelineItem.createdDateTimeUtc} /></h6>
											<p>{timelineItem.description}</p>
										</div>
									</div>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
