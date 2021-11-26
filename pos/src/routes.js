import MenuPage from "./pages/MenuPage/MenuPage";
import CheckoutPage from "./pages/Checkout/CheckoutPage";
import Admin from "./Admin/Dashboard/index"
import AdminProduct from './Admin/ManageProduct/ManageProduct'
import AdminCustomer from './Admin/ManageCustomer/ManageCustomer'
import AccountAdmin from './Admin/Account/Account'
import Statistics from './Admin/Statistics'
import Login from './components/Login'
import Reports from './pages/Reports'
import ReportProduct from './pages/ReportProduct'
import Loginuser from './component/user/login'
// eslint-disable-next-line import/no-anonymous-default-export
export default  [

    {
        path: '/checkout',
        exact: true,
        public: true,
        component: <CheckoutPage />
    },
    {
        path: '/menu',
        exact: true,
        public: true,
        component: <MenuPage />
    },
    {
        path: '/',
        exact: true,
        public: true,
        component: <Loginuser />
    },
    {
        path: '/admin',
        exact: true,
        public: true,
        component: <Admin />
    },
    {
        path: '/admin/product',
        exact: true,
        public: true,
        component: <AdminProduct />
    },
    {
        path: '/admin/customer',
        exact: true,
        public: true,
        component: <AdminCustomer />
    }, 
    {
        path: '/admin/account',
        exact: true,
        public: true,
        component: <AccountAdmin />
    },
    {
        path: '/admin/statistics',
        exact: true,
        public: true,
        component: <Statistics />
    },
    {
        path: '/admin/login',
        exact: true,
        public: true,
        component: <Login />
    },
    {
        path: '/admin/report',
        exact: true,
        public: true,
        component: <Reports />
    },
    {
        path: '/admin/reportproduct',
        exact: true,
        public: true,
        component: <ReportProduct />
    }
];
