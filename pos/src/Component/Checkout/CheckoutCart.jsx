import { useContext } from "react";
import { Link } from "react-router-dom";
import { FoodManagement } from "../../context/FoodManagement";


const CheckoutCart = props => {

    const {cartItemList} = useContext(FoodManagement);

    return <div className='relative-fixed'>
    <h4 className="d-flex justify-content-between align-items-center mb-3">
      <span className="text-main">Giỏ hàng</span>
      <span className="badge bg-main rounded-pill">{cartItemList.length}</span>
    </h4>

    <ul className="list-group mb-3">
      
    {
        cartItemList.map(item => 

            <li className="list-group-item d-flex justify-content-between lh-sm" key={item.Id}>
                <div>
                <h6 className="my-0">{item.Product_Name}</h6>
                <small className="text-muted">{item.Price}x{item.amount}</small>
                </div>
                <span className="text-muted">${item.Price * item.amount}</span>
            </li>
        )
    }
      <li className="list-group-item d-flex justify-content-between">
        <span>Total</span>
        <strong>${}</strong>
      </li>
    </ul>

    <form className="card p-2">
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Promo code" />
        <button type="submit" className="btn btn-secondary">Redeem</button>
      </div>
    </form>
  </div>
}

export default CheckoutCart;