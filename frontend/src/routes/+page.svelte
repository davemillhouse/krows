<script>
	import Time from 'svelte-time';
	import { enhance } from '$app/forms';

	export let data;
	const { sessions } = data;
	const { orders } = data;
	const { ordersByDay } = data;

	let form;

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
				name: 'Orders',
				data: ordersByDay.orderTotals
			}
		],
		xaxis: {
			categories: ordersByDay.orderDates
		},
		yaxis: {
			labels: {
				formatter: function (value) {
					return '£' + value;
				}
			}
		},
		stroke: {
			show: true,
			curve: 'smooth',
			colors: ['#c388f6'],
			width: 5
		}
	};

	let chart;

	import { onMount } from 'svelte';
	onMount(() => {
		chart = new ApexCharts(document.querySelector('[data-chart="sales"]'), options);
		chart.render();
	});

	function showCounts() {
		chart.updateOptions({
			series: [
				{
					data: ordersByDay.orderCounts
				}
			],
			stroke: {
				colors: ['#ff7ea5']
			},
			yaxis: {
				labels: {
					formatter: function (value) {
						return value;
					}
				}
			}
		});
	}

	function showTicketTotals() {
		chart.updateOptions({
			series: [
				{
					data: ordersByDay.soldTicketTotals
				}
			],
			stroke: {
				colors: ['#b3505091']
			},
			yaxis: {
				labels: {
					formatter: function (value) {
						return '£' + value;
					}
				}
			}
		});
	}

	function showVoucherTotals() {
		chart.updateOptions({
			series: [
				{
					data: ordersByDay.soldSupplierVoucherTotals
				}
			],
			stroke: {
				colors: ['#c388f6']
			},
			yaxis: {
				labels: {
					formatter: function (value) {
						return '£' + value;
					}
				}
			}
		});
	}

	function showSoldMerchandiseTotals() {
		chart.updateOptions({
			series: [
				{
					data: ordersByDay.soldMerchandiseTotals
				}
			],
			stroke: {
				colors: ['#7eb9ff9c']
			},
			yaxis: {
				labels: {
					formatter: function (value) {
						return '£' + value;
					}
				}
			}
		});
	}

	function showTotals() {
		chart.updateOptions({
			series: [
				{
					data: ordersByDay.orderTotals
				}
			],
			stroke: {
				colors: ['#c388f6']
			},
			yaxis: {
				labels: {
					formatter: function (value) {
						return '£' + value;
					}
				}
			}
		});
	}

	function showVoucherRedemptions() {
		chart.updateOptions({
			series: [
				{
					data: ordersByDay.voucherRedemptionCounts
				}
			],
			stroke: {
				colors: ['#ffd47e9c']
			},
			yaxis: {
				labels: {
					formatter: function (value) {
						return value;
					}
				}
			}
		});
	}

	function showSoldSupplierVoucherCounts() {
		chart.updateOptions({
			series: [
				{
					data: ordersByDay.soldSupplierVoucherCounts
				}
			],
			stroke: {
				colors: ['#ffbe6a']
			},
			yaxis: {
				labels: {
					formatter: function (value) {
						return value;
					}
				}
			}
		});
	}

	function showSessionCounts() {
		chart.updateOptions({
			series: [
				{
					data: ordersByDay.sessionCounts
				}
			],
			stroke: {
				colors: ['#20deff']
			},
			yaxis: {
				labels: {
					formatter: function (value) {
						return value;
					}
				}
			}
		});
	}
</script>

<svelte:head>
    <title>Krowz - Home</title> 
</svelte:head>

