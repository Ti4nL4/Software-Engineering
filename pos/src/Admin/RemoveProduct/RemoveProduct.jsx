import './RemoveProduct.css'
import React from 'react';
import ReactDOM from 'react-dom';

const RemoveProduct =({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(

    <React.Fragment>
     <div id="modal-add-product">
            <div className="modal-content">
                <div className="modal-header">
                    <h5>Add Product</h5>
                    <button type="button" className="close" onClick={hide} style={{ width:'25px', border:'none',color:'red'}}>X</button>
                </div>
                <div className="modal-body">
                    <label>Name:</label>
                    <input type="text" className="form-control" placeholder="Product Name" />
                    <label>Image:</label>
                    <input type="text" className="form-control" placeholder="Product URL Image" />

                    <div className="product-type">
                        
                    <p>Type:</p>
                    <input type="radio" id="coffe" name="product-type" value="coffe" /><label for="coffe">Coffe</label>
                    <input type ="radio" id="snack" name="product-type" value="snack"/><label for="snack">Snack</label>
                    <input type ="radio" id="hamberger" name="product-type" value="hamberger"/>
                    <label for="hamberger">Hamberger</label>
                    </div>


                    <label>Price:</label>
                    <input type ="text" className="form-control" placeholder="Product Price" />
                    <label>InStock:</label>
                    <input type ="text" className="form-control" placeholder="Product Quantity" />
                    <label>Description:</label>
                    <textarea rows="3" type ="text-area" className="form-control" />

                    </div>
                    <div className="modal-footer">
                        <button>ADD</button>
                    </div>
                </div>
            </div>
    </React.Fragment>, document.body
  ) : null;

  export default RemoveProduct;