import './EditProduct.css'
import React from 'react';
import ReactDOM from 'react-dom';

const EditProduct =({ isShowing, hide,handleInputChange,handleEditChange,product }) => isShowing ? ReactDOM.createPortal(

    <React.Fragment>
     <div id="modal-edit-product">
            <div className="modal-content">
                <div className="modal-header">
                    <h5>Edit Product</h5>
                    <button type="button" className="close" onClick={hide} >X</button>
                </div>
                <div className="modal-body">
                    <label className="mt-2">Name:</label>
                    <input type="text" className="form-control" defaultValue={product.Product_Name} name='product_name' onChange={handleInputChange}/>
                    <div className="product-type mt-2" >
                    <p >Type:</p>
            
                    
                    <input type="radio" id="coffe" name="product_type" value="Coffe" defaultChecked={product.Product_Type==='Coffe'} onChange={handleInputChange}/>
                    <label htmlFor="Coffe">Coffe</label>
                    <input type ="radio" id="snack" name="product_type" value="Snack" defaultChecked={product.Product_Type==='Snack'} onChange={handleInputChange}/>
                    <label htmlFor="Snack">Snack</label>
                    <input type ="radio" id="hamberger" name="product_type" value="Fastfood" defaultChecked={product.Product_Type==='Fastfood'} onChange={handleInputChange}/>
                    <label htmlFor="Fastfood">Fastfood</label>
                    
                    </div>
                    <label className="mt-2">Image:</label>
                    <input type="text" className="form-control" defaultValue={product.Image} name='image' onChange={handleInputChange}/>



                    <label className="mt-2">Price:</label>
                    <input type ="text" className="form-control" defaultValue={product.Price} name="price" onChange={handleInputChange}/>
                    <label className="mt-2">Fund:</label>
                    <input type ="text" className="form-control" defaultValue={product.Fund} name="fund" onChange={handleInputChange}/>
                    <label className="mt-2">InStock:</label>
                    <input type ="text" className="form-control" defaultValue={product.Instock} name="instock" onChange={handleInputChange} />
                    <label className="mt-2">Description:</label>
                    <textarea rows="3" type ="text-area" className="form-control" name="product_description" defaultValue={product.Product_Description} onChange={handleInputChange}/>

                    </div>
                    <div className="modal-footer">
                        <button onClick={()=>handleEditChange(product.Id)}>Save change</button>
                    </div>
                </div>
            </div>
    </React.Fragment>, document.body
  ) : null;

  export default EditProduct;