import './ItemModal.css'
import { FoodManagement } from '../../context/FoodManagement';
import { useContext,useState,useEffect} from 'react';

const ItemModal = props => {
    const [amount,setAmount]=useState(1)
    const { itemDetail,modifyAmountInCart } = useContext(FoodManagement);
    const defaultAmount = 1;

    useEffect(() =>{
        setAmount(defaultAmount)
    }, [itemDetail])
    const handleIncreaseItem =()=> {
        setAmount(amount > 1?amount -1:1)
    }
    const handleDecreaseItem =()=> {
        setAmount(amount < itemDetail.Instock ?amount +1:amount)
    }
    return (
        <div className="modal  fade" id='exampleModal' tabIndex="-1" aria-labelledby='exampleModalLabel' aria-hidden="true">
            <div className="modal-dialog ">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">ADD TO CART</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="body-img col-md-4">
                                <img src={itemDetail.Image}
                                    alt={itemDetail.alt}
                                />
                            </div>
                            <div className=" col-md-8">
                                <div className="row info ">
                                    <div className="col-3">
                                        <h5>SKU</h5>
                                        <p>{itemDetail.Instock}</p>
                                    </div>
                                    <div className="col-6">
                                        <h5>Name</h5>
                                        {itemDetail.Product_Name}</div>
                                    <div className="col-3"><h5>Price</h5><p>{itemDetail.Price}</p></div>
                                </div>
                                <div className=" row qty">
                                    <div className="col-6"><h5>Quantity</h5></div>
                                    <div className="modal-product-quantity">
                                        <button onClick={handleIncreaseItem}> <span>-</span></button>
                                        <button > {amount} </button>
                                        <button onClick={handleDecreaseItem }> <span>+</span></button>
                                    </div>
                                </div>
                                <div className="title-description"><h5> Description</h5></div>
                                <div className="description">
                                    <p>{itemDetail.Product_Description}</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="add-to-cart" data-bs-dismiss="modal" aria-label="Close" onClick={()=>modifyAmountInCart(itemDetail,amount)}><i className="fas fa-shopping-cart"></i> Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default ItemModal;