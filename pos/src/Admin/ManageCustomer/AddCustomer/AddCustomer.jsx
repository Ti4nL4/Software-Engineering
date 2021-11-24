import './AddCustomer.css'
import React from 'react';
import ReactDOM from 'react-dom';

const AddProduct =({ isShowing, hide,callB,handleInputChange }) => isShowing ? ReactDOM.createPortal(

    <React.Fragment>
     <div id="modal-add-product">
            <div className="modal-content" >
                <div className="modal-header">
                    <h5>Add Customer</h5>
                    <button type="button" className="close" onClick={hide}>X</button>
                </div>
                <div className="modal-body">
                    <label className="mt-2">User Name:</label>
                    <input type="text" className="form-control" placeholder="User Name" name='User_Name' onChange={handleInputChange}/>
                    
                    <label className="mt-2">Password:</label>
                    <input type="text" className="form-control" placeholder="Enter your password" name='User_Password' onChange={handleInputChange}/>

                    <label className="mt-2">Email:</label>
                    <input type ="email" className="form-control" placeholder="example@gmail.com" name="Email" onChange={handleInputChange}/>
                    <label className="mt-2">Phone:</label>
                    <input type ="text" className="form-control" placeholder="Phone number" name="Phone" onChange={handleInputChange}/>
                    <label className="mt-2">Address:</label>
                    <input type ="text" className="form-control" placeholder="Address" name="Address" onChange={handleInputChange} />
                   
                    </div>
                    <div className="modal-footer">
                        <button  onClick={callB}>ADD</button>
                    </div>
                </div>
            </div>
    </React.Fragment>, document.body
  ) : null;

  export default AddProduct;