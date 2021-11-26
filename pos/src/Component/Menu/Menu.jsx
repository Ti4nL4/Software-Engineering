import "./Menu.css";
import FilterFoodBar from "./FilterFoodBar/FilterFoodBar";
import MenuItem from './MenuItem/MenuItem';
import { FoodManagement } from "../../context/FoodManagement";
import { useContext, useEffect, useState } from "react";





const Menu = ({products}) => {

    const [foodTypes, setFoodTypes] = useState({});
    const [filterValue, setFilterValue] = useState('');
    const {foodList} = useContext(FoodManagement);
    
    useEffect(() =>{

        let temp = {};

        foodList.forEach(product => {
            
            if (!temp.hasOwnProperty(product.Product_Type))
                temp[product.Product_Type] = product;
        });
        
        setFoodTypes({...temp});
    }, [foodList]);

    return <div className='menu row m-0 p-0'>
        <FilterFoodBar foodTypes={foodTypes} changeFilterValue = {setFilterValue}/>
        <div className='menu-body'>
            <h3 className='mb-1'>{filterValue === '' ? "All" : filterValue}</h3>
            <div className='row'>

                {foodList.map((food, index) =>
                    food.Product_Type === filterValue || filterValue === '' ? 
                    <div className='col col-12 col-sm-6 col-md-4 col-xl-3 col-xxl-2 p-3 m-0' key = {index}>
                        <MenuItem  item = {food}
                            />
                    </div>: null
                )}

            </div>
            
        </div>
    </div>
}


export default Menu;