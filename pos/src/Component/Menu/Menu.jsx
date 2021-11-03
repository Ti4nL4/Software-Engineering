import "./Menu.css";
import Navbar from "../Navbar/Navbar";
import FilterFoodBar from "./FilterFoodBar/FilterFoodBar";
import MenuItem from './MenuItem/MenuItem';





const Menu = props => {


    return <div className='menu'>
        <div className='main mt-2 pt-4'>
            <FilterFoodBar />
            <div className='menu-body'>
                <h3 className='mb-1'>Sea food</h3>
                <div className='row d-flex justify-content-between'>
                    <div className='col-6 col-lg-4 p-3'><MenuItem /></div>
                    <div className='col-6 col-lg-4 p-3'><MenuItem /></div>
                    <div className='col-6 col-lg-4 p-3'><MenuItem /></div>
                    <div className='col-6 col-lg-4 p-3'><MenuItem /></div>
                    <div className='col-6 col-lg-4 p-3'><MenuItem /></div>
                    <div className='col-6 col-lg-4 p-3'><MenuItem /></div>
                </div>
                
            </div>
        </div>
    </div>
}


export default Menu;