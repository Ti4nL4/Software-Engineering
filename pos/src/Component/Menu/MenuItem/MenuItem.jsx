import './MenuItem.css';
import { FoodManagement } from '../../../context/FoodManagement';
import { useContext } from 'react';

const MenuItem = ({item}) => {
    const { setItemDetail} = useContext(FoodManagement);
    const handleOnClick =(item )=>{
        setItemDetail(item);

    }
    return <div className='menu-item p-3 position-relative'>
        
        <div className='img-container'>
            <img src={item.imageURL} 
                alt={item.alt}
            />
        </div>

        <div className='fixed-in-box p-2'>
            <span>{item.name}</span>
            <div className="d-flex text-danger justify-content-between col-11">
                <p>Cost: {item.price}$</p>

            <button type="button" data-bs-toggle="modal" data-bs-target='#exampleModal' onClick={()=> handleOnClick(item)}>
                <i className="fas fa-shopping-cart"></i>
            </button>
        </div>
       
      </div>

    </div>
}

export default MenuItem;