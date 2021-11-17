import {BrowserRouter, Routes, Route} from 'react-router-dom';
import FoodProvider from "./context/FoodManagement";
import routes from "./routes";

function App() {
  return (
    <FoodProvider>
    <BrowserRouter>
      
      <Routes>

      {
        [
        ...routes.map(route => 
          <Route exact path={route.path} element={route.component}></Route>
        )
        ]
      }

      </Routes>
      </BrowserRouter>
      </FoodProvider>
     
  );
}

export default App;
