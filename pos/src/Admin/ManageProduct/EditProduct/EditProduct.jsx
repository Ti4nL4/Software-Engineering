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
            

                    <input type="radio" id="drink" name="product_type" value="Drink"  defaultChecked={product.Product_Type==='Drink'}  onChange={handleInputChange}/>
                    <label htmlFor="Drink">Drink</label>

                    <input type ="radio" id="fastfood" name="product_type" value="FastFood"defaultChecked={product.Product_Type==='FastFood'} onChange={handleInputChange}/>
                    <label htmlFor="FastFood">FastFood</label>

                    <input type ="radio" id="sweets" name="product_type" value="Sweets" defaultChecked={product.Product_Type==='Sweets'}onChange={handleInputChange}/>
                    <label htmlFor="Sweets">Sweets</label>
                    
                    <input type ="radio" id="canning" name="product_type" value="Canning" defaultChecked={product.Product_Type==='Canning'}onChange={handleInputChange}/>
                    <label htmlFor="Canning">Canning</label>
                    
                    <input type ="radio" id="frozenfood" name="product_type" value="FrozenFood" onChange={handleInputChange}/>
                    <label htmlFor="FrozenFood">FrozenFood</label>
                    
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