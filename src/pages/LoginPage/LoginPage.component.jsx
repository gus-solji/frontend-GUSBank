import React, { Fragment, useState, useEffect } from 'react'
import './LoginPage.scss';
import LoginForm from '../../components/Login/LoginForm.component';
import NavBar from '../../components/NavBar/NavBar.component';



const LoginPage = ({history}) => {
    return ( 
        <Fragment>
            <NavBar></NavBar>
           <div className="container-fluid">
                <div className="row login-container">
                    <div className="col-md-6 login-container__img">
                        <img className="login-container__img-size" src="assets/img/transfer.svg" alt="login img"/>
                    </div>
                    <LoginForm history={history}></LoginForm>
                </div>
           </div>
        </Fragment>

    );
}
 
export default LoginPage;
