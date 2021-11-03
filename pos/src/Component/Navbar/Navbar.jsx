import './Navbar.css';

const Header = props => {

    return <div className='navbar d-flex col-12 p-1 bg-danger'>
        <div className='btn-container p-2'>
            <button className='btn dark-blue text-white d-flex align-content-center'><i className="fas fa-home"></i></button>
        </div>
        <div className='d-flex align-content-center'>
            <h5 className='fit-content text-white'>Back To Home</h5>
        </div>
    </div>
}

export default Header;