<div class="container-fluid p-0">
	<div class="row">
		<div class="col-12">
			<div class="page_title_box d-flex flex-wrap align-items-center justify-content-between">
				<div class="page_title_left d-flex align-items-center">
					<h3 class="f_s_25 f_w_700 dark_text mr_30">Your Dashboard</h3>
					<ol class="breadcrumb page_bradcam mb-0">
						<li class="breadcrumb-item">Big Bus Tours</li>
					</ol>
				</div>
				<div class="page_title_right">
					<div class="page_date_button d-flex align-items-center">
						<img src="img/icon/calender_icon.svg" alt />
						August 1, 2020 - August 31, 2020
					</div>
					<script>
						$('.page_date_button').daterangepicker(
							{
								ranges: {
									Today: [moment(), moment()],
									Yesterday: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
									'Last 7 Days': [moment().subtract(6, 'days'), moment()],
									'Last 30 Days': [moment().subtract(29, 'days'), moment()],
									'This Month': [moment().startOf('month'), moment().endOf('month')],
									'Last Month': [
										moment().subtract(1, 'month').startOf('month'),
										moment().subtract(1, 'month').endOf('month')
									]
								},
								alwaysShowCalendars: true,
								startDate: '06/12/2023',
								endDate: '06/18/2023'
							},
							function (start, end, label) {
								console.log(
									'New date range selected: ' +
										start.format('YYYY-MM-DD') +
										' to ' +
										end.format('YYYY-MM-DD') +
										' (predefined range: ' +
										label +
										')'
								);
							}
						);
					</script>
				</div>
			</div>
		</div>
	</div>
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
							<form method="POST" action="?/search" use:enhance>
							<select name="daysToSearch" on:change={() => form.submit()} class="nice_Select2 max-width-220">
								<option value="7">Last week</option>
								<option value="14">Last two weeks</option>
								<option value="31">Last month</option>
							</select>
							
						</form>
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
						<div
							class="single_crm"
							tabindex="0"
							role="button"
							on:keydown={showTotals}
							on:click={showTotals}
						>
							<div class="crm_head crm_bg_2 d-flex align-items-center justify-content-between">
								<div class="thumb">
									<img src="img/crm/infographic.svg" alt />
								</div>
								<span class="home-card-header" >Total</span>
							</div>
							<div class="crm_body">
								<h4>{ordersByDay.orderTotalString}</h4>
								
							</div>
						</div>
					</div>
					<div class="col-lg-6">
						<div
							class="single_crm"
							tabindex="0"
							role="button"
							on:keydown={showCounts}
							on:click={showCounts}
						>
							<div class="crm_head d-flex align-items-center justify-content-between">
								<div class="thumb">
									<img src="img/crm/businessman.svg" alt />
								</div>
								<span class="home-card-header" >Orders</span>
							</div>
							<div class="crm_body">
								<h4>{ordersByDay.orderCount}</h4>
							
							</div>
						</div>
					</div>

					<div class="col-lg-6">
						<div
							class="single_crm"
							tabindex="0"
							role="button"
							on:keydown={showTicketTotals}
							on:click={showTicketTotals}
						>
							<div class="crm_head crm_bg_10 d-flex align-items-center justify-content-between">
								<div class="thumb">
									<img src="img/crm/infographic.svg" alt />
								</div>
								<span class="home-card-header" >Ticket sales</span>
							</div>
							<div class="crm_body">
								<h4>{ordersByDay.soldTicketTotalString}</h4>
								
							</div>
						</div>
					</div>

					<div class="col-lg-6">
						<div
							class="single_crm"
							tabindex="0"
							role="button"
							on:keydown={showSessionCounts}
							on:click={showSessionCounts}
						>
							<div class="crm_head crm_bg_1 d-flex align-items-center justify-content-between">
								<div class="thumb">
									<img src="img/crm/customer.svg" alt />
								</div>
								<span class="home-card-header" >Sessions</span>
							</div>
							<div class="crm_body">
								<h4>{ordersByDay.sessionCount}</h4>
							
							</div>
						</div>
					</div>

					<div class="col-lg-6">
						<div
							class="single_crm"
							tabindex="0"
							role="button"
							on:keydown={showVoucherTotals}
							on:click={showVoucherTotals}
						>
							<div class="crm_head crm_bg_11 d-flex align-items-center justify-content-between">
								<div class="thumb">
									<img src="img/crm/infographic.svg" alt />
								</div>
								<span class="home-card-header" >Voucher sales</span>
							</div>
							<div class="crm_body">
								<h4>{ordersByDay.soldSupplierVoucherTotalString}</h4>
								
							</div>
						</div>
					</div>
					
					<div class="col-lg-6">
						<div class="single_crm"
						tabindex="0"
						role="button"
						on:keydown={showSoldSupplierVoucherCounts}
						on:click={showSoldSupplierVoucherCounts}>
							<div class="crm_head crm_bg_3 d-flex align-items-center justify-content-between">
								<div class="thumb">
									<i class="bi bi-card-text" style="color:white;"></i>
								</div>
								<span class="home-card-header" >Vouchers</span>
							</div>
							<div class="crm_body">
								<h4>{ordersByDay.soldSupplierVoucherCount}</h4>
							
							</div>
						</div>
					</div>
					<div class="col-lg-6">
						<div class="single_crm"
						tabindex="0"
						role="button"
						on:keydown={showSoldMerchandiseTotals}
						on:click={showSoldMerchandiseTotals}>
							<div class="crm_head crm_bg_5 d-flex align-items-center justify-content-between">
								<div class="thumb">
									<i class="bi bi-cart">
								</div>
								<span class="home-card-header" >Merch sales</span>
							</div>
							<div class="crm_body">
								<h4>{ordersByDay.soldMerchandiseTotalString}</h4>
							
							</div>
						</div>
					</div>
					<div class="col-lg-6">
						<div
							class="single_crm"
							tabindex="0"
							role="button"
							on:keydown={showVoucherRedemptions}
							on:click={showVoucherRedemptions}
						>
							<div class="crm_head crm_bg_4 d-flex align-items-center justify-content-between">
								<div class="thumb">
									<img src="img/crm/infographic.svg" alt />
								</div>
								<span class="home-card-header" >Redemptions</span>
							</div>
							<div class="crm_body">
								<h4>{ordersByDay.voucherRedemptionCount}</h4>
								
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
					{#each orders as order}
					<a href="/orders/{order.id}">
						<div class="single_user_pil d-flex align-items-center justify-content-between">
							<div class="user_pils_thumb">
								<div class="f_s_14 f_w_400 text_color_11">{order.customer.lastName}</div>
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
							{#each sessions as session}
							<a href="/sessions/{session.id}">
								<li>
									<div
										class="activity_bell"
										style="background-color:{session.productBackgroundColor}"
									/>
									<div class="timeLine_inner d-flex align-items-center">
										<div class="activity_wrap">
											<h6><Time relative timestamp={session.startDateTimeUtc} /></h6>
											<p>{session.productName} with <strong>{session.capacityTaken}</strong> guests</p>
										</div>
									</div>
								</li>
							</a>
							{/each}
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
											<img src="img/icon2/3.svg" alt />
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
											<img src="img/icon2/1.svg" alt />
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
											<img src="img/icon2/4.svg" alt />
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
											<img src="img/icon2/2.svg" alt />
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
