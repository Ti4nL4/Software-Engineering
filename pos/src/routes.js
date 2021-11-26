import MenuPage from "./pages/MenuPage/MenuPage";
import CheckoutPage from "./pages/Checkout/CheckoutPage";

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
    }
];
