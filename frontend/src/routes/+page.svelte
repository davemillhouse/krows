<script>
	import { Circle3 } from 'svelte-loading-spinners';
	import Time from 'svelte-time';
	import { enhance } from '$app/forms';

	export let data;
	const { sessions } = data;
	const { orders } = data;
	let { ordersByDay } = data;

	let working = false;
	let form;

	let salesChartOptions = {
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
				data: ordersByDay.paymentAmountTotals
			}
		],
		xaxis: {
			labels: {
				rotate: 0,
				hideOverlappingLabels: true
			},
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
			width: 4
		}
	};

	let ordersChartOptions = {
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
				data: ordersByDay.orderCounts
			}
		],
		xaxis: {
			labels: {
				rotate: 0,
				hideOverlappingLabels: true
			},
			categories: ordersByDay.orderDates
		},
		yaxis: {
			labels: {
				formatter: function (value) {
					return value;
				}
			}
		},
		stroke: {
			show: true,
			curve: 'smooth',
			colors: ['#ffbe6a'],
			width: 4
		}
	};

	let participantsChartOptions = {
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
				data: ordersByDay.soldTicketCounts
			}
		],
		xaxis: {
			labels: {
				rotate: 0,
				hideOverlappingLabels: true
			},
			categories: ordersByDay.orderDates
		},
		yaxis: {
			labels: {
				formatter: function (value) {
					return value;
				}
			}
		},
		stroke: {
			show: true,
			curve: 'smooth',
			colors: ['#19874d75'],
			width: 4
		}
	};

	let vouchersChartOptions = {
		chart: {
			type: 'line',
			height: '100%',
			toolbar: {
				show: false
			}
		},
		series: [
			{
				data: ordersByDay.soldSupplierVoucherCounts
			}
		],
		xaxis: {
			labels: {
				rotate: 0,
				hideOverlappingLabels: true
			},
			categories: ordersByDay.orderDates
		},
		yaxis: {
			labels: {
				formatter: function (value) {
					return value;
				}
			}
		},
		stroke: {
			show: true,
			curve: 'smooth',
			colors: ['#20deff'],
			width: 4
		}
	};

	let salesChart;
	let ordersChart;
	let participantsChart;
	let vouchersChart;

	import { onMount } from 'svelte';
	onMount(() => {
		salesChart = new ApexCharts(
			document.querySelector('[data-chart="salesChart"]'),
			salesChartOptions
		);
		salesChart.render();

		ordersChart = new ApexCharts(
			document.querySelector('[data-chart="ordersChart"]'),
			ordersChartOptions
		);
		ordersChart.render();

		participantsChart = new ApexCharts(
			document.querySelector('[data-chart="participantsChart"]'),
			participantsChartOptions
		);
		participantsChart.render();

		vouchersChart = new ApexCharts(
			document.querySelector('[data-chart="vouchersChart"]'),
			vouchersChartOptions
		);
		vouchersChart.render();
	});
</script>

<svelte:head>
	<title>Krowz - Home</title>
</svelte:head>

