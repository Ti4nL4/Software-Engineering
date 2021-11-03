import './Item.css';

const Item = props => {

  return <div className='col-12 p-3'>
    <div className='d-flex flex-column item col-12 p-2'>
      <img src='https://www.ldoceonline.com/media/english/illustration/orange_juice.jpg?version=1.2.39'
        className='circle'
      />
      
      <h4 className=''>Type</h4>
    </div>
  </div>
}

export default Item;