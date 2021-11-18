import Menu from "../../Component/Menu/Menu";
import ItemModal from "../../Component/ItemModal/ItemModal";

const MenuPage = props => {


    return <div>

        <div className='col-12 border-0'> 
            <div className='col-12 col-lg-8 mx-auto'>
                <Menu />
            </div>
        </div>
        <ItemModal />
    </div>
}

export default MenuPage;