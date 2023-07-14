<script>
	import { enhance } from '$app/forms';
	import { scale } from 'svelte/transition';
	
	
</script>



<svelte:head>
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/jquery/latest/jquery.min.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>
    <script src="/js/vanilla-picker.js"></script>
    


    <link rel="stylesheet" href="/css/bootstrap1.min.css" />
    <link rel="stylesheet" href="/css/nice-select.css" />
    <link rel="stylesheet" href="/css/gijgo.min.css" />
    <link rel="stylesheet" href="/css/tagsinput.css" />
    <link rel="stylesheet" href="/css/material-icons.css" />
    <link rel="stylesheet" href="/css/style1.css" />
    <link rel="stylesheet" href="/css/dm.css" />
    <link rel="stylesheet" href="/css/default.css" id="colorSkinCSS">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />
	
</svelte:head>



<nav class="sidebar dark_sidebar">
	<div class="logo d-flex justify-content-between">
		<a class="large_logo" href="/"><img src="/img/logo_white.png" alt /></a>
		<a class="small_logo" href="/"><img src="/img/mini_logo.png" alt /></a>
		<div class="sidebar_close_icon d-lg-none">
			<i class="ti-close" />
		</div>
	</div>

<div id="sidebar_menu">
   <a href="/"><i class="bi bi-house-door" /> Home</a>
   <a href="/orders"><i class="bi bi-star" /> Orders</a>
   <a href="/calendar"><i class="bi bi-calendar3" /> Calendar</a>
   <a href="/reports"><i class="bi bi-graph-up" /> Reports</a><i class="bi bi-basket3" /> On sale<ul>
                <li><a href="/products">Products</a></li>
                <li><a href="/tickets">Tickets</a></li>
                <li><a href="/vouchers">Vouchers</a></li>
                <li><a href="/merchandise">Merchandise</a></li>
            </ul><i class="bi bi-gear" /> Config<ul>
                <li><a href="/categories">Categories</a></li>
                <li><a href="/discountcodes">Discount codes</a></li>
            </ul><i class="bi bi-globe" /><a href="/admin"> Power users</a>
</div>

<style>
    #sidebar_menu i {
        margin-right:15px;
        margin-left:15px;
    }

    .y-accordion-body-inner {
        padding-top:0;
        padding-left:39px;
        padding-bottom:0;
        padding-right:0;
    }

    .accordion-header-button {padding-top:10px;padding-bottom:10px;}

    #sidebar_menu .accordion-header-button, #sidebar_menu a {
        color:#ffffff !important;
    }
</style>



</nav>

<section class="main_content dashboard_part large_header_bg">
	<div class="container-fluid g-0">
		<div class="row">
			<div class="col-lg-12 p-0">
				<div class="header_iner d-flex justify-content-between align-items-center">
					<div class="sidebar_icon d-lg-none">
						<i class="ti-menu" />
					</div>
					<div class="line_icon open_miniSide d-none d-lg-block">
						<i
							class="bi bi-list ti-menu"
							style="font-size: 2rem !important;
                        color: #193E44;"
						/>
					</div>
					<div class="serach_field-area d-flex align-items-center">
						<div class="search_inner">
							<form method="POST" action="/orders?/search" use:enhance>
								<div class="search_field">
									<input name="searchString" type="text" placeholder="Search" />
								</div>
								<button type="submit"> <img src="/img/icon/icon_search.svg" alt /> </button>
							</form>
						</div>
					</div>
					<div class="header_right d-flex justify-content-between align-items-center">
						<div class="profile_info">
							<img src="/img/client_img.png" alt="#" />
							<div class="profile_info_iner">
								<div class="profile_author_name">
									<p>Neurologist</p>
									<h5>Dr. Robar Smith</h5>
								</div>
								<div class="profile_info_details">
									<a href="test">My Profile </a>
									<a href="test">Settings</a>
									<a href="test">Log Out </a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="main_content_iner overly_inner">
		<div style="display: contents">
			<slot />
		</div>
	</div>
</section>

<div id="back-top" style="display: none;">
	<a title="Go to Top" href="/">
		<i class="bi-chevron-up" />
	</a>
</div>
