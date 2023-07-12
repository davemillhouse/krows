<script>
	import { Popover, PopoverButton, PopoverPanel } from '@rgossiaux/svelte-headlessui';
	import { enhance } from '$app/forms';
	import { Circle3 } from 'svelte-loading-spinners';

	let working = false;

	export let data;
	const { session } = data;

	var options = {
		chart: {
			height: 280,
			type: 'radialBar',
			events: {
				click: function (event, chartContext, config) {
					alert('todo: take off sale');
				}
			}
		},
		series: [session.capacityTakenPercentage],
		colors: ['#20E647'],
		plotOptions: {
			radialBar: {
				hollow: {
					margin: 0,
					size: '70%',
					background: 'green'
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
		labels: ['On Sale']
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
							<Popover class="relative">
								<PopoverButton class="popoverButton bi bi-gear" />
								<PopoverPanel
									class="dropdown-item-container"
									style="position: absolute; z-index: 10;"
								>
									<a class="dropdown-item"> <i class="bi bi-cog" /> Archive</a>
								</PopoverPanel>
							</Popover>
						</div>
					</div>
				</div>
				<div class="white_card_body">
					<div class="common_form">
						<form
							method="POST"
							action="/sessions?/update"
							use:enhance={() => {
								working = true;

								return async ({ update }) => {
									await update({ reset: false });
									working = false;
								};
							}}
						>
							<input hidden type="text" name="id" bind:value={session.id} />
							<div class="row">
								<div class="col-lg-6">
									<div class="common_input mb_15">
										Start
										<input bind:value={session.startDateTimeUtc} type="date" placeholder="" />
									</div>
								</div>
								<div class="col-lg-6">
									<div class="common_input mb_15">
										Time
										<input type="time" placeholder="" />
									</div>
								</div>
								<div class="col-lg-6">
									<div class="common_input mb_15">
										End
										<input bind:value={session.endDateTimeUtc} type="date" placeholder="" />
									</div>
								</div>
								<div class="col-lg-6">
									<div class="common_input mb_15">
										Time
										<input type="time" placeholder="" />
									</div>
								</div>
								<div class="col-lg-6">
									<div class="common_input mb_15">
										Capacity
										<input name="capacity" type="number" bind:value={session.capacity} />
									</div>
								</div>
								<div class="col-12">
									<div class="create_report_btn mt_30">
										{#if working}
											<div style="display:flex;" class="justify-content-center">
												<Circle3 size="35" />
											</div>
										{:else}
											<button class="btn-primary" type="submit"> Update </button>
										{/if}
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
						<Popover class="relative">
							<PopoverButton class="popoverButton bi bi-gear" />
							<PopoverPanel
								class="dropdown-item-container"
								style="position: absolute; z-index: 10;"
							>
								<a class="dropdown-item"> <i class="bi bi-cog" /> Take off sale</a>
							</PopoverPanel>
						</Popover>
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
									<img src="/img/icon2/6.svg" alt="" />
								</div>
								<div>
									<h5>
										{session.capacityTakenExcludingOngoingBookings} of {session.capacity} places booked
									</h5>
									<span>{session.capacityRemaining} places remaining</span>
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
						<Popover class="relative">
							<PopoverButton class="popoverButton bi bi-gear" />
							<PopoverPanel
								class="dropdown-item-container"
								style="position: absolute; z-index: 10;"
							>
								<a class="dropdown-item"> <i class="bi bi-cog" /> Report on this</a>
							</PopoverPanel>
						</Popover>
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
											<h5>{session.totalSalesAmountString}</h5>
											<span>Total sales</span>
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
											<h5>{session.completeBookingCount}</h5>
											<span>Bookings</span>
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
											<h5>{session.ticketSalesAmountString}</h5>
											<span>Ticket sales</span>
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
											<h5>{session.soldTicketCount}</h5>
											<span>Tickets sold</span>
										</div>
									</div>
								</div>
							</div>
							{#if session.soldMerchandiseCount > 0}
								<div class="col-lg-6">
									<div class="single_plan d-flex align-items-center justify-content-between">
										<div class="plan_left d-flex align-items-center">
											<div class="thumb">
												<img src="/img/icon2/4.svg" alt="" />
											</div>
											<div>
												<h5>{session.merchandiseSalesAmountString}</h5>
												<span>Merch sales</span>
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
												<h5>{session.soldMerchandiseCount}</h5>
												<span>Merch sold</span>
											</div>
										</div>
									</div>
								</div>
							{/if}
							{#if session.soldDiscountCodeCount > 0}
								<div class="col-lg-6">
									<div class="single_plan d-flex align-items-center justify-content-between">
										<div class="plan_left d-flex align-items-center">
											<div class="thumb">
												<img src="/img/icon2/3.svg" alt="" />
											</div>
											<div>
												<h5>{session.discountCodeSalesAmountString}</h5>
												<span>Discounts applied</span>
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
												<h5>{session.soldDiscountCodeCount}</h5>
												<span>Discount codes</span>
											</div>
										</div>
									</div>
								</div>
							{/if}
							<div class="col-lg-6">
								<div class="single_plan d-flex align-items-center justify-content-between">
									<div class="plan_left d-flex align-items-center">
										<div class="thumb">
											<img src="/img/icon2/4.svg" alt="" />
										</div>
										<div>
											<h5>{session.totalSalesAmountAverageString}</h5>
											<span>Average price</span>
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
											<h5>todo</h5>
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
								<a href="/orders/{booking.orderId}">
									<div class="single_user_pil d-flex align-items-center justify-content-between">
										<div class="user_pils_thumb d-flex align-items-center">
											<span class="f_s_14 f_w_400 text_color_11">{booking.customerName}</span>
										</div>
										<div class="user_info">{booking.customerOrderId}</div>
									</div>
								</a>
							</div>
						{:else}
							<div class="col-lg-4">No bookings for this session yet.</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
