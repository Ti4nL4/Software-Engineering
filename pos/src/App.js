import MenuPage from "./pages/MenuPage/MenuPage";
import FoodProvider from "./context/FoodManagement";

function App() {
  return (
    <FoodProvider>
      <MenuPage />
      
    </FoodProvider>
  );
}

export default App;
