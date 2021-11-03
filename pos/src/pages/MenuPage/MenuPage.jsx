import Menu from "../../Component/Menu/Menu";
import Cart from "../../Component/Cart/Cart";
import Navbar from '../../Component/Navbar/Navbar'

const MenuPage = props => {


    return <div>

        <div className='col-md-8 col-12 border-0'>
            <Navbar />
            <Menu />
        </div>
        <div className='d-none d-md-block col-4 fixed-right p-4 cart-container'>
            <Cart />
        </div>
    </div>
}

export default MenuPage;