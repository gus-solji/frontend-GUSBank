import React from 'react'
import './LoginForm.scss';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    return ( 
        <div className="col-md-6 login-form-container">
            <h3 className="login-form-container__title">Sign In</h3>
            
            <div className="login-form-container__form">
                <form className="login-form-container__form-form">
                <div className="input-group login-form-container__form-content">
                    <label>Email</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">@</span>
                        </div>
                        <input type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" required></input>
                    </div>
                </div>
                <div className="input-group login-form-container__form-content">
                    <label>Password</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">**</span>
                        </div>
                        <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" required></input>
                    </div>
                </div>
                <div className="input-group login-form-container__form-content">
                    <button type="button" className="btn btn-md btn-block login-form-container__form-content-bg">Enter to GSJ Bank</button>
                </div>
                </form>
                <div className="input-group login-form-container__form-content">
                    <Link className="input-group login-form-container__form-content-link" to="/register">I don´t have an account yet. Go to Register.</Link>
                </div>
            </div>
        </div>   
    );
}

export default LoginForm;