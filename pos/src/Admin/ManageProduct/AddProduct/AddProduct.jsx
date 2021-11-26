import './AddProduct.css'
import React from 'react';
import ReactDOM from 'react-dom';

const AddProduct =({ isShowing, hide,callB,handleInputChange }) => isShowing ? ReactDOM.createPortal(

    <React.Fragment>
     <div id="modal-add-product">
            <div className="modal-content" >
                <div className="modal-header">
                    <h5>Add Product</h5>
                    <button type="button" className="close" onClick={hide}>X</button>
                </div>
                <div className="modal-body">
                    <label className="mt-2">Name:</label>
                    <input type="text" className="form-control" placeholder="Product Name" name='product_name' onChange={handleInputChange}/>
                    <div className="product-type mt-2" >
                    <p >Type:</p>
            
                    
                    <input type="radio" id="drink" name="product_type" value="Drink" onChange={handleInputChange}/>
                    <label htmlFor="Drink">Drink</label>

                    <input type ="radio" id="fastfood" name="product_type" value="FastFood" onChange={handleInputChange}/>
                    <label htmlFor="FastFood">FastFood</label>

                    <input type ="radio" id="sweets" name="product_type" value="Sweets" onChange={handleInputChange}/>
                    <label htmlFor="Sweets">Sweets</label>

                    <input type ="radio" id="canning" name="product_type" value="Canning" onChange={handleInputChange}/>
                    <label htmlFor="Canning">Canning</label>
                    
                    <input type ="radio" id="frozenfood" name="product_type" value="FrozenFood" onChange={handleInputChange}/>
                    <label htmlFor="FrozenFood">FrozenFood</label>
                    
                    </div>
                    <label className="mt-2">Image:</label>
                    <input type="text" className="form-control" placeholder="Product URL Image" name='image' onChange={handleInputChange}/>



                    <label className="mt-2">Price:</label>
                    <input type ="text" className="form-control" placeholder="Product Price" name="price" onChange={handleInputChange}/>
                    <label className="mt-2">Fund:</label>
                    <input type ="text" className="form-control" placeholder="Fund" name="fund" onChange={handleInputChange}/>
                    <label className="mt-2">InStock:</label>
                    <input type ="text" className="form-control" placeholder="Product Quantity" name="instock" onChange={handleInputChange} />
                    <label className="mt-2">Description:</label>
                    <input rows="3" type ="text-area" className="form-control" name="product_description" onChange={handleInputChange}/>

                    </div>
                    <div className="modal-footer">
                        <button  onClick={callB}>ADD</button>
                    </div>
                </div>
            </div>
    </React.Fragment>, document.body
  ) : null;

  export default AddProduct;