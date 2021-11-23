import React from 'react';
import './index.css'
import { Link } from 'react-router-dom';
import { useStyles } from './listEm.style.component';
import { Grid } from '@mui/material';
import { Pie } from 'react-chartjs-2';
import ItemEm from './itemEm/itemEm.component';
const state = {
    labels: ['Hamberger', 'Noodle', 'Coffe',
        'Apple-juice', 'Snack'],
    datasets: [
        {
            label: 'Product',
            backgroundColor: [
                '#B21F00',
                '#C9DE00',
                '#2FDE00',
                '#00A6B4',
                '#6800B4'
            ],
            hoverBackgroundColor: [
                '#501800',
                '#4B5000',
                '#175000',
                '#003350',
                '#35014F'
            ],
            data: [15, 59, 80, 81, 56]
        }
    ]
}
function HomePageAdmin(props) {
    const classes = useStyles();


    return (
        <div id="home-page-admin" className="home-page-admin">
            <div className="sidebar">
                
                <ul>
                    <li><h2>AmazingFood</h2></li>
                   
                    <li> <Link to="/admin"><i class="far fa-chart-bar"></i>DashBoard</Link></li>
                    
                    <li><i class="fas fa-balance-scale"></i>Statistics</li>
                     <li><Link to="/admin/product"><i class="fas fa-shopping-basket"></i>Product</Link></li>
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

                        <div className="card blue">
                            <div className="title">
                                <h6 >Total customers</h6>
                                <h4>123</h4>
                            </div>
                            <div className="icon">
                                <i class="fas fa-users"></i>
                            </div>
                        </div>

                        <div className="card yellow">
                            <div className="">
                                <h6 >Total products</h6>
                                <h4>123</h4>
                            </div>
                            <div className="icon ">
                                <i class="fas fa-users"></i>
                            </div>
                        </div>
                        <div className="card red">
                            <div className="">
                                <h6 >Total profits</h6>
                                <h4>123</h4>
                            </div>
                            <div className="icon">
                                <i class="fas fa-users"></i>
                            </div>
                        </div>
                        <div className="card green">
                            <div className="">
                                <h6 >Total bill</h6>
                                <h4>123</h4>
                            </div>
                            <div className="icon">
                                <i class="fas fa-users"></i>
                            </div>
                        </div>

                    </div>
                    <div className="body-table">
                        <div className="some-product">
                            <div className={classes.boxmain}>
                                <h5>Most popular product</h5>
                                <div className="pie-chart">
                                <Pie
                                    data={state}
                                    options={{
                                        title: {
                                            display: true,
                                            text: 'Average Rainfall per month',
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
                        <div className="some-orders">
                            <div className={classes.root}>


                                <div className={classes.boxmain}>
                                    <div className={classes.searchbox}>

                                        <h5>Recent Bill</h5>

                                    </div>

                                    <div className={classes.listcus}>
                                        <div className={classes.head}>
                                            <Grid className={classes.grid} spacing={2}>
                                                <Grid className={classes.item} item xs={5}>
                                                    User Name
                                                </Grid>
                                                <Grid className={classes.item} item xs={4}>
                                                Phone
                                                </Grid>
                                                <Grid className={classes.item} item xs={4}>
                                                Address
                                                </Grid>
                                                <Grid className={classes.item} item xs={2}>
                                                    Id Bill
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

                    </div>
                </div>
                <div className="footer"><p>@CoppyRight2021</p></div>
            </div>

        </div>
    )

}

export default HomePageAdmin;