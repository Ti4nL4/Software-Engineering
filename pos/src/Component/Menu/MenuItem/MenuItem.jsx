import './MenuItem.css';
import { FoodManagement } from '../../../context/FoodManagement';
import { useContext } from 'react';

const MenuItem = ({item}) => {
    const { setItemDetail} = useContext(FoodManagement);
    const handleOnClick =(item )=>{
        setItemDetail(item);

    }
    return <div className='menu-item p-3'>
        
        <div className='row m-0 p-0'>
            <img src={item.Image} 
                alt={""}
            />
        </div>

        <div className='row m-0 p-0'>
            <div className="text-center p-3"><h5>{item.Product_Name}</h5></div>
            <div className="d-flex text-danger justify-content-between p-0">
                <p>Cost: {item.Price}$</p>

                <button type="button" data-bs-toggle="modal" data-bs-target='#exampleModal' onClick={()=> handleOnClick(item)}>
                    <i className="fas fa-shopping-cart"></i>
                </button>
            </div>
       
        </div>

    </div>
}

export default MenuItem;