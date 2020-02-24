import React from 'react';
import './App.scss';
import HomePage from './pages/HomePage/HomePage.component';
import Navbar from './components/NavBar/NavBar.component';
import { BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage.component';
import AboutUs from './pages/AboutUsPage/AboutUsPage.component';
import RegisterPage from './pages/RegisterPage/RegisterPage.component';

function App() {
  return (
    
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route path="/" exact={true} component={HomePage}/>
            <Route path="/signin" exact={true} component={LoginPage}/>
            <Route path="/about-us" exact={true} component={AboutUs}/>
            <Route path="/register" exact={true} component={RegisterPage}/>
          </Switch>
          
        </Router>
  );
}

export default App;
