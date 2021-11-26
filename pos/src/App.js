import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import ReportProduct from './pages/ReportProduct'
//import Header from './components/Header';
// import Datepick from './components/Datepick'
// import Sidebar from './components/topbar/Topbar'
// import BasicDateRangePicker from './components/Datepick'
 import Login from './components/Login'
function App() {
  return (
    <>
      
      <Router>
      
      {/* <Header/> */}
        <Switch>
          <Route path='/' exact component={Login}/>
          <Route path='/home' exact component={Home} />
          <Route path='/reports' exact component={Reports} />
          <Route path='/reportProduct'exact component={ReportProduct} />
        </Switch>
      </Router>
    </>
  );
  // return <Header/>
}

export default App;

