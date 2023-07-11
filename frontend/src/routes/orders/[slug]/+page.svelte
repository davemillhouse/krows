<script>
	import Time from 'svelte-time';

	export let data;
	const { order } = data;
</script>


<div class="container-fluid p-0">
	<div class="row">
		<div class="col-xl-8">
			{#each order.bookings as booking}
				<div class="white_card mb-3">
					<div class="white_card_header border_bottom_1px">
						<div class="box_header m-0">
							<div class="main-title">
								<h4><i class="generic-circle bi bi-circle-fill" />{booking.productName}</h4>
								<h5 class="card-title mb-0">
									<a href="/sessions/{booking.sessionId}">
										<Time
											format="dddd MMMM D, YYYY @ h:mm A"
											timestamp={booking.sessionStartDateTimeUtc}
										/></a
									>
								</h5>
							</div>
							<div class="header_more_tool">
								<div class="dropdown">
									<span class="dropdown-toggle" id="dropdownMenuButton" data-bs-toggle="dropdown">
										<i class="ti-more-alt bi bi-gear" />
									</span>
									<div
										class="dropdown-menu dropdown-menu-right"
										aria-labelledby="dropdownMenuButton"
									>
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
								<th> &nbsp; </th>
								<th> qty </th>
								<th> unit </th>
								<th> total </th>
								<tbody>
									{#each booking.soldTickets as soldTicket}
										<tr>
											<td>
												
												<p
													class="d-inline-block align-middle mb-0 product-name f_s_16 f_w_600 color_theme2"
												>
													{soldTicket.name}
												</p>
												<div>ticket</div>
											</td>
											<td>{soldTicket.quantity}</td>
											<td>{soldTicket.unitSalesAmountString}</td>
											<td>{soldTicket.totalSalesAmountString}</td>
										</tr>
									{/each}
									{#each booking.soldMerchandise as soldMerchandise}
										<tr>
											<td>
												
												<p
													class="d-inline-block align-middle mb-0 product-name f_s_16 f_w_600 color_theme2"
												>
													{soldMerchandise.name}
												</p>
												<div>merchandise</div>
											</td>
											<td>{soldMerchandise.quantity}</td>
											<td>{soldMerchandise.unitSalesAmountString}</td>
											<td>{soldMerchandise.totalSalesAmountString}</td>
										</tr>
									{/each}
									{#each booking.soldDiscountCodes as discountCode}
										<tr>
											<td>
												
												<p
													class="d-inline-block align-middle mb-0 product-name f_s_16 f_w_600 color_theme2"
												>
													{discountCode.name}
												</p>
												<div>discount code</div>
											</td>
											<td>1</td>
											<td>{discountCode.salesAmountString}</td>
											<td>{discountCode.salesAmountString}</td>
										</tr>
									{/each}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			{/each}
			{#each order.soldSupplierVouchers as voucher}
				<div class="white_card mb-3">
					<div class="white_card_header border_bottom_1px">
						<div class="box_header m-0">
							<div class="main-title">
								<h4><i class="generic-circle bi bi-circle-fill" />{voucher.name}</h4>
								<h5 class="card-title mb-0">
									
								</h5>
							</div>
							<div class="header_more_tool">
								<div class="dropdown">
									<span class="dropdown-toggle" id="dropdownMenuButton" data-bs-toggle="dropdown">
										<i class="ti-more-alt bi bi-gear" />
									</span>
									<div
										class="dropdown-menu dropdown-menu-right"
										aria-labelledby="dropdownMenuButton"
									>
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
								<th> &nbsp; </th>
								<th> qty </th>
								<th> unit </th>
								<th> total </th>
								<tbody>
									
										<tr>
											<td>
											
												<p
													class="d-inline-block align-middle mb-0 product-name f_s_16 f_w_600 color_theme2"
												>
													{voucher.name}
												</p>
												<div>voucher</div>
											</td>
											<td>{voucher.quantity}</td>
											<td>{voucher.unitSalesAmountString}</td>
											<td>{voucher.totalSalesAmountString}</td>
										</tr>
								
								
								</tbody>
							</table>
						</div>
					</div>
				</div>
			{/each}
		</div>
		<div class="col-xl-4">
			<div class="white_card mb_30">
				<div class="white_card_header">
					<div class="box_header m-0">
						<div class="main-title">
							<h3 class="m-0">Payments</h3>
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
					<div class="d-flex align-items-center">
					<div style="margin-right:15px;">
						<div>
							Total: 
						</div>
						<div>Paid: </div>
						<div>Outstanding: </div>
					</div>
					<div>
						<div>
							<strong>{order.salesAmountString}</strong>
						</div>
						<div>
							<strong>{order.paymentAmountString}</strong>
						</div>
						<div>
							<strong>{order.outstandingAmountString}</strong>
						</div>
					</div>
					</div>
				</div>
			</div>
			<div class="white_card mb_30">
				<div class="white_card_header">
					<div class="box_header m-0">
						<div class="main-title">
							<h3 class="m-0">Customer</h3>
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
					<div><strong>
						{order.customer.firstName}
						{order.customer.lastName}</strong>
					</div>
					<div>{order.customer.email}</div>
					<div>{order.customer.primaryTelephone}</div>
				</div>
			</div>

			<div class="white_card mb_30">
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
											<h6>
												<Time
													format="MMMM D @ h:mm A"
													timestamp={timelineItem.createdDateTimeUtc}
												/>
											</h6>
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
