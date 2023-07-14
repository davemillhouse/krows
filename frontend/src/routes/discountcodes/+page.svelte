<script>
	import { enhance } from '$app/forms';
	import DiscountCodeForm from "./discountCodeForm.svelte";

	export let data;
	const { discountCode } = data;
	const { discountCodes } = data;
	const { dataByDay } = data;
	const { topSellers } = data;

	let view = 'list';

	const topSellersData = topSellers
		.map((item) => {
			return {
				x: item.name,
				y: item.soldCount
			};
		})
		.sort((a, b) => b.y - a.y);

	const salesBydiscountCodeData = topSellers
		.map((item) => {
			return {
				x: item.name,
				y: item.soldAmount
			};
		})
		.sort((b,a) => b.y - a.y);

	let addButtonText = 'Add a discountCode';

	function showAdddiscountCode() {
		if (view == 'list') {
			view = 'add';
			addButtonText = 'View discount codes';
		} else {
			view = 'list';
			addButtonText = 'Add a discount code';
		}
	}

	let salesByDiscountCodeChartOptions = {
		grid: {
			show: false
		},
		dataLabels: {
			enabled: true,
			formatter: function (val) {
				return '£' + val.toLocaleString();
			}
		},
		tooltip: {
			y: {
				formatter: function (val) {
					return '£' + val.toLocaleString();
				}
			}
		},
		colors: ['#ffbe6a'],
		chart: {
			height: '100%',
			type: 'bar',
			toolbar: {
				show: false
			}
		},
		plotOptions: {
			bar: {
				horizontal: true
			}
		},
		series: [
			{
				name: 'Amount',
				data: salesBydiscountCodeData
			}
		],
		xaxis: {
			labels: {
				show: false
			}
		}
	};

	let topSellersChartOptions = {
		grid: {
			show: false
		},
		colors: ['#20deff'],
		chart: {
			height: '100%',
			type: 'bar',
			toolbar: {
				show: false
			}
		},
		plotOptions: {
			bar: {
				horizontal: true
			}
		},
		series: [
			{
				name: 'Sold',
				data: topSellersData
			}
		],
		xaxis: {
			labels: {
				show: false
			}
		}
	};

	let soldDiscountCodeTotalsOptions = {
		chart: {
			type: 'line',
			height: '100%',
			toolbar: {
				show: false
			}
		},
		series: [
			{
				name: 'Amount',
				data: dataByDay.soldDiscountCodeTotals
			}
		],
		xaxis: {
			categories: dataByDay.orderDates
		},
		yaxis: {
			labels: {
				formatter: function (value) {
					return '£' + value;
				}
			}
		},
		tooltip: {
			enabled: true,
			formatter: function (val) {
				return '£' + val.toLocaleString();
			}
		},
		stroke: {
			show: true,
			curve: 'smooth',
			colors: ['#c388f6'],
			width: 4
		}
	};

	let soldDiscountCodeTotalsChart;
	let topSellersChart;
	let salesByDiscountCodeChart;

	import { onMount } from 'svelte';
	onMount(() => {
		soldDiscountCodeTotalsChart = new ApexCharts(
			document.querySelector('[data-chart="soldDiscountCodeTotalsChart"]'),
			soldDiscountCodeTotalsOptions
		);
		soldDiscountCodeTotalsChart.render();

		topSellersChart = new ApexCharts(
			document.querySelector('[data-chart="topSellersChart"]'),
			topSellersChartOptions
		);
		topSellersChart.render();

		salesByDiscountCodeChart = new ApexCharts(
			document.querySelector('[data-chart="salesByDiscountCodeChart"]'),
			salesByDiscountCodeChartOptions
		);
		salesByDiscountCodeChart.render();
	});
</script>

<svelte:head>
	<title>Krowz - Discount Codes</title>
</svelte:head>

