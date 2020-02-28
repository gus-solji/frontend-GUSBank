import React, { Fragment } from 'react'
import RegisterForm from '../../components/RegisterForm/RegisterForm.component'
import NavBar from '../../components/NavBar/NavBar.component';

const RegisterPage = ({history}) => {
    return ( 
        <Fragment>
            <NavBar></NavBar>
            <div className="container">
                <RegisterForm history={history}></RegisterForm>
            </div>
        </Fragment>
        
    );
}
 
export default RegisterPage;