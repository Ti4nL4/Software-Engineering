import Menu from "../../Component/Menu/Menu";
import ItemModal from "../../Component/ItemModal/ItemModal";
import Navbar from '../../Component/Navbar/Navbar';
const MenuPage = props => {


    return <div className='row'>
        <Navbar />
        <div className='col m-0 p-0'>
            <Menu />
        </div>
        {/* <div className='col-3 cart-container m-0 p-0'>
            <Cart />
        </div> */}
    
            <ItemModal />
        
       
    </div>
}

export default MenuPage;