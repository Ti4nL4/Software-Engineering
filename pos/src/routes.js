import MenuPage from "./pages/MenuPage/MenuPage";
import CheckoutPage from "./pages/Checkout/CheckoutPage";
import Admin from "./Admin/Dashboard/index"
import AdminProduct from './Admin/ManageProduct/ManageProduct'
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
        component: <MenuPage />
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
    }
];
