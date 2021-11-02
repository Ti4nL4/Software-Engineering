import './Navbar.css';

const Header = props => {

    return <div className='menu-header d-flex col-12'>
        <div className='btn-container p-2'>
            <button className='btn dark-blue text-white d-flex align-content-center'><i className="fas fa-home"></i></button>
        </div>
        <div className=''>
            <h5 className='fit-content'>Back To Home</h5>
        </div>
    </div>
}

export default Header;