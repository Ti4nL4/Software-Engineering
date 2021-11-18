import {BrowserRouter, Routes, Route} from 'react-router-dom';
import FoodProvider from "./context/FoodManagement";
import Navbar from './Component/Navbar/Navbar';
import Cart from './Component/Cart/Cart';
import routes from "./routes";

function App() {
  return (
    <FoodProvider>
    <BrowserRouter>
        <div className = 'fixed-top col-12'>
            <Navbar />
        </div>
        <Cart />
      <Routes>
      
      {
        [
        ...routes.map((route, index) => 
          <Route exact path={route.path} element={route.component} key={index}></Route>
        )
        ]
      }

      </Routes>
      </BrowserRouter>
      </FoodProvider>
     
  );
}

export default App;
