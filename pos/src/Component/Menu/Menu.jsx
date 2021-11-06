import "./Menu.css";
import FilterFoodBar from "./FilterFoodBar/FilterFoodBar";
import MenuItem from './MenuItem/MenuItem';
import { FoodManagement } from "../../context/FoodManagement";
import { useContext, useEffect, useState } from "react";





const Menu = ({products}) => {

    const [foodTypes, setFoodTypes] = useState({});
    const [filterValue, setFilterValue] = useState('');
    const {foodList, modifyAmountInCart} = useContext(FoodManagement);
    
    useEffect(() =>{

        let temp = {};

        foodList.forEach(product => {
            
            if (!temp.hasOwnProperty(product.type))
                temp[product.type] = product;
        });
        
        setFoodTypes({...temp});
    }, [foodList]);

    return <div className='menu'>
        <div className='main mt-2 pt-4'>
            <FilterFoodBar foodTypes={foodTypes} changeFilterValue = {setFilterValue}/>
            <div className='menu-body'>
                <h3 className='mb-1'>{filterValue === '' ? "All" : filterValue}</h3>
                <div className='row d-flex'>

                    {foodList.map((food, index) =>
                        food.type === filterValue || filterValue === '' ? 
                        <div className='col-6 col-lg-4 p-3' key = {index}>
                            <MenuItem  item = {food}
                            //  handleAddToCart={modifyAmountInCart}
                             />
                        </div>: null
                    )}
    
                </div>
                
            </div>
        </div>
    </div>
}


export default Menu;