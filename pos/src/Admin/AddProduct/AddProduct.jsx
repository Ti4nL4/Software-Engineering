import './AddProduct.css'
import React from 'react';
import ReactDOM from 'react-dom';

const AddProduct =({ isShowing, hide,callB }) => isShowing ? ReactDOM.createPortal(

    <React.Fragment>
     <div id="modal-add-product">
            <form className="modal-content" action="/add-product" method="post">
                <div className="modal-header">
                    <h5>Add Product</h5>
                    <button type="button" className="close" onClick={hide}>X</button>
                </div>
                <div className="modal-body">
                    <label className="mt-2">Name:</label>
                    <input type="text" className="form-control" placeholder="Product Name" name='product_name'/>
                    <div className="product-type mt-2" >
                    <p >Type:</p>
            
                    
                    <input type="radio" id="coffe" name="product-type" value="coffe" /><label for="coffe">Coffe</label>
                    <input type ="radio" id="snack" name="product-type" value="snack"/><label for="snack">Snack</label>
                    <input type ="radio" id="hamberger" name="product-type" value="hamberger"/>
                    <label for="hamberger">Hamberger</label>
                    
                    </div>
                    <label className="mt-2">Image:</label>
                    <input type="text" className="form-control" placeholder="Product URL Image" name='image'/>



                    <label className="mt-2">Price:</label>
                    <input type ="text" className="form-control" placeholder="Product Price" />
                    <label className="mt-2">Fund:</label>
                    <input type ="text" className="form-control" placeholder="Fund" />
                    <label className="mt-2">InStock:</label>
                    <input type ="text" className="form-control" placeholder="Product Quantity" />
                    <label className="mt-2">Description:</label>
                    <textarea rows="3" type ="text-area" className="form-control" />

                    </div>
                    <div className="modal-footer">
                        <button  onClick={callB}>ADD</button>
                    </div>
                </form>
            </div>
    </React.Fragment>, document.body
  ) : null;

  export default AddProduct;