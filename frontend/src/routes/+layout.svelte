<script>
	import { enhance } from '$app/forms';
    </script>

<nav class="sidebar dark_sidebar">
    <div class="logo d-flex justify-content-between">
        <a class="large_logo" href="/"><img src="/img/logo_white.png" alt></a>
        <a class="small_logo" href="/"><img src="/img/mini_logo.png" alt></a>
        <div class="sidebar_close_icon d-lg-none">
            <i class="ti-close"></i>
        </div>
    </div>
    <ul id="sidebar_menu">
      <li>
        <a href="/" aria-expanded="false">
            <div class="nav_icon_small">
                <i class="bi bi-house-door"></i>
            </div>
            <div class="nav_title">
                <span>Home</span>
            </div>


        </a>
    </li>
        <li>
            <a href="/orders" aria-expanded="false">
                <div class="nav_icon_small">
                    <i class="bi bi-star"></i>
                </div>
                <div class="nav_title">
                    <span>Orders</span>
                </div>
            </a>
        </li>
        <li>
            <a href="/calendar" aria-expanded="false">
                <div class="nav_icon_small">
                    <i class="bi bi-calendar3"></i>
                </div>
                <div class="nav_title">
                    <span>Calendar</span>
                </div>
            </a>
        </li>
        <li>
            <a href="/reports" aria-expanded="false">
                <div class="nav_icon_small">
                    <i class="bi bi-graph-up"></i>
                </div>
                <div class="nav_title">
                    <span>Reports</span>
                </div>
            </a>
            <ul style="display:none;">
              <li><a href="login.html">Bookings</a></li>
              <li><a href="resister.html">Attendees</a></li>
              <li><a href="error_400.html">Customers</a></li>
              <li><a href="error_500.html">Voucher sales</a></li>
              <li><a href="forgot_pass.html">Revenue</a></li>
          </ul>
        </li>
        <li>
            
            <a href="#" aria-expanded="false">
                <div class="nav_icon_small">
                    <i class="bi bi-basket3"></i>
                </div>
                <div class="nav_title" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              
                        Selling
                   
                </div>
            </a>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      
            <ul>
              <li><a href="/products">Products</a></li>
              <li><a href="/tickets">Tickets</a></li>
              <li><a href="/vouchers">Vouchers</a></li>
              <li><a href="/merchandise">Merchandise</a></li>
          </ul>
          </div>
        </li>
        <li>
            
            <a href="#" aria-expanded="false">
                <div class="nav_icon_small">
                    <i class="bi bi-gear"></i>
                </div>
                <div class="nav_title" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              
                        Config
                   
                </div>
            </a>
            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      
            <ul>
              <li><a href="/categories">Categories</a></li>
              <li><a href="/discountcodes">Discount codes</a></li>
          </ul>
          </div>
        </li>
        <li class="mt-5">
            <a href="/admin" aria-expanded="false">
                <div class="nav_icon_small">
                    <i class="bi bi-globe"></i>
                </div>
                <div class="nav_title">
                    <span>Power users</span>
                </div>
            </a>
        </li>
    </ul>


</nav>

<section class="main_content dashboard_part large_header_bg">

    <div class="container-fluid g-0">
        <div class="row">
            <div class="col-lg-12 p-0 ">
                <div class="header_iner d-flex justify-content-between align-items-center">
                    <div class="sidebar_icon d-lg-none">
                        <i class="ti-menu"></i>
                    </div>
                    <div class="line_icon open_miniSide d-none d-lg-block">
                        <i class="bi bi-list ti-menu" style="font-size: 2rem !important;
                        color: #193E44;"/>
                    </div>
                    <div class="serach_field-area d-flex align-items-center">
                        <div class="search_inner">
                            <form method="POST" action="/orders?/search" use:enhance>
                                <div class="search_field">
                                    <input name="searchString" type="text" placeholder="Search">
                                </div>
                                <button type="submit"> <img src="/img/icon/icon_search.svg" alt> </button>
                            </form>
                        </div>
                    </div>
                    <div class="header_right d-flex justify-content-between align-items-center">
                 
                        <div class="profile_info">
                            <img src="/img/client_img.png" alt="#">
                            <div class="profile_info_iner">
                                <div class="profile_author_name">
                                    <p>Neurologist </p>
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

    <div class="main_content_iner overly_inner ">
      <div style="display: contents">
        <slot />
      </div>
    </div>

   
</section>


<div id="back-top" style="display: none;">
    <a title="Go to Top" href="#">
        <i class="bi-chevron-up"></i>
    </a>
</div>


