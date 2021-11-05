import './Item.css';

const Item = ({item, changeFilterValue}) => {

  function camelCase(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index)
    {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  }

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