/* eslint-disable jsx-a11y/anchor-is-valid */
import './ManageProduct.css'
import { createNewProduct, deleteProduct, requireFoodList, updateProduct } from '../../api/services'
import { FoodManagement } from '../../context/FoodManagement';
import React, { useContext, useEffect, useState } from 'react';
import AddProduct from "./AddProduct/AddProduct"
import EditProduct from "./EditProduct/EditProduct"
import useModal from './useModal';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
// ..
AOS.init();





function ManageProduct() {
    const [data, setData] = useState({
        product_name: '',
        product_type: '',
        fund: '',
        price: '',
        instock: '',
        product_description: '',
        image: '',
    })
    const [id, setId] = useState(0);
    const [open, setOpen] = useState(false);
    const [filter, setFilter] = useState('');
    const [page, setPage] = useState(1);
    const { foodList, setFoodList } = useContext(FoodManagement);
    const { isShowing, toggle } = useModal();
    const [isShowingEditModal, setIsShowingEditModal] = useState(false);
    let num = foodList ? foodList.length : 0;
    let numPage = num % 10 === 0 ? num / 10 : Math.floor(num / 10) + 1;

    useEffect(() => {

        if (isShowing || isShowingEditModal) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'unset';
        }

    }, [isShowing, isShowingEditModal, foodList]);


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
        deleteProduct(id);
        setTimeout(() =>
            requireFoodList(setFoodList), 100)
        setOpen(false);
    }
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggleEdit = (id) => {
        const product = foodList.filter(item => item.Id === id)[0]
        setData({
            product_name: product.Product_Name,
            product_type: product.Product_Type,
            fund: product.Fund,
            price: product.Price,
            instock: product.Instock,
            product_description: product.product_Description,
            image: product.Image,
        })
        toggleEdit();
        setId(id);
    }
    const handleEditChange = (idEdit) => {
        const dataEdit = {
            data: data,
            id: idEdit
        }

        toggleEdit();
        updateProduct(dataEdit);
        setTimeout(() =>
            requireFoodList(setFoodList), 100)

    }

    const handleChangePage = (event, value) => {
        setPage(value);
    };
    const handleChange = (event) => {
        setFilter(event.target.value);
    };
    const toggleEdit = () => {
        setIsShowingEditModal(!isShowingEditModal);
    }

    const callB = () => {
        toggle();
        createNewProduct(data);
        setTimeout(() =>
            requireFoodList(setFoodList), 100)

    }

    return (
        <div id="product">
            <div className="sidebar">
                <ul>
                    <li><h2>AmazingFood</h2></li>
                    <li> <Link to="/admin"><i class="far fa-chart-bar"></i>DashBoard</Link></li>
                    <li><i class="fas fa-balance-scale"></i>Statistics</li>
                    <li><Link to="/admin/product"><i class="fas fa-shopping-basket"></i>Product</Link></li>
                    <li><Link to="/admin/customer"><i class="fas fa-users"></i>Customer</Link></li>
                    <li><Link to='/admin/account'><i class="fas fa-user"></i>Account</Link></li>
                </ul>
            </div>
            <div className="manage-product">
                <div className="header">

                    <nav class=" avatar navbar navbar-expand-lg navbar-light ">
                        <div class="container-fluid">
                            <ul class="navbar-nav">

                                <li class="nav-item dropdown dropstart ">
                                    <a
                                        class="nav-link d-flex align-items-center"
                                        href="#"
                                        id="navbarDropdownMenuLink"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <img
                                            src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                                            class="rounded-circle"
                                            height="42"
                                            alt=""
                                            loading="lazy"
                                        />
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li>
                                            <a class="dropdown-item" href="#">My profile</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">Logout</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>

                </div>
                <div className="list-activity">
                    <h2>Product</h2>
                    <div onClick={toggle}><i className="far fa-plus-square"></i> <h4>Add new product</h4></div>
                </div>
                <div className="filter-value">

                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={filter}
                            onChange={handleChange}
                            label="Age"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={'All'}>All</MenuItem>
                            <MenuItem value={'Snack'}>Snack</MenuItem>
                            <MenuItem value={'Hamberger'}>Hamberger</MenuItem>
                            <MenuItem value={'Coffe'}>Coffe</MenuItem>
                        </Select>
                    </FormControl>

                    <div className="input-group rounded" style={{ width: '200px' }}>
                        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
                            aria-describedby="search-addon" />
                        <span className="input-group-text border-0" id="search-addon">
                            <i className="fas fa-search"></i>
                        </span>
                    </div>
                </div>
                <div className="list-product-container">
                    <table className="table table-bordered" data-aos="fade-up" >
                        <thead>
                            <tr >
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Type</th>
                                <th scope="col">Instock</th>
                                <th scope="col">Price</th>
                                <td colSpan="2"></td>
                            </tr>
                        </thead>
                        <tbody>

                            {foodList.map((food, index) =>
                                index >= (page - 1) * 10 && index < page * 10 && <tr key={index} >
                                    <th scope="row">{index + 1}</th>
                                    <td>{food.Product_Name}</td>
                                    <td>{food.Product_Type}</td>
                                    <td>{food.Instock}</td>
                                    <td>{food.Price}</td>
                                    <td onClick={() => handleClickOpen(food.Id)}><i className="far fa-trash-alt"></i></td>
                                    <td onClick={() => handleToggleEdit(food.Id)}><i className="far fa-edit"></i></td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                    <Stack spacing={2} style={{ alignItems: 'center' }}>
                        <Pagination count={numPage} color="primary" page={page} onChange={handleChangePage} />
                    </Stack>
                </div>
                <div className="footer"><p>@CoppyRight2021</p></div>
            </div>
            <AddProduct
                isShowing={isShowing}
                hide={toggle}
                callB={callB}
                handleInputChange={handleInputChange}
            />
            <EditProduct
                isShowing={isShowingEditModal}
                hide={toggleEdit}
                handleEditChange={handleEditChange}
                handleInputChange={handleInputChange}
                product={foodList.filter(item => item.Id === id)[0]}
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
                    <Button onClick={handelSubmitDelete}>Agree</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default ManageProduct;