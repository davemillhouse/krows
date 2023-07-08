<script>
	export let data;
	const { session } = data;

	

	var options = {
		chart: {
			height: 280,
			type: 'radialBar'
		},

		series: [67],
		colors: ['#20E647'],
		plotOptions: {
			radialBar: {
				hollow: {
					margin: 0,
					size: '70%',
					background: '#293450'
				},
				track: {
					dropShadow: {
						enabled: true,
						top: 2,
						left: 0,
						blur: 4,
						opacity: 0.15
					}
				},
				dataLabels: {
					name: {
						offsetY: -10,
						color: '#fff',
						fontSize: '13px'
					},
					value: {
						color: '#fff',
						fontSize: '30px',
						show: true
					}
				}
			}
		},
		fill: {
			type: 'gradient',
			gradient: {
				shade: 'dark',
				type: 'vertical',
				gradientToColors: ['#87D4F9'],
				stops: [0, 100]
			}
		},
		stroke: {
			lineCap: 'round'
		},
		labels: ['Capacity']
	};

	let chart;

	import { onMount } from 'svelte';
	onMount(() => {
		chart = new ApexCharts(document.querySelector('[data-chart="sales"]'), options);
		chart.render();
	});


</script>

<div class="container-fluid p-0">
	<div class="row">
		<div class="col-xl-4">
			<div class="white_card card_height_100 mb_30">
				<div class="white_card_header">
					<div class="box_header m-0">
						<div class="main-title">
							<h3 class="m-0">Session details</h3>
						</div>
						<div class="header_more_tool">
							<div class="dropdown">
								<span class="dropdown-toggle" id="dropdownMenuButton" data-bs-toggle="dropdown">
									<i class="ti-more-alt bi bi-gear" />
								</span>
								<div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
									<a class="dropdown-item" href="#"> <i class="ti-eye" /> Action</a>
									<a class="dropdown-item" href="#"> <i class="ti-trash" /> Delete</a>
									<a class="dropdown-item" href="#"> <i class="fas fa-edit" /> Edit</a>
									<a class="dropdown-item" href="#"> <i class="ti-printer" /> Print</a>
									<a class="dropdown-item" href="#"> <i class="fa fa-download" /> Download</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="white_card_body">
					<div class="thumb mb_30">
						<img src="/img/table.svg" alt="" class="img-fluid" />
					</div>
					<div class="common_form">
						<form action="#">
							<div class="row">
								<div class="col-lg-12">
									<div class="common_input mb_15">
									
										<input type="date" value="2023-01-02" placeholder="" />
									</div>
								</div>
								<div class="col-lg-6">
									<div class="common_input mb_15">
										<input value="" placeholder="" />
									</div>
								</div>
								<div class="col-lg-6">
									<div class="common_input mb_15">
										<input type="time" placeholder="" />
									</div>
								</div>

								<div class="col-12">
									<div class="create_report_btn mt_30">
										<a href="#" class="btn_1 radius_btn d-block text-center">Update</a>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xl-4">
			<div class="white_card card_height_100 mb_30">
				<div class="white_card_header">
					<div class="box_header m-0">
						<div class="main-title">
							<h3 class="m-0">Sales</h3>
						</div>
						<div class="header_more_tool">
							<div class="dropdown">
								<span class="dropdown-toggle" id="dropdownMenuButton" data-bs-toggle="dropdown">
									<i class="ti-more-alt bi bi-gear" />
								</span>
								<div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
									<a class="dropdown-item" href="#"> <i class="ti-eye" /> Action</a>
									<a class="dropdown-item" href="#"> <i class="ti-trash" /> Delete</a>
									<a class="dropdown-item" href="#"> <i class="fas fa-edit" /> Edit</a>
									<a class="dropdown-item" href="#"> <i class="ti-printer" /> Print</a>
									<a class="dropdown-item" href="#"> <i class="fa fa-download" /> Download</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="white_card_body" style="position: relative;">
					<div id="chart-currently" style="min-height: 166.599px;">
						<div data-chart="sales" />
					</div>
					<div class="monthly_plan_wraper">
						<div class="single_plan d-flex align-items-center justify-content-between">
							<div class="plan_left d-flex align-items-center">
								<div class="thumb">
									<img src="/img/icon2/7.svg" alt="" />
								</div>
								<div>
									<h5>On Sale</h5>
									<span>Click to take off sale</span>
								</div>
							</div>
						</div>
						<div class="single_plan d-flex align-items-center justify-content-between">
							<div class="plan_left d-flex align-items-center">
								<div class="thumb">
									<img src="/img/icon2/6.svg" alt="" />
								</div>
								<div>
									<h5>3 places booked</h5>
									<span>10 places remaining</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xl-4">
			<div class="white_card card_height_100 mb_30 overflow_hidden">
				<div class="white_card_header">
					<div class="box_header m-0">
						<div class="main-title">
							<h3 class="m-0">Sales Details</h3>
						</div>
						<div class="header_more_tool">
							<div class="dropdown">
								<span class="dropdown-toggle" id="dropdownMenuButton" data-bs-toggle="dropdown">
									<i class="ti-more-alt bi bi-gear" />
								</span>
								<div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
									<a class="dropdown-item" href="#"> <i class="ti-eye" /> Action</a>
									<a class="dropdown-item" href="#"> <i class="ti-trash" /> Delete</a>
									<a class="dropdown-item" href="#"> <i class="fas fa-edit" /> Edit</a>
									<a class="dropdown-item" href="#"> <i class="ti-printer" /> Print</a>
									<a class="dropdown-item" href="#"> <i class="fa fa-download" /> Download</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="white_card_body pb-0">
					<div class="Sales_Details_plan">
						<div class="row">
							<div class="col-lg-6">
								<div class="single_plan d-flex align-items-center justify-content-between">
									<div class="plan_left d-flex align-items-center">
										<div class="thumb">
											<img src="/img/icon2/3.svg" alt="" />
										</div>
										<div>
											<h5>£2,034</h5>
											<span>Money earnt</span>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-6">
								<div class="single_plan d-flex align-items-center justify-content-between">
									<div class="plan_left d-flex align-items-center">
										<div class="thumb">
											<img src="/img/icon2/1.svg" alt="" />
										</div>
										<div>
											<h5>25</h5>
											<span>Tickets sold</span>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-6">
								<div class="single_plan d-flex align-items-center justify-content-between">
									<div class="plan_left d-flex align-items-center">
										<div class="thumb">
											<img src="/img/icon2/4.svg" alt="" />
										</div>
										<div>
											<h5>£49</h5>
											<span>Average price</span>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-6">
								<div class="single_plan d-flex align-items-center justify-content-between">
									<div class="plan_left d-flex align-items-center">
										<div class="thumb">
											<img src="/img/icon2/2.svg" alt="" />
										</div>
										<div>
											<h5>{session.capacity}</h5>
											<span>Bookings</span>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-6">
								<div class="single_plan d-flex align-items-center justify-content-between">
									<div class="plan_left d-flex align-items-center">
										<div class="thumb">
											<img src="/img/icon2/3.svg" alt="" />
										</div>
										<div>
											<h5>37</h5>
											<span>Attendees</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="col-xl-12">
			<div class="white_card card_height_100 mb_30">
				<div class="white_card_header">
					<div class="row align-items-center">
						<div class="col-lg-4">
							<div class="main-title">
								<h3 class="m-0">Bookings</h3>
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
												<button type="submit">
													<img src="/img/icon/icon_search.svg" alt="" />
												</button>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="white_card_body">
					<div class="row">
						{#each session.completeBookings as booking}
						<div class="col-lg-4">
							<div class="single_user_pil d-flex align-items-center justify-content-between">
								<div class="user_pils_thumb d-flex align-items-center">
									<span class="f_s_14 f_w_400 text_color_11">{booking.customerName}</span>
								</div>
								<div class="user_info">{booking.customerOrderId}</div>
							</div>
						</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
