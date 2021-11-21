import MenuPage from "./pages/MenuPage/MenuPage";
import FoodProvider from "./context/FoodManagement";
import FormSignUp from "./Component/SignUp/FormSignUp"
import HomePageAdmin from './Admin/ManageProduct/ManageProduct'
// import AddProduct from "./Component/Admin/AddProduct/AddProduct"
function App() {
  return (
    <FoodProvider>
    {/* //   <MenuPage /> */}
         {/* <FormSignUp /> */}
            <HomePageAdmin />
     </FoodProvider>

  );
}

export default App;
