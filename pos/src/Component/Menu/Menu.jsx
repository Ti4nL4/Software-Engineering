import "./Menu.css";
import "./Header.css";
import "./MenuItem.css";

const Header = props => {


    return <div className='menu-header d-flex col-12'>
        <div className='btn-container p-1'>
            <button className='btn dark-blue text-white d-flex align-content-center'><i class="fas fa-home"></i></button>
        </div>
        <div className=''>
            <h3 className='fit-content'>Back To Home</h3>
        </div>
    </div>
}

const MenuItem = props => {

    return <div className='menu-item'>s</div>
}

const Menu = props => {


    return <div className='menu'>
        <Header />
        <MenuItem />
    </div>
}


export default Menu;