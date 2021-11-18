import './Cart.css';
import { FoodManagement } from '../../context/FoodManagement';
import { useContext } from 'react';

import { useNavigate } from "react-router-dom";

const Cart = props => {
  
    let totalPrice=0;
    let navigate = useNavigate();
    const { cartItemList,IncreaseItem ,DecreaseItem} = useContext(FoodManagement);
    const handleIncreaseItem = (item)=> {
        IncreaseItem(item);
    }
    const handleDecreaseItem = (item)=> {
        DecreaseItem(item);
    }
  return (
    <div id="menu-cart-package">
        <div className="menu-cart-package" >
            <div className="menu-cart-header">
                <h2><i className="fas fa-shopping-cart"></i> YOUR CART</h2>
                <h2 className="menu-cart-num-product">DINE IN</h2>
            </div>
            <div className="menu-cart-body">
               <div className="menu-cart-list-product">
               {
                    cartItemList.map(item => {
                        totalPrice = totalPrice+item.Price * item.amount;
                        return (
                            <div key={item._id} className="menu-cart-product-item col-11 mx-auto">
                                <div className="menu-cart-product-image border border-1 border-danger p-1"><img src={item.Image} alt="" /></div>
                                <div className="menu-cart-product-info">
                                    <div className="menu-cart-product-name">{item.name}</div>
                                    <div className="menu-cart-product-price">{item.Price * item.amount}$</div>
                                </div>
                                <div className="menu-cart-product-quantity">
                                    <button >
                                        <span className="minus" onClick={()=>handleDecreaseItem({item})}> - </span>
                                        <input type="text" placeholder={item.amount} />
                                        <span className="plus" onClick={()=>handleIncreaseItem({item})}> + </span>
                                    </button>
                                    
                                </div>
                                <div className="close" >
                                       x
                                </div>
                            </div>
                        )
                    })
                }
               </div>
 
            </div>
             <div className="menu-cart-footer d-flex flex-column col-12 p-1 mb-1">

                    <div className='d-flex col-10 justify-content-between display-6'>
                        <p>Total</p>
                        <p>{totalPrice}$</p>
                    </div>  
                    <div className='footer col-12'>
                        
                        <button className='btn btn-danger col-12 text-uppercase p-2 rounded rounded-3'
                        onClick={() => navigate('/checkout')}
                        >Checkout</button>
                    </div>
                </div>
        </div>
        </div>
    )
}


export default Cart;



