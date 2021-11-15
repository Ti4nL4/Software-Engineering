import MenuPage from "./pages/MenuPage/MenuPage";
import FoodProvider from "./context/FoodManagement";
import FormSignUp from "./Component/SignUp/FormSignUp"
import ManageProduct from "./Component/Admin/ManageProduct";
// import AddProduct from "./Component/Admin/AddProduct/AddProduct"
function App() {
  return (
    <FoodProvider>
    <MenuPage />
         {/* <FormSignUp />
            <ManageProduct /> */}
     </FoodProvider>

  );
}

export default App;
