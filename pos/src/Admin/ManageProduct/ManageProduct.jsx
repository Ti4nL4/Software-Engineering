import './ManageProduct.css'
import { FoodManagement } from '../../context/FoodManagement';
import React, { useContext,useEffect } from 'react';
import AddProduct from "../AddProduct/AddProduct"
import useModal from './useModal';

function ManageProduct() {
    const { foodList } = useContext(FoodManagement);
    const { isShowing, toggle } = useModal();

    useEffect(() => {
        if (isShowing){
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'unset';
        }

     }, [isShowing ]);

    return (
        <div id="product">
             <div className="sidebar">
                <ul>
                    <li><i class="far fa-chart-bar"></i>DashBoard</li>
                    <li><i class="fas fa-balance-scale"></i>Statistics</li>
                    <li><i class="fas fa-shopping-basket"></i>Product</li>
                    <li><i class="fas fa-users"></i>Customer</li>
                    <li><i class="fas fa-user"></i>Account</li>
                </ul>
            </div>
            <div className="manage-product">
            <div className="header">
                    <div className="avatar">
                        <img src="https://material-kit-react.devias.io/static/images/avatars/avatar_6.png" alt="" />
                    </div>
                </div>
                <div className="list-activity">
                    <div>
                        <i onClick={toggle} className="far fa-plus-square"></i>
                        <AddProduct
                            isShowing={isShowing}
                            hide={toggle}
                        />
                    </div>
                    <div>
                        <i className="far fa-trash-alt"></i>
                    </div>
                    <div>
                        <i className="far fa-edit"></i>
                    </div>
                </div>
                <div className="filter-value">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                            Category
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <button className="dropdown-item" href="/">All</button>
                            <button className="dropdown-item" href="/">Snack</button>
                            <button className="dropdown-item" href="/">Hamberger</button>
                            <button className="dropdown-item" href="/">Coffe</button>
                        </div>
                    </div>
                    <div className="input-group rounded" style={{ width: '200px' }}>
                        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
                            aria-describedby="search-addon" />
                        <span className="input-group-text border-0" id="search-addon">
                            <i className="fas fa-search"></i>
                        </span>
                    </div>
                </div>
                <div className="list-product-container">

                    <div className="table-head">
                        <ul>
                            <li className="col-1">No</li>
                            <li className="col-4">Name</li>
                            <li className="col-3">Type</li>
                            <li className="col-2">InStock</li>
                            <li className="col-2">Price</li>
                        </ul>
                    </div>
                    <div className="table-body">
                        {foodList.map((food, index) =>
                            <ul>
                                <li className="col-1">{index}</li>
                                <li className="col-4">{food.name}</li>
                                <li className="col-3">{food.type}</li>
                                <li className="col-2">{food.quantity}</li>
                                <li className="col-2">{food.price}</li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ManageProduct;