

const CheckoutForm = props => {


    return (
        <div>
        <h4 className="">Địa chỉ thanh toán</h4>
        <form className="needs-validation" novalidate="">
          <div className="row g-3">
            <div className="col-sm-6">
              <label for="firstName" className="form-label">Họ</label>
              <input type="text" className="form-control" id="firstName" placeholder="" defalutValue="" required="" />
            
            </div>

            <div className="col-sm-6">
              <label for="lastName" className="form-label">Last name</label>
              <input type="text" className="form-control" id="lastName" placeholder="" defaultValue="" required="" />
            
            </div>

            

            <div className="col-12">
              <label for="email" className="form-label">Email <span className="text-muted">(Tuỳ chọn)</span></label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com" />
            </div>

            <div className="col-12">
              <label for="address" className="form-label">Địa chỉ</label>
              <input type="text" className="form-control" id="address" placeholder="1234 Main St" required="" />
            </div>

          </div>

          <hr className="my-4" />

          <h4 className="mb-3">Phương thức thanh toán</h4>

          <div className="my-3">
            <div className="form-check">
              <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked="" required="" />
              <label className="form-check-label" for="credit">Credit card</label>
            </div>
            <div className="form-check">
              <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required="" />
              <label className="form-check-label" for="debit">Debit card</label>
            </div>
            <div className="form-check">
              <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required="" />
              <label className="form-check-label" for="paypal">PayPal</label>
            </div>
          </div>

          <div className="row gy-3">
            <div className="col-md-6">
              <label for="cc-name" className="form-label">Tên</label>
              <input type="text" className="form-control" id="cc-name" placeholder="" required="" />
              <small className="text-muted">Tên đầy đủ được in trên thẻ</small>

            </div>

            <div className="col-md-6">
              <label for="cc-number" className="form-label">Số thẻ</label>
              <input type="text" className="form-control" id="cc-number" placeholder="" required="" />
              <div className="invalid-feedback">
                Credit card number is required
              </div>
            </div>

            <div className="col-md-3">
              <label for="cc-expiration" className="form-label">Ngày hết hạn</label>
              <input type="text" className="form-control" id="cc-expiration" placeholder="" required="" />
              <div className="invalid-feedback">
                Expiration date required
              </div>
            </div>

            <div className="col-md-3">
              <label for="cc-cvv" className="form-label">CVV</label>
              <input type="text" className="form-control" id="cc-cvv" placeholder="" required="" />
              <div className="invalid-feedback">
                Security code required
              </div>
            </div>
          </div>

          <hr className="my-4" />

          <button className="w-100 btn btn-primary btn-lg" type="submit">Thanh toán</button>
        </form>

        </div>
      
    )
}

export default CheckoutForm;