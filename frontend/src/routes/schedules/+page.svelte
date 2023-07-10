<svelte:head>
    <title>Krowz - Schedules</title> 
</svelte:head>

<div class="container-fluid p-0">
	<div class="row justify-content-center">
		<div class="col-12">
			<div class="dashboard_header mb_50">
				<div class="row">
					<div class="col-lg-6">
						<div class="dashboard_header_title">
							<h3>Add a schedule</h3>
						</div>
					</div>
					<div class="col-lg-6">
						<div class="dashboard_breadcam text-end">
							<p><a href="index.html">Back to schedules</a> </p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-lg-6">
			<div class="white_box mb_30">
				<div class="box_header">
					<div class="main-title">
						<h3 class="mb-0">Schedule details</h3>
					</div>
				</div>

				<div class="accordion accordion_custom mb_50" id="accordion_ex">
					<div class="card">
						<div class="card-header" id="headingOne">
							<h2 class="mb-0">
								<a
									href="#"
									class="btn"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseOne"
									aria-expanded="true"
									aria-controls="collapseOne"
								>
									Product
								</a>
							</h2>
						</div>
						<div
							id="collapseOne"
							class="collapse show"
							aria-labelledby="headingOne"
							data-parent="#accordion_ex"
						>
							<div class="card-body">
								<p>
									Which product is this schedule for?
								</p>
                                <p>
                                    <select class="form-select" aria-label="Default select example">
										<option selected>-- Please select --</option>
										<option value="1">Ride a Bike</option>
										<option value="2">Drive a Ferrari</option>
										<option value="3">Parachute Jump</option>
									  </select>
                                </p>
							</div>
						</div>
					</div>
					<div class="card">
						<div class="card-header" id="headingTwo">
							<h2 class="mb-0">
								<a
									href="#"
									class="btn collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseTwo"
									aria-expanded="false"
									aria-controls="collapseTwo"
								>
									Dates
								</a>
							</h2>
						</div>
						<div
							id="collapseTwo"
							class="collapse"
							aria-labelledby="headingTwo"
							data-parent="#accordion_ex"
						>
							<div class="card-body">
								<p>
									Which dates should this schedule be between?
								</p>
							</div>
						</div>
					</div>
					<div class="card">
						<div class="card-header" id="headingThree">
							<h2 class="mb-0">
								<a
									href="#"
									class="btn collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseThree"
									aria-expanded="false"
									aria-controls="collapseThree"
								>
									Days
								</a>
							</h2>
						</div>
						<div
							id="collapseThree"
							class="collapse"
							aria-labelledby="headingThree"
							data-parent="#accordion_ex"
						>
							<div class="card-body">
								<p>
									Which days of the week should this schedule apply to?
								</p>
							</div>
						</div>
					</div>
					<div class="card">
						<div class="card-header" id="headingThree3">
							<h2 class="mb-0">
								<a
									href="#"
									class="btn collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseThree3"
									aria-expanded="false"
									aria-controls="collapseThree"
								>
									Times
								</a>
							</h2>
						</div>
						<div
							id="collapseThree3"
							class="collapse"
							aria-labelledby="headingThree3"
							data-parent="#accordion_ex"
						>
							<div class="card-body">
								<p>
									Which time should this start?
								</p>
							</div>
						</div>
					</div>
	
				</div>
			</div>
		</div>
		<div class="col-lg-6">
			<div class="white_box mb_30">
				<div class="box_header">
					<div class="main-title">
						<h3 class="mb-0">Here's what we're creating</h3>
					</div>
				</div>

				<div class=" accordion_custom2 mb_50" id="accordion_ex2">
					<div class="card">
						<div class="card-header" id="headingOnesquare">
							
						</div>
						
							<div class="card-body">
								<p>
									Get started by answering the questions!
								</p>
							</div>
						
					</div>
					
				</div>
			</div>
		</div>
	</div>
</div>
