import {BrowserRouter, Routes, Route} from 'react-router-dom';
import FoodProvider from "./context/FoodManagement";
import { Provider } from 'react-redux'
import Navbar from './Component/Navbar/Navbar';
import Cart from './Component/Cart/Cart';
import routes from "./routes";
import store from './store'
function App() {
  return (
    <Provider store={store}>
    <FoodProvider>
    <BrowserRouter>
        {/* <div className = 'row p-0 m-0'>
            <Navbar />
        </div> */}
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
     </Provider>
  );
}

export default App;

