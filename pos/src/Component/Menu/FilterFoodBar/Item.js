import './Item.css';

const Item = ({item, changeFilterValue}) => {


  return <div className='item row py-3 text-center' onClick={() => changeFilterValue(item.Product_Type)}>
    <div className='row justify-content-center m-0 p-0'>
      <img src={item.Image}
        alt=""
      />
    </div>
    <div className="row text-center m-0 p-0">
      <p className='type text-uppercase m-0 p-0'>{item.Product_Type}</p>
    </div>
  </div>
}

export default Item;