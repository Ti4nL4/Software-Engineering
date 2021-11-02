import './MenuItem.css';

const MenuItem = props => {

    return <div className='menu-item p-3'>
        
        <div className=''>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrE4ZZmv-3HMaisN6_x4TIfskSPdh0532rcg&usqp=CAU' 
            />
        </div>

        <div className='mt-1'>
        <h5>Hamburger</h5>
            <div className="d-flex justify-content-between align-items-center text-danger">
                <p>Cost: 123$</p>

            <button type="button">
                <i className="fas fa-shopping-cart"></i>
            </button>
        </div>

      </div>
    </div>
}

export default MenuItem;