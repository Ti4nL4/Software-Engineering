import { Provider } from 'react-redux';
import { Login } from './component/user/login'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from './store'
import { ForgotPassword } from './component/user/forgotpassword';
import { ResetPassword } from './component/user/resetpassword';


function App() {
  return (
    <Provider store={store}>
    <Router>
    <Routes>
      <Route exact path="/reset/:token" element={<ResetPassword />}></Route>
      <Route exact path="/forgot" element={<ForgotPassword />}></Route>
      <Route exact path="/" element={<Login />}></Route>
    </Routes>
    </Router>
    </Provider>
  );
}

export default App;
