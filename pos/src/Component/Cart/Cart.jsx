
import './Cart.css';
import { FoodManagement } from '../../context/FoodManagement';
import { useContext } from 'react';

const Cart = props => {

  const { cartItemList } = useContext(FoodManagement);
  const handleRemoveItem = props => {

  }
  return (
    <div id="modal-package">
        <div className="modal-package "  >
            <button type="button" className="btn-close"
            //  onClick={onClick}
             >X</button>
            <div className="modal-header">
                <h2>YOUR CARD</h2>
                <h2 className="modal-num-product">DINE IN</h2>
            </div>
            <div className="modal-body">
               <div className="modal-list-product">
               {
                    cartItemList.map(item => {
                        return (
                            <div key={item.id} className="modal-product-item">
                                <div className="modal-product-image"><img src={item.imageURL} alt={item.alt} /></div>
                                <div className="modal-product-info">
                                    <div className="modal-product-name">{item.name}</div>
                                    <div className="modal-product-price">{item.price * item.amount}</div>
                                </div>
                                <div className="modal-product-quantity">
                                    <button >
                                        <span className="minus"> - </span>
                                        <input type="text" value={item.amount} />
                                        <span className="plus"> + </span>
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
                    <p>100.000 USD</p>
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



