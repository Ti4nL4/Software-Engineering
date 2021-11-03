import Menu from "../../Component/Menu/Menu";
import Cart from "../../Component/Cart/Cart";
import Navbar from '../../Component/Navbar/Navbar'
import {requireFoodList} from '../../api/services';
import { useEffect, useState } from "react";

const MenuPage = props => {

    const [products, setProducts] = useState([]);
    
    useEffect(() => {

    
        requireFoodList(setProducts);
       
    }, [])

    return <div>

        <div className='col-xl-8 col-12 border-0'>
            <Navbar />
            <Menu products = {products}/>
        </div>
        <div className='d-none d-xl-block col-4 fixed-right p-4 cart-container'>
            <Cart />
        </div>
    </div>
}

export default MenuPage;