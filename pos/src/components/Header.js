import React, {Component} from 'react';
import ReactDOM from 'react-dom';
export default function Header(){
	
	return (
		<div class='container-fluid'>
		  	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
				<div class="container">
					  <a class="navbar-brand" >Home</a>
					  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					    <span class="navbar-toggler-icon"></span>
					  </button>
					  <div class="collapse navbar-collapse " id="navbarSupportedContent">
					    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
					      <li class="nav-item">
						<a class="nav-link" href="/admin/report">Doanh thu</a>
					      </li>
					      <li class="nav-item">
						<a class="nav-link " href="/admin/reportProduct">Sản phẩm</a>
					      </li>
						  <li class="nav-item">
						<a class="nav-link " href="/admin/product">Quản lý</a>
					      </li>
						  {/* <li class="nav-item">
						<a class="nav-link " href="#">Khách hàng</a>
					      </li> */}
					    </ul>
					    <div class="d-flex flex-row-reverse">
							<button type="button"  class="btn btn-outline-danger">
								<i class="fa fa-sign-out" aria-hidden="true"></i>
								<a class="navbar-brand" href="/admin/login">Đăng xuất</a>
							</button>
					  	</div>
					  </div>
					  
				</div>
			</nav>
		</div>
	      );
	
}

// export default Header;