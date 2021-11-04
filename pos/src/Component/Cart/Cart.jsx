
import './Cart.css';
import { FoodManagement } from '../../context/FoodManagement';
import { useContext } from 'react';

const Cart = props => {

    const {cartItemList} = useContext(FoodManagement);

    return <div className=''>
        {cartItemList.map(item =>
            <h1>{item.name} {item.amount}</h1>
        )}
    </div>
}


export default Cart;