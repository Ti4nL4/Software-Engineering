import './Item.css';

const Item = ({item, changeFilterValue}) => {


  return <div className='col-12 p-3' onClick={() => changeFilterValue(item.type)}>
    <div className='d-flex flex-column item col-12 p-2'>
      <img src={item.imageURL}
        className='circle'
        alt={item.alt}
      />
      
      <p className='type text-uppercase'>{item.type}</p>
    </div>
  </div>
}

export default Item;