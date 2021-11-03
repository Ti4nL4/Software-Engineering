import "./Menu.css";
import FilterFoodBar from "./FilterFoodBar/FilterFoodBar";
import MenuItem from './MenuItem/MenuItem';
import { useEffect, useState } from "react";





const Menu = ({products}) => {

    const [productTypes, setProductTypes] = useState({});
    const [filterValue, setFilterValue] = useState('');

    useEffect(() =>{

        let temp = {};

        products.forEach(product => {
            
            if (!temp.hasOwnProperty(product.type))
                temp[product.type] = product;
        });
        
        setProductTypes({...temp});
    }, [products]);

    return <div className='menu'>
        <div className='main mt-2 pt-4'>
            <FilterFoodBar productTypes={productTypes} changeFilterValue = {setFilterValue}/>
            <div className='menu-body'>
                <h3 className='mb-1'>{filterValue === '' ? "All" : filterValue}</h3>
                <div className='row d-flex'>

                    {products.map((item, index) =>
                        item.type === filterValue || filterValue === '' ? 
                        <div className='col-6 col-lg-4 p-3' key = {index}>
                        <MenuItem  item = {item}/>
                        </div>: null
                    )}
    
                </div>
                
            </div>
        </div>
    </div>
}


export default Menu;