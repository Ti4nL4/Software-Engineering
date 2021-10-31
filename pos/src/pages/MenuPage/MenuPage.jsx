import Menu from "../../Component/Menu/Menu";
import Cart from "../../Component/Cart/Cart";

const MenuPage = props => {


    return <div className='d-flex'>

        <div className='col-md-8 col-12'><Menu /></div>
        <div className='col-md-4 d-none d-md-flex'><Cart /></div>
    </div>
}

export default MenuPage;