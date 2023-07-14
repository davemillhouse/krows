<script>
	import DiscountCodeValidityForm from '../discountCodeValidityForm.svelte';
	import DiscountCodeForm from '../discountCodeForm.svelte';
	import { Popover, PopoverButton, PopoverPanel } from '@rgossiaux/svelte-headlessui';

	
  import { DateInput } from 'date-picker-svelte'
  let date = new Date()



	export let data;
	const { unlinkedProducts } = data;
	const { linkedProducts } = data;

	let { discountCode } = data;

	let addButtonText = 'Add a discount code';
	let view = '';
	let formHeader = '';

	changeView('details');

	function changeView(newView) {
		view = newView;

		if (view == "details"){
			formHeader = "Discount code details"
			return;
		}

		if (view == "validity"){
			formHeader = "Validity"
			return;
		}
	}


	import { onMount } from 'svelte';
	onMount(() => {
	
	});


</script>


<svelte:head>
	<title>Krowz - {discountCode.name}</title>
</svelte:head>


<DateInput bind:value={date} closeOnSelection="true" />

<input id="air" class="air" name="air">
<div class="container-fluid p-0 sm_padding_15px">
	<div class="row">
		<div class="col-12">
			<div class="page_title_box d-flex align-items-center justify-content-between">
				<div class="page_title_left">
					<h3 class="f_s_30 f_w_700 dark_text">{discountCode.name}</h3>
					<ol class="breadcrumb page_bradcam mb-0">
						<li class="breadcrumb-item" on:keypress={() => changeView("details")}  on:click={() => changeView("details")}>Details</li>
				
						<li class="breadcrumb-item" on:keypress={() => changeView("validity")}  on:click={() => changeView("validity")}>Validity</li>
					</ol>
				</div>
				<button class="btn_2">{addButtonText}</button>
			</div>
		</div>
		
		<div class="container-fluid p-0">
			<div class="row">
				<div class="col-xl-4">
					<div class="white_card card_height_100 mb_30">
						<div class="white_card_header">
							<div class="box_header m-0">
								<div class="main-title">
									<h3 class="m-0">{formHeader}</h3>
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
						{#if (view == "details")}
						
						<div class="white_card_body">
							<div class="common_form">
								<DiscountCodeForm {discountCode} method="update" />
							</div>
						</div>
						{/if}
						{#if (view == "validity")}
						
						<div class="white_card_body">
							<div class="common_form">
								<DiscountCodeValidityForm {discountCode} method="update" />
							</div>
						</div>
						{/if}
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
									<div class="plan_left d-flex align-items-center" />
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
													<h5 />
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
													<h5 />
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
													<h5 />
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
													<h5 />
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
													<h5 />
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
										<h3 class="m-0">Products</h3>
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
								{#each linkedProducts as product}
									<div class="col-lg-4">
										<a href="/products/{product.id}">
											<div
												class="activity-pil d-flex align-items-center justify-content-between"
											>
												<div class="user_pils_thumb d-flex align-items-center">
													<span class="f_s_14 f_w_400 text_color_11">{product.name}</span>
												</div>
											</div>
										</a>
									</div>
								{/each}

								{#each unlinkedProducts as product}
									<div class="col-lg-4">
										<a href="/products/{product.id}">
											<div
												class="unlinkedactivity-pil d-flex align-items-center justify-content-between"
											>
												<div class="user_pils_thumb d-flex align-items-center">
													<span class="f_s_14 f_w_400 text_color_11">{product.name}</span>
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
	</div>
</div>
