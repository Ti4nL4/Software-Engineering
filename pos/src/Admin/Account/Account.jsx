import React from "react";
import { Link } from 'react-router-dom';
import './Account.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
// ..
AOS.init();

function Account() {

    return (
        <div id="account">
            <div className="sidebar">
                <ul>
                    <li><h2>AmazingFood</h2></li>

                    <li> <Link to="/admin"><i className="far fa-chart-bar"></i>DashBoard</Link></li>
                    <li><Link to="/admin/statistics"><i className="fas fa-balance-scale"></i>Statistics</Link></li>
                    <li><Link to="/admin/product"><i className="fas fa-shopping-basket"></i>Product</Link></li>
                    <li><Link to="/admin/customer"><i className="fas fa-users"></i>Customer</Link></li>
                    <li><Link to='/admin/account'><i className="fas fa-user"></i>Account</Link></li>
                    <li> <Link to="/admin/report"><i className="fas fa-money-bill"></i>Revenue</Link></li>
                </ul>
            </div>
            <div className="header">

                        <nav className=" avatar navbar navbar-expand-lg navbar-light ">
                            <div className="container-fluid">
                                <ul className="navbar-nav">

                                    <li className="nav-item dropdown dropstart ">
                                        <a
                                            className="nav-link d-flex align-items-center"
                                            href="#"
                                            id="navbarDropdownMenuLink"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <img
                                                src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                                                className="rounded-circle"
                                                height="42"
                                                alt=""
                                                loading="lazy"
                                            />
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li>
                                            <p className="dropdown-item" ><Link to='/admin/account'>My profile</Link></p>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="/admin/login">Logout</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    
                </div>
            <div className="acount-detail justify-content-center">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-md-5 border-right  ">
                            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                                <img className="rounded-circle mt-5" src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg" alt="" />
                            </div> 
                        </div>
                    </div>
                    <div className="row justify-content-center" data-aos="fade-up">
                        <div className="col-md-7 border-right">
                            <div className="p-3 py-5">
                                <div className="d-flex justify-content-center mb-3">
                                    <h4 className="text-right">Profile Settings</h4>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-12">
                                        <label className="labels">User Name</label>
                                        <input type="text"
                                            className="form-control"
                                            placeholder="Name"
                                        />
                                    </div>
                            
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-12"><label className="labels">Phone Number</label><input type="text" className="form-control" placeholder="Your phone number" /></div>
                                    <div className="col-md-12"><label className="labels">Email</label><input type="email" className="form-control" placeholder="abcd@gmail.com" disabled /></div>
                                    <div className="col-md-12"><label className="labels">Address</label><input type="text" className="form-control" placeholder="Address" /></div>
                                    <div className="col-md-12"><label className="labels">Password</label><input type="password" className="form-control" placeholder="123456" /></div>
                                </div>
                                <div className="mt-5 text-center"><button className="btn profile-button" type="button">Save Profile</button></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer"><p>@CoppyRight2021</p></div>
            </div>
        </div>
    )
}

export default Account;