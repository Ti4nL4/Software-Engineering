import { useContext, useState } from "react";
import { FoodManagement } from "../../context/FoodManagement";
import StateModal from "./StateModal";

const CheckoutForm = props => {

  const NONE_STATE = 'NONE';
  const SUCCESS_STATE = 'SUCCESS';
  const FAIL_STATE = 'FAIL';
  const {placeOrder} = useContext(FoodManagement);
  const [state, setState] = useState(NONE_STATE);
  

  // useEffect(() => {

  //   setState(NONE_STATE);

  // }, []);


  const handleOnSubmit = (event) => {

    event.preventDefault();
    
    setState(NONE_STATE);
    
    placeOrder((isSuccess) => {
      
      if (isSuccess)
        setState(SUCCESS_STATE);
      else {
        setState(FAIL_STATE);
      }
    });
  }

    return (
        <div>
        <h4 className="text-uppercase">Thanh toán</h4>
        <form className="needs-validation" noValidate="">
          <div className="row g-3">
            <div className="col-sm-6">
              <label htmlFor="firstName" className="form-label">Họ</label>
              <input type="text" className="form-control" id="firstName" placeholder="" defaultValue="" required="" />
            
            </div>

            <div className="col-sm-6">
              <label htmlFor="lastName" className="form-label">Tên</label>
              <input type="text" className="form-control" id="lastName" placeholder="" defaultValue="" required="" />
            
            </div>

            

            <div className="col-12">
              <label htmlFor="email" className="form-label">Email <span className="text-muted">(Tuỳ chọn)</span></label>
              <input type="email" className="form-control" id="email" placeholder="you@state.com" />
            </div>

            <div className="col-12">
              <label htmlFor="address" className="form-label">Địa chỉ</label>
              <input type="text" className="form-control" id="address" placeholder="1234 Main St" required="" />
            </div>

          </div>

          <hr className="my-4" />

          <h4 className="mb-3">Phương thức thanh toán</h4>

          <div className="my-3">
            <div className="form-check">
              <input id="credit" name="paymentMethod" type="radio" className="form-check-input" required=""/>
              <label className="form-check-label" htmlFor="credit">Credit card</label>
            </div>
            <div className="form-check">
              <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required="" />
              <label className="form-check-label" htmlFor="debit">Debit card</label>
            </div>
            <div className="form-check">
              <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required="" />
              <label className="form-check-label" htmlFor="paypal">PayPal</label>
            </div>
          </div>

          <div className="row gy-3">
            <div className="col-md-6">
              <label htmlFor="cc-name" className="form-label">Tên</label>
              <input type="text" className="form-control" id="cc-name" placeholder="" required="" />
              <small className="text-muted">Tên đầy đủ được in trên thẻ</small>

            </div>

            <div className="col-md-6">
              <label htmlFor="cc-number" className="form-label">Số thẻ</label>
              <input type="text" className="form-control" id="cc-number" placeholder="" required="" />
              <div className="invalid-feedback">
                Credit card number is required
              </div>
            </div>

            <div className="col-md-3">
              <label htmlFor="cc-expiration" className="form-label">Ngày hết hạn</label>
              <input type="text" className="form-control" id="cc-expiration" placeholder="" required="" />
              <div className="invalid-feedback">
                Expiration date required
              </div>
            </div>

            <div className="col-md-3">
              <label htmlFor="cc-cvv" className="form-label">CVV</label>
              <input type="text" className="form-control" id="cc-cvv" placeholder="" required="" />
              <div className="invalid-feedback">
                Security code required
              </div>
            </div>
          </div>

          <hr className="my-4" />

          <button className="w-100 btn btn-outline-danger btn-lg" type='button' 
          data-bs-toggle="modal" data-bs-target="#stateModal"
          onClick={handleOnSubmit}>Thanh toán</button>
        </form>
        
          <StateModal state = {state}/>  
        </div>
      
    )
}

export default CheckoutForm;