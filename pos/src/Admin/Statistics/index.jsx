/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import './index.css'
import { Link } from 'react-router-dom';
import { useStyles } from './listEm.style.component';
import { Grid } from '@mui/material';
import { Line } from 'react-chartjs-2';
import ItemEm from './itemEm/itemEm.component';
import { FoodManagement } from '../../context/FoodManagement';
<<<<<<< HEAD
import { Chart, LineController, LineElement, PointElement, LinearScale, Title,CategoryScale } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

=======
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
>>>>>>> 02687d598b6b72d44445e60e2e6c7386dba906f6
function HomePageAdmin(props) {
    const classes = useStyles();
    const { totalCustomer, totalBill, totalProduct,profit } = useContext(FoodManagement);
    let label = profit ? profit.map(item=> item.Date): [];
    let data = profit ? profit.map(item=> item.Profit): [];
    //let date = profit ? profit.map(item=> item.Day_Name): [];
    let numC = totalCustomer ? totalCustomer[0].Num : 0
    let numP = totalProduct ? totalProduct[0].Num : 0
    let numB = totalBill ? totalBill[0].Num : 0
    const state = {
        labels: label,
        datasets: [
            {
                label: 'Profit',
                fill: false,
                lineTension: 0,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data:data
            }
        ]
    }
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );
    return (
        <div id="admin-statistics" className="admin-statistics">
            <div className="sidebar">

                <ul>
                    <li><h2>AmazingFood</h2></li>

                    <li> <Link to="/admin"><i className="far fa-chart-bar"></i>DashBoard</Link></li>
                    <li><Link to="/admin/statistics"><i className="fas fa-balance-scale"></i>Statistics</Link></li>
                    <li><Link to="/admin/product"><i className="fas fa-shopping-basket"></i>Product</Link></li>
                    <li><Link to="/admin/customer"><i className="fas fa-users"></i>Customer</Link></li>
                    <li><Link to='/admin/account'><i className="fas fa-user"></i>Account</Link></li>
                    <li> <Link to="/admin/report"><i className="fas fa-money-bill"></i>Revenue</Link></li>
<<<<<<< HEAD

=======
>>>>>>> 02687d598b6b72d44445e60e2e6c7386dba906f6
                </ul>
            </div>
            <div className="body">
                <div className="header">
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
                </div>
                <div className="body-content">
                    <div className="list-card ">

                        <div className="card blue">
                            <div className="title">
                                <h6 >Total customers</h6>
                                <h4>{numC}</h4>
                            </div>
                            <div className="icon">
                                <i className="fas fa-users"></i>
                            </div>
                        </div>

                        <div className="card yellow">
                            <div className="">
                                <h6 >Total products</h6>
                                <h4>{numP}</h4>
                            </div>
                            <div className="icon ">
                                <i className="fas fa-users"></i>
                            </div>
                        </div>
                        <div className="card red">
                            <div className="">
                                <h6 >Total type</h6>
                                <h4>5</h4>
                            </div>
                            <div className="icon">
                                <i className="fas fa-users"></i>
                            </div>
                        </div>
                        <div className="card green">
                            <div className="">
                                <h6 >Total bill</h6>
                                <h4>{numB}</h4>
                            </div>
                            <div className="icon">
                                <i className="fas fa-users"></i>
                            </div>
                        </div>

                    </div>
                    <div className="body-table">
                        <div className="some-orders">
                            <div className={classes.root}>


                                <div className={classes.boxmain}>
                                    <div className={classes.searchbox}>

                                        <h5>Top Bill Of Month</h5>

                                    </div>

                                    <div className={classes.listcus}>
                                        <div className={classes.head}>
                                            <Grid className={classes.grid} spacing={2}>
                                                <Grid className={classes.item} item xs={4}>
                                                    User Name
                                                </Grid>
                                                <Grid className={classes.item} item xs={3}>
                                                    Address
                                                </Grid>
                                                <Grid className={classes.item} item xs={6}>
                                                    Time
                                                </Grid>
                                                <Grid className={classes.item} item xs={2}>
                                                    Price
                                                </Grid>
                                            </Grid>
                                        </div>

                                        <div className={classes.listitem}>
                                            <ItemEm id={1}></ItemEm>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="some-product">
                            <div className={classes.boxmain}>
                                <h5>Profits of week</h5>
                                <Line
                                    data={state}
                                    options={{
                                        title: {
                                            display: true,
                                            text: 'Profits each month',
                                            fontSize: 20
                                        },
                                        legend: {
                                            display: true,
                                            position: 'bottom'
                                        }
                                    }}
                                />
                            </div>

                        </div>


                    </div>
                </div>
                <div className="footer"><p>@CoppyRight2021</p></div>
            </div>

        </div>
    )

}

export default HomePageAdmin;