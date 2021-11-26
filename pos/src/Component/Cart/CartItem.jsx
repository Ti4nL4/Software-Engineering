import { FoodManagement } from '../../context/FoodManagement';
import { useContext } from 'react';

const CartItem = ({item}) => {

    const {IncreaseItem ,DecreaseItem, removeItem} = useContext(FoodManagement);

    return <div className="card rounded-3 px-5">
        <div className="card-body p-1">
            <div className="row d-flex justify-content-between align-items-center">
            <div className="col-md-2 col-lg-2 col-xl-2">
                <img src={item.Image}
                className="img-fluid rounded-3" />
            </div>
            <div className="col-md-4 col-lg-4 col-xl-4">
                <p className="lead fw-normal mb-2">{item.Product_Name}</p>
                <p><span className="text-muted">Còn: </span>{item.Instock}</p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-1 d-flex">
                <button className="btn btn-link"
            onClick = {() => DecreaseItem(item)}>
                    <i className="fas fa-minus"></i>
                </button>
                
                <span className='d-flex align-content-center' style={{fontSize: "1.5rem"}}>{item.amount}</span>
            
                <button className="btn btn-link px-2" onClick = {() => IncreaseItem(item)}>
                    <i className="fas fa-plus"></i>
                </button>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h5 className="mb-0">${item.amount * item.Price}</h5>
            </div>
            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                <button className='btn btn-danger'
                    onClick = {() => removeItem(item)}
                ><i className="fas fa-trash fa-lg"></i></button>
            </div>
            </div>
        </div>
    </div>
}

export default CartItem;