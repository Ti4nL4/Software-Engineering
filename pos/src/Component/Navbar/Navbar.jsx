import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Header(){
	
	return (
		
		  	<nav className="navbar navbar-expand-lg navbar-dark bg-danger">
				<div className="container">
					  <a className="navbar-brand" href="/home">Home</a>
					  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					    <span className="navbar-toggler-icon"></span>
					  </button>
					  <div className="collapse navbar-collapse " id="navbarSupportedContent">
					    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
					      <li className="nav-item">
							<a className="nav-link" href="/reports">Doanh thu</a>
					      </li>
					      <li className="nav-item">
						<a className="nav-link " href="/reportProduct">Sản phẩm</a>
					      </li>
						  <li className="nav-item">
							{/* <a className="nav-link " href="/menu">Thực đơn</a> */}
							<Link to = '/menu' className='nav-link'>Thực đơn</Link>
					      </li>
						  <li className="nav-item">
						<a className="nav-link " href="#">Khách hàng</a>
					      </li>
					    </ul>
					    <div className="d-flex flex-row-reverse">
							<button type="button"  className="btn btn-outline-danger">
								<i className="fa fa-sign-out" aria-hidden="true"></i>
								<a className="navbar-brand" href="/">Đăng xuất</a>
							</button>
					  	</div>
					  </div>
					  
				</div>
			</nav>
		
	      );
	
}

// export default Header;