<div class="container-fluid p-0">
	<div class="row">
		<div class="col-12">
			<div class="page_title_box d-flex flex-wrap align-items-center justify-content-between">
				<div class="page_title_left d-flex align-items-center">
					<h3 class="f_s_25 f_w_700 dark_text mr_30">Your dashboard</h3>
					<ol class="breadcrumb page_bradcam mb-0">
						<li class="breadcrumb-item">Big Bus Tours</li>
					</ol>
				</div>
				<div class="page_title_right">
					<form
						bind:this={form}
						method="POST"
						action="?/search"
						use:enhance={() => {
							working = true;

							return async ({ result, update }) => {
								ordersByDay = result.data;

								ordersChartOptions = {
									series: [
										{
											data: ordersByDay.orderCounts
										}
									],
									xaxis: {
										tickAmount: 5,
										categories: ordersByDay.orderDates
									}
								};

								participantsChartOptions = {
									series: [
										{
											data: ordersByDay.soldTicketCounts
										}
									],
									xaxis: {
										tickAmount: 5,
										categories: ordersByDay.orderDates
									}
								};

								vouchersChartOptions = {
									series: [
										{
											data: ordersByDay.soldSupplierVoucherCounts
										}
									],
									xaxis: {
										tickAmount: 5,
										categories: ordersByDay.orderDates
									}
								};

								vouchersChartOptions = {
									series: [
										{
											data: ordersByDay.soldSupplierVoucherCounts
										}
									],
									xaxis: {
										tickAmount: 5,
										categories: ordersByDay.orderDates
									}
								};

								salesChartOptions = {
									series: [
										{
											data: ordersByDay.paymentAmountTotals
										}
									],
									xaxis: {
										tickAmount: 5,
										categories: ordersByDay.orderDates
									}
								};

								vouchersChart.updateOptions(vouchersChartOptions);
								participantsChart.updateOptions(participantsChartOptions);
								salesChart.updateOptions(salesChartOptions);
								ordersChart.updateOptions(ordersChartOptions);

								await update({ reset: false });
								working = false;
							};
						}}
					>
						<select name="daysToSearch" on:change={() => form.requestSubmit()} class="form-control">
							<option value="1">Today</option>
							<option value="7" selected>Last week</option>
							<option value="14">Last fortnight</option>
							<option value="30">Last 30 days</option>
						</select>
					</form>
				</div>
			</div>
		</div>
	</div>

	<div class="row">
		<div class="col-xl-8">
			<div class="row">
				<div class="col-xl-6">
					<div class="white_card mb_30 user_crm_wrapper">
						<div class="single_crm">
							<div class="crm_head crm_bg_11 d-flex align-items-center justify-content-between">
								<div class="thumb">
									<img src="img/crm/infographic.svg" alt />
								</div>
								<span class="home-card-header">{ordersByDay.orderCount} orders</span>
							</div>
							<div class="white_card_body_graph mb_20" style="height:250px;">
								<div data-chart="ordersChart" />
							</div>
						</div>
					</div>
				</div>
				<div class="col-xl-6">
					<div class="white_card mb_30 user_crm_wrapper">
						<div class="single_crm">
							<div class="crm_head crm_bg_2 d-flex align-items-center justify-content-between">
								<div class="thumb">
									<img src="img/crm/infographic.svg" alt />
								</div>
								<span class="home-card-header">{ordersByDay.paymentAmountTotalString} taken</span>
							</div>
							<div class="white_card_body_graph mb_20" style="height:250px;">
								<div data-chart="salesChart" />
							</div>
						</div>
					</div>
				</div>
				<div class="col-xl-6">
					<div class="white_card mb_30 user_crm_wrapper">
						<div class="single_crm">
							<div class="crm_head crm_bg_3 d-flex align-items-center justify-content-between">
								<div class="thumb">
									<img src="img/crm/infographic.svg" alt />
								</div>
								<span class="home-card-header">{ordersByDay.soldTicketCount} tickets sold</span>
							</div>
							<div class="white_card_body_graph mb_20" style="height:250px;">
								<div data-chart="participantsChart" />
							</div>
						</div>
					</div>
				</div>
				<div class="col-xl-6">
					<div class="white_card mb_30 user_crm_wrapper">
						<div class="single_crm">
							<div class="crm_head crm_bg_1 d-flex align-items-center justify-content-between">
								<div class="thumb">
									<img src="img/crm/infographic.svg" alt />
								</div>
								<span class="home-card-header"
									>{ordersByDay.soldSupplierVoucherCount} vouchers sold</span
								>
							</div>
							<div class="white_card_body_graph mb_20" style="height:250px;">
								<div data-chart="vouchersChart" />
							</div>
						</div>
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
												<p>
													{session.productName} with <strong>{session.capacityTaken}</strong> guests
												</p>
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
	</div>
	<div class="row">
		<div class="col-xl-12">
			<div class="white_card card_height_100 mb_30">
				<div class="white_card_header">
					<div class="row align-items-center">
						<div class="col-lg-4">
							<div class="main-title">
								<h3 class="m-0">Recent orders</h3>
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
					<div class="row">
						{#each orders as order}
							<div class="col-lg-4">
								<a href="/orders/{order.id}">
									<div class="single_user_pil d-flex align-items-center justify-content-between">
										<div class="user_pils_thumb">
											<div class="f_s_14 f_w_400 text_color_11">{order.customer.lastName}</div>
											<div class="user_info">{order.customerOrderId}</div>
										</div>
										<div class="user_info">{order.salesAmountString}</div>
										<div class="user_info">
											<Time relative timestamp={order.completedDateTimeUtc} />
										</div>
									</div>
								</a>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
