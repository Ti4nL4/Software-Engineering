import CheckoutForm from "../../Component/Checkout/CheckoutForm"
import CheckoutCart from "../../Component/Checkout/CheckoutCart";

const CheckoutPage = props => {




    return <>
    
        {/* <div className='col-12 mb-5'>
            <Navbar />
        </div> */}
        
        <div className='row col-10 mx-auto p-5'>
            
            <div className='col-md-7 col-lg-8'>
                <CheckoutForm></CheckoutForm>
            </div>
            <div className='col-md-5 col-lg-4'>
                <CheckoutCart></CheckoutCart>
            </div>
        
        </div>
    </>

}

export default CheckoutPage;