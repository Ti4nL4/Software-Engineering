import './ManageProduct.css'
import {createNewProduct} from '../../api/services'
import { FoodManagement } from '../../context/FoodManagement';
import React, { useContext, useEffect, useState } from 'react';
import AddProduct from "../AddProduct/AddProduct"
// import RemoveProduct from "../RemoveProduct/RemoveProduct"
import EditProduct from "../EditProduct/EditProduct"
import useModal from './useModal';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const dataS={"id":2,"product_name":"Cháo yến Yến Việt đậu xanh","product_type":"Cháo","price":12000,"fund":8000,"product_description":"Là dòng sản phẩm cháo yến ăn liền tiện lợi từ thương hiệu Yến Việt. Cháo yến Yến Việt đậu xanh thịt bằm ly 50g có chứa tổ yến tự nhiên cùng rau thịt tươi sấy thăng hoa mang hương vị đậu xanh thịt bằm tươi ngon và giàu dinh dưỡng là lựa chọn hoàn hảo cho bữa ăn tiện lợi, đơn giản những vẫn đủ chất","Instock":10,"Image":"https://cdn.tgdd.vn/Products/Images/2564/191290/bhx/chao-yen-yenviet-dau-xanh-thit-bam-ly-50g-2-org.jpg"}


function ManageProduct() {
    const [filter, setFilter] = React.useState('');

    const handleChange = (event) => {
        setFilter(event.target.value);
    };
    const { foodList } = useContext(FoodManagement);
    const { isShowing, toggle } = useModal();
    const [isShowingEditModal, setIsShowingEditModal] = useState(false);

    const toggleEdit = () => {
        console.log("edit");
        setIsShowingEditModal(!isShowingEditModal);
    }
    let num = foodList ? foodList.length : 0;

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
                    <div onClick={createNewProduct}><i className="far fa-plus-square"></i> <h4>Add new product</h4></div>
                    
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
                                    <th scope="row">{index + 1}</th>
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

                    <Stack spacing={2} style={{ alignItems: 'center' }}>

                        <Pagination count={(num / 10) + 1} color="primary" />
                    </Stack>
                </div>
                <div className="footer"><p>@CoppyRight2021</p></div>
            </div>
            <AddProduct
                        isShowing={isShowing}
                        hide={toggle}
                        callB={createNewProduct}
                    />
        </div>
    )
}

export default ManageProduct;