<div class="container-fluid p-0 sm_padding_15px">
	<div class="row">
		<div class="col-12">
			<div class="page_title_box d-flex align-items-center justify-content-between">
				<div class="page_title_left">
					<h3 class="f_s_30 f_w_700 dark_text">Your discountCodes</h3>
					<ol class="breadcrumb page_bradcam mb-0">
						<ol class="breadcrumb page_bradcam mb-0">
							<li class="breadcrumb-item">Reports</li>
							<li class="breadcrumb-item">Help</li>
						</ol>
					</ol>
				</div>
				<button class="btn_2" on:click={showAdddiscountCode}>{addButtonText}</button>
			</div>
		</div>

		<div class="row justify-content-center">
			<div class="col-lg-8">
				<div class="row">

					{#if view=="add"}
					<DiscountCodeForm method="create" {discountCode}></DiscountCodeForm>
					{:else}
					
					
					{#each discountCodes as discountCode}

						<div class="col-lg-12">
							<a href="/discountcodes/{discountCode.id}">
								<div class="white_card card_height_100 mb_30 justify-content-between">
									<div class="white_card_body pt_30">
										<div class="d-flex justify-content-between">
											<div class="h-100 mr_10">
												<div
													class="activity-bell-t3"
													style="background-color: {discountCode.backgroundColor}"
												/>
											</div>
											<div class="timeLine_inner d-flex align-items-center w-100">
												<div class="activity_wrap">
													<h6>{discountCode.name}</h6>
													<p>{discountCode.description}</p>
												</div>
											</div>
											<div class="timeLine_inner d-flex align-items-center">
												<div class="activity_wrap">
													<h6>{discountCode.code}</h6>
												</div>
											</div>
										</div>
									</div>
								</div>
							</a>
						</div>{/each}
				
					
					
					
					{/if}
					</div>
			</div>
			<div class="col-lg-4">
				<div class="white_card mb_30 user_crm_wrapper">
					<div class="single_crm">
						<div class="crm_head crm_bg_11 d-flex align-items-center justify-content-between">
							<div class="thumb">
								<img src="img/crm/infographic.svg" alt />
							</div>
							<span class="home-card-header">amount discounted</span>
						</div>
						<div class="white_card_body_graph mb_20" style="height:250px;">
							<div data-chart="salesByDiscountCodeChart" />
						</div>
					</div>
				</div>
				<div class="white_card mb_30 user_crm_wrapper">
					<div class="single_crm">
						<div class="crm_head crm_bg_2 d-flex align-items-center justify-content-between">
							<div class="thumb">
								<img src="img/crm/infographic.svg" alt />
							</div>
							<span class="home-card-header"
								>{dataByDay.soldDiscountCodeTotalString} discount code sales</span
							>
						</div>
						<div class="white_card_body_graph mb_20" style="height:250px;">
							<div data-chart="soldDiscountCodeTotalsChart" />
						</div>
					</div>
				</div>
				<div class="white_card mb_30 user_crm_wrapper">
					<div class="single_crm">
						<div class="crm_head crm_bg_1 d-flex align-items-center justify-content-between">
							<div class="thumb">
								<img src="img/crm/infographic.svg" alt />
							</div>
							<span class="home-card-header">most used</span>
						</div>
						<div class="white_card_body_graph mb_20" style="height:250px;">
							<div data-chart="topSellersChart" />
						</div>
					</div>
				</div>
			</div>
		</div>

		{#if view == 'add'}
			<div class="col-lg-6">
				<div class="white_card card_height_100 mb_30">
					<div class="white_card_header">
						<div class="box_header m-0">
							<div class="main-title">
								<h3 class="m-0">Create a discountCode for sale</h3>
							</div>
						</div>
					</div>
					<div class="white_card_body">
						<h6 class="card-subtitle mb-2">Insert the details below</h6>
						<form method="POST" action="?/create" use:enhance>
							<div class="mb-3">
								<label class="form-label" for="exampleInputPassword1">Name</label>
								<input name="name" autocomplete="off" class="form-control" placeholder="Name" />
							</div>
							<div class="mb-3">
								<label class="form-label" for="exampleInputEmail1">Description</label>
								<input
									class="form-control"
									name="description"
									aria-describedby="emailHelp"
									placeholder="Description"
								/>
								<small id="emailHelp" class="form-text text-muted">Not too long!</small>
							</div>

							<div class="mb-3 form-check">
								<input type="checkbox" class="form-check-input" id="exampleCheck1" />
								<label class="form-label form-check-label" for="exampleCheck1">Check me out</label>
							</div>
							<button type="submit" class="btn btn-primary">Submit</button>
						</form>
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>
