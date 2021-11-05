import './ItemModal.css'

const ItemModal = props => {



    return (
        <div className="modal fade" id='exampleModal' tabIndex="-1" aria-labelledby='exampleModalLabel' aria-hidden="true">
            <div className="modal-dialog ">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="body-img col-md-5">
                                <img src="https://cdn.tgdd.vn/Products/Images/2282/176472/bhx/thung-24-lon-bia-becks-ice-330ml-201912270840074206.JPG"
                                    alt=""
                                />
                            </div>
                            <div className=" col-md-7">
                                <div className="row info ">
                                    <div className="col-3">SKU</div>
                                    <div className="col-5">Hamberger</div>
                                    <div className="col-4">Price</div>
                                </div>
                                <div className=" row qty">
                                    <div className="col-6">Quantity</div>
                                    <div className="modal-product-quantity">
                                        <button > <span>-</span></button>
                                        <button > 1 </button>
                                        <button > <span>+</span></button>
                                    </div>
                                </div>
                                <div><h5> Description</h5>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid eum iusto repellendus temporibus dolore dolor quasi minus facere fuga! Dicta et dolorum harum in beatae ea, repellat laboriosam nobis veniam.
                                    </div>
                                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">Save changes</button>
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