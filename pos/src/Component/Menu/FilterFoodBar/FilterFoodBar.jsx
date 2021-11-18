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

  const pointer = type === consts.PREV ? <div className='arrow arrow-left'></div> : <div className='arrow arrow-right'></div>;

  return (
      
      <button onClick={onClick } className='bg-none btn-x'>
        {pointer}
      </button>
    
  )
}
const FilterFoodBar = ({foodTypes, changeFilterValue}) => {


  return (
      <div className="carousel slide row p-0 m-0">
        <Carousel focusOnSelect={false} itemPadding={[10, 50]} breakPoints={breakPoints} renderArrow={customButton}>
          { Object.values(foodTypes).map( (item, index) => {
            
            return <Item item={item} changeFilterValue={changeFilterValue} key={index}/>;
          }
          )}
        </Carousel>
      </div>
  );
}




export default FilterFoodBar;