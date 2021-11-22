import './ManageProduct.css'
import $ from 'jquery';
import { FoodManagement } from '../../context/FoodManagement';
import React, { useContext, useEffect, useState } from 'react';
import AddProduct from "../AddProduct/AddProduct"
// import RemoveProduct from "../RemoveProduct/RemoveProduct"
import EditProduct from "../EditProduct/EditProduct"
import useModal from './useModal';

function ManageProduct() {
    const { foodList } = useContext(FoodManagement);
    const { isShowing, toggle } = useModal();
    const [isShowingEditModal, setIsShowingEditModal] = useState(false);

    const toggleEdit = () => {
        console.log("edit");
        setIsShowingEditModal(!isShowingEditModal);
    }

    useEffect(() => {
        if (isShowing || isShowingEditModal) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'unset';
        }

    }, [isShowing, isShowingEditModal]);

    return (
        <div id="product">
            <div className="sidebar">
                <ul>
                <li><h2>AmazingFood</h2></li>

                    <li><i className="far fa-chart-bar"></i>DashBoard</li>
                    <li><i className="fas fa-balance-scale"></i>Statistics</li>
                    <li><i className="fas fa-shopping-basket"></i>Product</li>
                    <li><i className="fas fa-users"></i>Customer</li>
                    <li><i className="fas fa-user"></i>Account</li>
                </ul>
            </div>
            <div className="manage-product">
                <div className="header">
                    <div className="avatar">
                        <img src="https://material-kit-react.devias.io/static/images/avatars/avatar_6.png" alt="" />
                    </div>
                </div>
                <div className="list-activity">
                    <h2>Product</h2>
                    <div onClick={toggle}><i className="far fa-plus-square"></i> <h4>Add new product</h4></div>
                    <AddProduct
                        isShowing={isShowing}
                        hide={toggle}
                    />
                    {/* <RemoveProduct
                        isShowing={isShowing}
                        hide={toggle}
                    /> */}
                    <EditProduct
                        isShowing={isShowingEditModal}
                        hide={toggleEdit}
                    />
                </div>
                <div className="filter-value">


                    <select class="mdb-select md-form">
                        <option value="" disabled selected>Category</option>
                        <option value="all">All</option>
                        <option value="snack">Snack</option>
                        <option value="hamberger">Hamberger</option>
                        <option value="coffe">Coffe</option>

                    </select>

                    <div className="input-group rounded" style={{ width: '200px' }}>
                        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
                            aria-describedby="search-addon" />
                        <span className="input-group-text border-0" id="search-addon">
                            <i className="fas fa-search"></i>
                        </span>
                    </div>
                </div>
                <div className="list-product-container">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
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
                                <tr key={index}>
                                    <th scope="row">{index}</th>
                                    <td>{food.Product_Name}</td>
                                    <td>{food.Product_Type}</td>
                                    <td>{food.Instock}</td>
                                    <td>{food.Price}</td>
                                    <td ><i className="far fa-trash-alt"></i></td>
                                    <td onClick={toggleEdit}><i className="far fa-edit"></i></td>
                                </tr>

                            )}

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default ManageProduct;