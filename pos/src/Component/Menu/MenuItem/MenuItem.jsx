import './MenuItem.css';

const MenuItem = ({item}) => {

    return <div className='menu-item p-3 position-relative'>
        
        <div className='img-container'>
            <img src={item.src} 
                alt={item.alt}
            />
        </div>

        <div className='mt-1 fixed-in-box p-2'>
            <span>{item.name}</span>
            <div className="d-flex text-danger justify-content-between col-11">
                <p>Cost: {item.price}$</p>

            <button type="button">
                <i className="fas fa-shopping-cart"></i>
            </button>
        </div>

      </div>
    </div>
}

export default MenuItem;