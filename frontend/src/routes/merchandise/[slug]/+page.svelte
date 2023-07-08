<script>

	let options = {
		chart: {
			type: 'line',
			height: '100%',
			toolbar: {
				show: false
			}
		},
		series: [
			{
				name: 'sales',
				data: [35, 50, 49, 60, 70, 91, 125]
			}
		],
		xaxis: {
			categories: ['9/6', '10/6', '11/6', '12/6', '13/6', '14/6', '15/6']
		}
	};

	import { onMount } from 'svelte';
	onMount(() => {
		const chart = new ApexCharts(document.querySelector('[data-chart="sales"]'), options);
		chart.render();
	});
</script>

<div class="container-fluid p-0">
	
	<div class="row">
		<div class="col-xl-8">
			<div class="white_card mb_30 card_height_100" style="max-height:460px;">
				<div class="white_card_header">
					<div class="row align-items-center justify-content-between flex-wrap">
						<div class="col-lg-4">
							<div class="main-title">
								<h3 class="m-0">Recent sales</h3>
							</div>
						</div>
						<div class="col-lg-4 text-end d-flex justify-content-end">
							<select class="nice_Select2 max-width-220">
								<option value="1">Last week</option>
								<option value="1">Last month</option>
								<option value="1">Last year</option>
							</select>
						</div>
					</div>
				</div>
				<div class="white_card_body" style="height:100%;max-height:378px;">
					<div data-chart="sales" />
				</div>
			</div>
		</div>
		<div class="col-xl-4">
			<div class="white_card card_height_100 mb_30 user_crm_wrapper">
				<div class="row">
					<div class="col-lg-6">
						<div class="single_crm">
							<div class="crm_head d-flex align-items-center justify-content-between">
								<div class="thumb">
									<img src="/img/crm/businessman.svg" alt />
								</div>
								<i class="fas fa-ellipsis-h f_s_11 white_text" />
							</div>
							<div class="crm_body">
								<h4>56</h4>
								<p>Bookings</p>
							</div>
						</div>
					</div>
					<div class="col-lg-6">
						<div class="single_crm">
							<div class="crm_head crm_bg_1 d-flex align-items-center justify-content-between">
								<div class="thumb">
									<img src="/img/crm/customer.svg" alt />
								</div>
								<i class="fas fa-ellipsis-h f_s_11 white_text" />
							</div>
							<div class="crm_body">
								<h4>35</h4>
								<p>Sessions</p>
							</div>
						</div>
					</div>
					<div class="col-lg-6">
						<div class="single_crm">
							<div class="crm_head crm_bg_2 d-flex align-items-center justify-content-between">
								<div class="thumb">
									<img src="/img/crm/infographic.svg" alt />
								</div>
								<i class="fas fa-ellipsis-h f_s_11 white_text" />
							</div>
							<div class="crm_body">
								<h4>£9,365</h4>
								<p>Amount taken</p>
							</div>
						</div>
					</div>
					<div class="col-lg-6">
						<div class="single_crm">
							<div class="crm_head crm_bg_3 d-flex align-items-center justify-content-between">
								<div class="thumb">
									<img src="/img/crm/sqr.svg" alt />
								</div>
								<i class="fas fa-ellipsis-h f_s_11 white_text" />
							</div>
							<div class="crm_body">
								<h4>75</h4>
								<p>Vouchers sold</p>
							</div>
						</div>
					</div>
					<div class="col-lg-6">
						<div class="single_crm">
							<div class="crm_head crm_bg_2 d-flex align-items-center justify-content-between">
								<div class="thumb">
									<img src="/img/crm/infographic.svg" alt />
								</div>
								<i class="fas fa-ellipsis-h f_s_11 white_text" />
							</div>
							<div class="crm_body">
								<h4>35</h4>
								<p>Redemptions</p>
							</div>
						</div>
					</div>
					<div class="col-lg-6">
						<div class="single_crm">
							<div class="crm_head crm_bg_3 d-flex align-items-center justify-content-between">
								<div class="thumb">
									<img src="/img/crm/sqr.svg" alt />
								</div>
								<i class="fas fa-ellipsis-h f_s_11 white_text" />
							</div>
							<div class="crm_body">
								<h4>76%</h4>
								<p>Capacity</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xl-4">
			<div class="white_card card_height_100 mb_30">
				<div class="white_card_header">
					<div class="row align-items-center">
						<div class="col-lg-4">
							<div class="main-title">
								<h3 class="m-0">Recent</h3>
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
												<button type="submit"> <img src="/img/icon/icon_search.svg" alt /> </button>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="white_card_body">
					<div class="single_user_pil d-flex align-items-center justify-content-between">
						<div class="user_pils_thumb d-flex align-items-center">
							<span class="f_s_14 f_w_400 text_color_11">Jones</span>
						</div>
						<div class="user_info">£55</div>
						<div class="user_info">55 minutes ago</div>
					</div>
					<div class="single_user_pil d-flex align-items-center justify-content-between">
						<div class="user_pils_thumb d-flex align-items-center">
							<span class="f_s_14 f_w_400 text_color_11">Smith</span>
						</div>
						<div class="user_info">£55</div>
						<div class="user_info">Yesterday</div>
					</div>
					<div class="single_user_pil d-flex align-items-center justify-content-between">
						<div class="user_pils_thumb d-flex align-items-center">
							<span class="f_s_14 f_w_400 text_color_11">Brown</span>
						</div>
						<div class="user_info">£100</div>
						<div class="user_info">2/6</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xl-4">
			<div class="white_card card_height_100 mb_30">
				<div class="white_card_header">
					<div class="box_header m-0">
						<div class="main-title">
							<h3 class="m-0">Upcoming</h3>
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
							<li>
								<div class="activity_bell" />
								<div class="timeLine_inner d-flex align-items-center">
									<div class="activity_wrap">
										<h6>2.30</h6>
										<p>Walking activity with <strong>3</strong> guests</p>
									</div>
								</div>
							</li>
							<li>
								<div class="activity_bell" />
								<div class="timeLine_inner d-flex align-items-center">
									<div class="activity_wrap">
										<h6>5.30pm</h6>
										<p>Driving Tour with <strong>2</strong> guests</p>
									</div>
								</div>
							</li>
							<li>
								<div class="activity_bell bell_lite" />
								<div class="timeLine_inner d-flex align-items-center">
									<div class="activity_wrap">
										<h6>Tomorrow 2pm</h6>
										<p>Big Bus Tour with 7 guests</p>
									</div>
								</div>
							</li>
							<li>
								<div class="activity_bell bell_lite" />
								<div class="timeLine_inner d-flex align-items-center">
									<div class="activity_wrap">
										<h6>Friday 6pm</h6>
										<p>Big Bus Tour with 12 guests</p>
									</div>
								</div>
							</li>
						</ul>
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
				<div class="white_card_body pb-0">
					<div class="Sales_Details_plan">
						<div class="row">
							<div class="col-lg-6">
								<div class="single_plan d-flex align-items-center justify-content-between">
									<div class="plan_left d-flex align-items-center">
										<div class="thumb">
											<img src="/img/icon2/3.svg" alt />
										</div>
										<div>
											<h5>$2,034</h5>
											<span>Total sales</span>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-6">
								<div class="single_plan d-flex align-items-center justify-content-between">
									<div class="plan_left d-flex align-items-center">
										<div class="thumb">
											<img src="/img/icon2/1.svg" alt />
										</div>
										<div>
											<h5>£45</h5>
											<span>Average sale</span>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-6">
								<div class="single_plan d-flex align-items-center justify-content-between">
									<div class="plan_left d-flex align-items-center">
										<div class="thumb">
											<img src="/img/icon2/4.svg" alt />
										</div>
										<div>
											<h5>10%</h5>
											<span>Increase per month</span>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-6">
								<div class="single_plan d-flex align-items-center justify-content-between">
									<div class="plan_left d-flex align-items-center">
										<div class="thumb">
											<img src="/img/icon2/2.svg" alt />
										</div>
										<div>
											<h5>$5.8M</h5>
											<span>All Time Sales</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="chart_wrap overflow_hidden">
					<div id="chart4" />
				</div>
			</div>
		</div>
	</div>
</div>


