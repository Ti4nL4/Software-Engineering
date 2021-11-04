import Menu from "../../Component/Menu/Menu";
import Cart from "../../Component/Cart/Cart";
import Navbar from '../../Component/Navbar/Navbar';
import ItemModal from "../../Component/ItemModal/ItemModal";
const MenuPage = props => {


    return <div>

        <div className='col-xl-8 col-12 border-0'>
            <Navbar />
            <Menu />
        </div>
        <div className='d-none d-xl-block col-4 fixed-right p-4 cart-container'>
            <Cart />
        </div>
        <div className='modal-container'>
            <ItemModal />
        </div>
       
    </div>
}

export default MenuPage;