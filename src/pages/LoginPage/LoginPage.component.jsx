import React, { Fragment } from 'react'
import './LoginPage.scss';
import LoginForm from '../../components/Login/LoginForm.component';


const LoginPage = () => {
    return ( 
        <Fragment>
           <div className="container-fluid">
                <div className="row login-container">
                    <div className="col-md-6 login-container__img">
                        <img className="login-container__img-size" src="assets/img/transfer.svg" alt="login img"/>
                    </div>
                    <LoginForm></LoginForm>
                </div>
           </div>
        </Fragment>

    );
}
 
export default LoginPage;
