


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
                <img src="/img/menu-icon/dashboard.svg" alt>
            </div>
            <div class="nav_title">
                <span>Home</span>
            </div>


        </a>
    </li>
        <li>
            <a href="/bookings" aria-expanded="false">
                <div class="nav_icon_small">
                    <img src="/img/menu-icon/12.svg" alt>
                </div>
                <div class="nav_title">
                    <span>Bookings</span>
                </div>
            </a>
        </li>
        <li>
            <a href="/calendar" aria-expanded="false">
                <div class="nav_icon_small">
                    <img src="/img/menu-icon/15.svg" alt>
                </div>
                <div class="nav_title">
                    <span>Calendar</span>
                </div>
            </a>
        </li>
        <li>
            <a href="#" aria-expanded="false">
                <div class="nav_icon_small">
                    <img src="/img/menu-icon/21.svg" alt>
                </div>
                <div class="nav_title">
                    <span>Reports</span>
                </div>
            </a>
            <ul>
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
                    <img src="/img/menu-icon/18.svg" alt>
                </div>
                <div class="nav_title">
                    <span>Setup</span>
                </div>
            </a>
            <ul>
                <li><a href="/categories">Categories</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/suppliers">Suppliers</a></li>
              <li><a href="/schedules">Schedules</a></li>
          </ul>
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
                        <img src="/img/line_img.png" alt>
                    </div>
                    <div class="serach_field-area d-flex align-items-center">
                        <div class="search_inner">
                            <form action="#">
                                <div class="search_field">
                                    <input type="text" placeholder="Search">
                                </div>
                                <button type="submit"> <img src="/img/icon/icon_search.svg" alt> </button>
                            </form>
                        </div>
                    </div>
                    <div class="header_right d-flex justify-content-between align-items-center">
                        <div class="header_notification_warp d-flex align-items-center">
                            <li>
                                <a class="bell_notification_clicker" href="#">
                                    <img src="/img/icon/bell.svg" alt>
                                    <span>2</span>
                                </a>

                                <div class="Menu_NOtification_Wrap">
                                    <div class="notification_Header">
                                        <h4>Notifications</h4>
                                    </div>
                                    <div class="Notification_body">

                                        <div class="single_notify d-flex align-items-center">
                                            <div class="notify_thumb">
                                              
                                            </div>
                                            <div class="notify_content">
                                                <a href="#"><h5>New features </h5></a>
                                                <p>Check out our recent release</p>
                                            </div>
                                        </div>

                                        <div class="single_notify d-flex align-items-center">
                                            <div class="notify_thumb">
                                                
                                            </div>
                                            <div class="notify_content">
                                                <a href="#"><h5>Awesome packages</h5></a>
                                                <p>Lorem ipsum dolor sit amet</p>
                                            </div>
                                        </div>

                                        <div class="single_notify d-flex align-items-center">
                                            <div class="notify_thumb">
                                               
                                            </div>
                                            <div class="notify_content">
                                                <a href="#"><h5>How do I create a schedule?</h5></a>
                                                <p>Get help now</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="nofity_footer">
                                        <div class="submit_button text-center pt_20">
                                            <a href="#" class="btn_1">See More</a>
                                        </div>
                                    </div>
                                </div>

                            </li>
                          
                        </div>
                        <div class="profile_info">
                            <img src="/img/client_img.png" alt="#">
                            <div class="profile_info_iner">
                                <div class="profile_author_name">
                                    <p>Neurologist </p>
                                    <h5>Dr. Robar Smith</h5>
                                </div>
                                <div class="profile_info_details">
                                    <a href="#">My Profile </a>
                                    <a href="#">Settings</a>
                                    <a href="#">Log Out </a>
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

    <div class="footer_part">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="footer_iner text-center">
                        <p>2023 © krowz - <a href="/terms"> Terms </a> - <a href="/contact"> Contact</a> - <a href="/about"> About</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


<div id="back-top" style="display: none;">
    <a title="Go to Top" href="#">
        <i class="bi-chevron-up"></i>
    </a>
</div>


