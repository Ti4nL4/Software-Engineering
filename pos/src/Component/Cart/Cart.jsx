import './Cart.css';
import { FoodManagement } from '../../context/FoodManagement';
import { useContext } from 'react';

import { useNavigate } from "react-router-dom";

const Cart = props => {
  
    let totalPrice=0;
    let navigate = useNavigate();
    const { cartItemList,IncreaseItem ,DecreaseItem, removeItem} = useContext(FoodManagement);
    
  return (
    <div className='cart-container offcanvas offcanvas-end' 
    tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="flex-row-reverse">
            
        </div>
        <div id="menu-cart-package">
            <div className="menu-cart-package" >
                <div className="menu-cart-header">
                    <h2><i className="fas fa-shopping-cart"></i> GIỎ HÀNG CỦA BẠN</h2>
                   
                    <button type="button" className="btn btn-close mx-3" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="menu-cart-body">
                <div className="menu-cart-list-product">
                {
                cartItemList.map(item => {
                    totalPrice = totalPrice+item.Price * item.amount;
                    return (
                    <div class="card rounded-3 px-5">
                        <div class="card-body p-1">
                            <div class="row d-flex justify-content-between align-items-center">
                            <div class="col-md-2 col-lg-2 col-xl-2">
                                <img src={item.Image}
                                class="img-fluid rounded-3" />
                            </div>
                            <div class="col-md-4 col-lg-4 col-xl-4">
                                <p class="lead fw-normal mb-2">{item.Product_Name}</p>
                                <p><span class="text-muted">Còn: </span>{item.Instock}</p>
                            </div>
                            <div class="col-md-2 col-lg-2 col-xl-1 d-flex">
                                <button class="btn btn-link"
                               onClick = {() => DecreaseItem(item)}>
                                    <i class="fas fa-minus"></i>
                                </button>
                                
                                <span className='d-flex align-content-center' style={{fontSize: "1.5rem"}}>{item.amount}</span>
                               
                                <button class="btn btn-link px-2" onClick = {() => IncreaseItem(item)}>
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                            <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                <h5 class="mb-0">${item.amount * item.Price}</h5>
                            </div>
                            <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                <button className='btn btn-danger'
                                    onClick = {() => removeItem(item)}
                                ><i class="fas fa-trash fa-lg"></i></button>
                            </div>
                            </div>
                        </div>
                    </div>
                            )
                        })
                    }
                </div>
    
                </div>
                <div className="menu-cart-footer d-flex flex-column col-12 p-1 mb-1">

                        <div className='d-flex col-10 justify-content-between display-6'>
                            <p>Tổng cộng</p>
                            <p>{totalPrice}$</p>
                        </div>  
                        <div className='footer col-12'>
                            
                            <button className='btn btn-danger col-12 text-uppercase p-2 rounded rounded-3'
                            onClick={() => navigate('/checkout')}
                            >Thanh toán</button>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    )
}


export default Cart;



