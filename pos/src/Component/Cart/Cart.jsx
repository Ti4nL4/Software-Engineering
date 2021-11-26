import './Cart.css';
import { FoodManagement } from '../../context/FoodManagement';
import { useContext } from 'react';
import CartItem from './CartItem';
import { useNavigate } from "react-router-dom";

const Cart = props => {
  
    let totalPrice=0;
    let navigate = useNavigate();
    const { cartItemList} = useContext(FoodManagement);
    
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
                        return <CartItem item = {item} />
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



