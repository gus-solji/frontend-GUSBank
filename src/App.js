import React from 'react';
import './App.scss';
import HomePage from './pages/HomePage/HomePage.component';
// import Navbar from './components/NavBar/NavBar.component';
import { BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage.component';
import AboutUs from './pages/AboutUsPage/AboutUsPage.component';
import RegisterPage from './pages/RegisterPage/RegisterPage.component';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { positions, Provider } from "react-alert";
import AlertTemplate from 'react-alert-template-basic';
import ErrorPage from './pages/ErrorPage/ErrorPage.component';
import CreateAccount from './components/CreateAccount/CreateAccount.component';

const options = {
  timeout: 4000,
  position: positions.TOP_RIGHT
};

function App() {
  return (
      <Provider template={AlertTemplate} {...options}>
        <Router>
          <Switch>
            <Route path="/" exact={true} component={HomePage}/>
            <Route path="/signin" exact={true} component={LoginPage}/>
            <Route path="/about-us" exact={true} component={AboutUs}/>
            <Route path="/register" exact={true} component={RegisterPage}/>
            <ProtectedRoute  path="/dashboard" component={DashboardPage}/>
            <Route path="*" component={ErrorPage}/>
          </Switch>
        </Router>
      </Provider>
  );
}

export default App;
