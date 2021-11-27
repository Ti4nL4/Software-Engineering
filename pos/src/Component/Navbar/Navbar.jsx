import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Header(){
	
	return (
		
		  	<nav className="navbar navbar-expand-md navbar-dark bg-danger">
				<div className="container-fluid">
					<a className="navbar-brand" href="/">Home</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					    <span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse " id="navbarSupportedContent">
					    <ul className="navbar-nav me-auto">
					      	<li className="nav-item">
								<a className="nav-link" href="/checkout">Thanh toán</a>
					      	</li>
					      	{/* <li className="nav-item">
								<a className="nav-link " href="/reportProduct">Sản phẩm</a>
					      	</li>
						  	<li className="nav-item">
								<a className="nav-link " href="/menu">Thực đơn</a>
								<Link to = '/menu' className='nav-link'>Thực đơn</Link>
					      	</li>
						  	<li className="nav-item">
								<a className="nav-link" href="/customer">Khách hàng</a>
					      	</li> */}
					    </ul>

					    <div className="d-flex flex-row-reverse">
							<button type="button"  className="btn btn-outline-danger">
								<i className="fa fa-sign-out" aria-hidden="true"></i>
								<a className="navbar-brand" href="/">Đăng xuất</a>
							</button>
						</div>
					</div>
					
					<h2 style={{color: 'white'}}>
						<i className="fas fa-shopping-cart" data-bs-toggle="offcanvas" 
						  	data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"></i>
					</h2>
				</div>
			</nav>
		
	      );
	
}

// export default Header;