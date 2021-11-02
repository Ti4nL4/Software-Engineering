import React, { useState } from "react";
import './FilterFoodBar.css';
import Carousel, { consts } from "react-elastic-carousel";
import Item from "./Item";

const breakPoints = [
  { width: 1, itemsToShow: 3},
  { width: 435, itemsToShow: 4},
  { width: 768, itemsToShow: 5},
  { width: 992, itemsToShow: 6 },
  { width: 1200, itemsToShow: 6 }
];


const customButton = ({type, onClick}) =>
{

  const pointer = type === consts.PREV ? <div className='arrow-left'></div> : <div className='arrow-right'></div>;

  return (
      
      <button onClick={onClick } className='bg-none btn-x'>
        {pointer}
      </button>
    
  )
}
const FilterFoodBar = props => {

  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  return (
      <div className="carousel-wrapper col-12 align-content-center p-2">
        <Carousel breakPoints={breakPoints} renderArrow={customButton}>
          {items.map((item) => (
            <Item key={item} />
          ))}
        </Carousel>
      </div>
  );
}




export default FilterFoodBar;