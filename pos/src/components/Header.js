import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import * as IoIcons from "react-icons/io"
// import Reports from '../pages/Reports'

// import Home from '../pages/Home';
export default function Header(){
	
	return (
		<div class='container'>
		  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
					<div class="container">
					  <a class="navbar-brand" href="/">TienIdol</a>
					  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					    <span class="navbar-toggler-icon"></span>
					  </button>
					  <div class="collapse navbar-collapse " id="navbarSupportedContent">
					    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
					      <li class="nav-item">
						<a class="nav-link" href="/reports">Doanh thu</a>
					      </li>
					      <li class="nav-item">
						<a class="nav-link " href="/reportProduct">Sản phẩm</a>
					      </li>
					      {/* <li class="nav-item">
						<a class="nav-link " href="#">Kho hàng</a>
					      </li>
					      <li class="nav-item">
						<a class="nav-link " href="#">Kho hàng</a>
					      </li> */}
					    </ul>
					    <div class="d-flex flex-row-reverse">
						<button type="button" class="btn btn-outline-danger">
							<i class="fa fa-sign-out" aria-hidden="true"></i>
							Đăng xuất
						</button>
					  </div>
					  </div>
					  
				</div>
		</nav>
		{/* <BasicDateRangePicker/> */}
		{/* <div class="row">
		<div class="col-md-4 col-sm-12">
			<div class="card widget-flat">
			<div class="card-body">
				<div class="float-end">
				<i class="mdi mdi-pulse widget-icon"></i>
				</div>
				<h5 class="text-muted fw-normal mt-0" >Tổng doanh thu</h5>
				<h3 class="mt-3 mb-3">+ 30.56%</h3>
				<p class="mb-0 text-muted">
				<span class="text-success me-2">
					<i class="mdi mdi-arrow-up-bold"></i> 4.87%</span>
				<span class="text-nowrap">Since last month</span>
				</p>
			</div>
			</div>
			</div>
			<div class="col-md-4 col-sm-12">
			<div class="card widget-flat">
			<div class="card-body">
				<div class="float-end">
				<i class="mdi mdi-pulse widget-icon"></i>
				</div>
				<h5 class="text-muted fw-normal mt-0" title="Growth">Tổng số hóa đơn</h5>
				<h3 class="mt-3 mb-3">100</h3>
				<p class="mb-0 text-muted">
				<span class="text-success me-2">
					<i class="mdi mdi-arrow-up-bold"></i> 4.87%</span>
				<span class="text-nowrap">Since last month</span>
				</p>
			</div>
			</div>
			</div>
			<div class="col-md-4 col-sm-12">
			<div class="card widget-flat">
			<div class="card-body">
				<div class="float-end">
				<i class="mdi mdi-pulse widget-icon"></i>
				</div>
				<h5 class="text-muted fw-normal mt-0">Số lượng sản phẩm</h5>
				<h3 class="mt-3 mb-3">2056</h3>
				<p class="mb-0 text-muted">
				<span class="text-success me-2">
					<i class="mdi mdi-arrow-up-bold"></i> 4.87%</span>
				<span class="text-nowrap">Since last month</span>
				</p>
			</div>
			</div>
			</div>
			
		</div> */}
		{/* <div class="row"> */}
		{/* <Reports /> */}
		{/* </div> */}
		</div>
	      );
	
}

// export default Header;