/* eslint-disable jsx-a11y/anchor-is-valid */
import './ManageCustomer.css'
import {  requireCustomer ,deleteCustomer,createNewCustomer } from '../../api/services'
import { FoodManagement } from '../../context/FoodManagement';
import React, { useContext, useEffect, useState } from 'react';
import AddCustomer from "./AddCustomer/AddCustomer"
import useModal from './useModal';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
// ..
AOS.init();





function ManageProduct() {
    const [data, setData] = useState({
        User_Name:'',
        User_Password:'',
        Email:'',
        Phone:'',
        Address:''
    })
    const [id, setId] = useState(0);
    const [open, setOpen] = useState(false);
    const [filterSearch, setFilterSearch] = useState('');
    const [page, setPage] = useState(1);
    const { customerList, setCustomerList } = useContext(FoodManagement);
    const { isShowing, toggle } = useModal();
    let num = customerList ? customerList.length : 0;
    let numPage = num % 10 === 0 ? num / 10 : Math.floor(num / 10) + 1;

    useEffect(() => {

        if (isShowing ) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'unset';
        }

    }, [isShowing, customerList,filterSearch]);


    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setData({
            ...data,
            [name]: value,

        });
    }
    const handleClickOpen = (id) => {
        setOpen(true);
        setId(id);
    };
    const handelSubmitDelete = () => {
        deleteCustomer(id);
        setTimeout(() =>
        requireCustomer(setCustomerList)
        , 100)
        setOpen(false);
    }
    const handleClose = () => {
        setOpen(false);
    };

  

    const handleChangePage = (event, value) => {
        setPage(value);
    };
    const handleChangeSearch=(event)=>{
        const target = event.target;
        const value = target.value;
        setTimeout(()=>{
            setFilterSearch(value);
        },10)
        console.log(value);
    }

    const callB = () => {
        toggle();
        createNewCustomer(data);
        setTimeout(() =>
        requireCustomer(setCustomerList), 100)
    }

    return (
        <div id="customer">
            <div className="sidebar">
                <ul>
                <li><h2>AmazingFood</h2></li>
                   
                    <li> <Link to="/admin"><i className="far fa-chart-bar"></i>DashBoard</Link></li>
                    <li><Link to="/admin/statistics"><i className="fas fa-balance-scale"></i>Statistics</Link></li>
                     <li><Link to="/admin/product"><i className="fas fa-shopping-basket"></i>Product</Link></li>
                    <li><Link to="/admin/customer"><i className="fas fa-users"></i>Customer</Link></li>
                    <li><Link to='/admin/account'><i className="fas fa-user"></i>Account</Link></li>
                </ul>
            </div>
            <div className="manage-product">
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
                                                <a className="dropdown-item" href="#">Logout</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    
                </div>
                <div className="list-activity">
                    <h2>Customer</h2>
                    <div onClick={toggle}><i className="far fa-plus-square"></i> <h4>Add new customer</h4></div>
                </div>
                <div className="filter-value">
                    <div className="input-group rounded" style={{ width: '200px' }}>
                        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
                            aria-describedby="search-addon" onChange={handleChangeSearch}/>
                        <span className="input-group-text border-0" id="search-addon" onClick={handleChangeSearch} >
                            <i className="fas fa-search"></i>
                        </span>
                    </div>
                </div>
                <div className="list-product-container">
                    <table className="table table-bordered" data-aos="fade-up" >
                        <thead>
                            <tr >
                                <th scope="col">#</th>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Password</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Address</th>
                                <td colSpan="2"></td>
                            </tr>
                        </thead>
                        <tbody>

                            {customerList.map((food, index) =>
                                 food.User_Name.toLocaleLowerCase().indexOf(filterSearch.trim().toLocaleLowerCase()) !== -1 

                                 && (filterSearch.replace(/\s/g, '')||index >= (page - 1) * 10 )
                                 && (filterSearch.replace(/\s/g, '')||index < page * 10 )
                                && <tr key={index} >
                                    <th scope="row">{index + 1}</th>
                                    <td>{food.Id}</td>
                                    <td>{food.User_Name}</td>
                                    <td>{food.User_Password}</td>
                                    <td>{food.Email}</td>
                                    <td>{food.Phone}</td>
                                    <td>{food.Address}</td>
                                    <td 
                                    onClick={() => handleClickOpen(food.Id)}
                                    ><i className="far fa-trash-alt"></i></td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                    {( filterSearch.replace(/\s/g, '') === "" )&&<Stack spacing={2} style={{ alignItems: 'center' }}>
                        <Pagination count={numPage} color="primary" page={page} onChange={handleChangePage} />
                    </Stack>}
                </div>
                <div className="footer"><p>@CoppyRight2021</p></div>
            </div>
            <AddCustomer
                isShowing={isShowing}
                hide={toggle}
                callB={callB}
                handleInputChange={handleInputChange}
            />
            
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are you want to delete?"}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button 
                    onClick={handelSubmitDelete}
                    >Agree</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default ManageProduct;