
import './Cart.css';
import { FoodManagement } from '../../context/FoodManagement';
import { useContext } from 'react';

const Cart = props => {

    const {cartItemList} = useContext(FoodManagement);

    return <table className="table table-image">
        <tr>
        <th scope="col">Image</th>
        <th scope="col">Product</th>
        <th scope="col">Price</th>
        <th scope="col">Qty</th>
        <th scope="col">Total</th>
        <th scope="col">Actions</th>
        </tr>

        <tbody>

        {cartItemList.map(item => 
        
        
            <tr>
              <td className="w-25">
                <img src={item.src} className="img-fluid img-thumbnail cart-img" alt="Sheep" />
              </td>
              <td>{item.name}</td>
              <td>{item.price}$</td>
              <td className="qty">
                <input type="text" className="form-control w-30 mx-auto" defaultValue={item.amount} />
              </td>
              <td>{item.price * item.amount}$</td>
              <td>
                <a href="#" className="btn btn-danger btn-sm">
                  <i className="fa fa-times"></i>
                </a>
              </td>
            </tr>
        
        )}
            
          </tbody>

    </table>
}


export default Cart;