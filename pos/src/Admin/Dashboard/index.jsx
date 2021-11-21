import React from 'react';
import './index.css'

function HomePageAdmin(props) {

    return (
        <div id="home-page-admin" className="home-page-admin">
            <div className="sidebar">
                <ul>
                    <li><i class="far fa-chart-bar"></i>DashBoard</li>
                    <li><i class="fas fa-balance-scale"></i>Statistics</li>
                    <li><i class="fas fa-shopping-basket"></i>Product</li>
                    <li><i class="fas fa-users"></i>Customer</li>
                    <li><i class="fas fa-user"></i>Account</li>
                </ul>
            </div>
            <div className="body">
                <div className="header">
                    <div className="avatar">
                        <img src="https://material-kit-react.devias.io/static/images/avatars/avatar_6.png" alt="" />
                    </div>
                </div>
                <div className="body-content">
                    <div className="list-card ">
                        <div className="card ">
                            <div className="">
                                <div >Total customers</div>
                                <div>123</div>
                            </div>
                            <div className="icon">
                                <i class="fas fa-users"></i>
                            </div>
                        </div>
                        <div className="card ">
                            <div className="">
                                <div >Total products</div>
                                <div>123</div>
                            </div>
                            <div className="icon">
                                <i class="fas fa-users"></i>
                            </div>
                        </div>
                        <div className="card ">
                            <div className="">
                                <div >Total profits</div>
                                <div>123</div>
                            </div>
                            <div className="icon">
                                <i class="fas fa-users"></i>
                            </div>
                        </div>
                        <div className="card ">
                            <div className="">
                                <div >Total bill</div>
                                <div>123</div>
                            </div>
                            <div className="icon">
                                <i class="fas fa-users"></i>
                            </div>
                        </div>

                    </div>
                    <div className="body-table">
                        <div className="some-product">
                            <table>
                                <tr>
                                    <td>Product</td>
                                    <td>Description</td>
                                </tr>
                                <tr>
                                    <td>Hamberger</td>
                                    <td>Very delicious</td>
                                </tr>
                                <tr>
                                    <td>Hamberger</td>
                                    <td>Very delicious</td>
                                </tr>
                                <tr>
                                    <td>Hamberger</td>
                                    <td>Very delicious</td>
                                </tr>
                            </table>

                        </div>
                        <div className="some-orders">
                        <table>
                                <tr>
                                    <td>Product</td>
                                    <td>Description</td>
                                </tr>
                                <tr>
                                    <td>Hamberger</td>
                                    <td>Very delicious</td>
                                </tr>
                                <tr>
                                    <td>Hamberger</td>
                                    <td>Very delicious</td>
                                </tr>
                                <tr>
                                    <td>Hamberger</td>
                                    <td>Very delicious</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default HomePageAdmin;