
import './Cart.css';
import { FoodManagement } from '../../context/FoodManagement';
import { useContext } from 'react';

const Cart = props => {
  
    let totalPrice=0;
  const { cartItemList,IncreaseItem ,DecreaseItem} = useContext(FoodManagement);
  const handleIncreaseItem = (item)=> {
    IncreaseItem(item);
  }
  const handleDecreaseItem = (item)=> {
    DecreaseItem(item);
  }
  return (
    <div id="modal-package">
        <div className="modal-package "  >
            <div className="modal-header">
                <h2><i class="fas fa-shopping-cart"></i> YOUR CART</h2>
                <h2 className="modal-num-product">DINE IN</h2>
            </div>
            <div className="modal-body">
               <div className="modal-list-product">
               {
                    cartItemList.map(item => {
                        totalPrice = totalPrice+item.price * item.amount;
                        return (
                            <div key={item._id} className="modal-product-item col-12">
                                <div className="modal-product-image border border-1 border-danger p-1"><img src={item.imageURL} alt={item.alt} /></div>
                                <div className="modal-product-info">
                                    <div className="modal-product-name">{item.name}</div>
                                    <div className="modal-product-price">{item.price * item.amount}$</div>
                                </div>
                                <div className="modal-product-quantity">
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
                <div className="modal-total">
                    <p>Total</p>
                    <p>{totalPrice}$</p>
                </div>
            </div>
            <div className="modal-footer">
                <button className="btn-modal-checkout">
                    <p>PAYMENT
                    </p>
                </button>
            </div>
        </div>
    </div>
  )
}


export default Cart;



