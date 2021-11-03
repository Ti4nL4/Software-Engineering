import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import ReportProduct from './pages/ReportProduct'
import Header from './components/Header';
// import Datepick from './components/Datepick'
// import Sidebar from './components/topbar/Topbar'
// import BasicDateRangePicker from './components/Datepick'
import Login from './components/Login'
function App() {
  return (
    <>
     
      <Router>
      
      <Header/>

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/reportProduct' component={ReportProduct} />
        </Switch>
      </Router>
    </>
  );
  // return <Header/>
}

export default App;

