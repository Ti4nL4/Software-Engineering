import Menu from "../../Component/Menu/Menu";
import Cart from "../../Component/Cart/Cart";
import Navbar from '../../Component/Navbar/Navbar';
import ItemModal from "../../Component/ItemModal/ItemModal";
const MenuPage = props => {


    return <div>

        <div className='col-xl-7 col-12 border-0'>
            <div className = 'fixed-top col-xl-7 col-12'>
                <Navbar />
            </div>
            <Menu />
        </div>
        <div className='d-none d-xl-block col-5 fixed-right cart-container'>
            <Cart />
        </div>
    
            <ItemModal />
        
       
    </div>
}

export default MenuPage;