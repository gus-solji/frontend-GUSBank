import React, {useState} from 'react'
import './LoginForm.scss';
import { Link } from 'react-router-dom';
import auth from '../../auth';
import { LOGIN_URL ,KEY_TOKEN, KEY_USERID,KEY_USERNAME, LOG_URL} from '../../constFile';
import Axios from 'axios';
import { useAlert } from "react-alert";

const LoginForm = ({history}) => {

    const alert = useAlert();
    const [infoLogin,setLogin] = useState({ email: '', password: ''});
    const [loginError,setLoginError] = useState(false);
    const [userInfo,setUserInfo] = useState({name: '', id: ''});

    const {email,password} = infoLogin;

    const onSubmit = e => {
        e.preventDefault();

        //validate empty inputs
        if(email.trim() === '' || password.trim() === ''){
            
            alert.error("Empty fields");
            return;
        }

        
        postLogin(infoLogin);
        
    };

    const handleChange = e =>{
        setLogin({
            ...infoLogin,
            [e.target.name] : e.target.value
        })
    }
    
    const postLogin = (userInfo) => {
        const url = LOGIN_URL;
    
        Axios.post(url, userInfo)
        .then(res => {
          console.log(res);
          console.log(res.data);
          sessionStorage.setItem(KEY_TOKEN, JSON.stringify(res.data.jwt));
          sessionStorage.setItem(KEY_USERID, JSON.stringify(res.data.id));
          sessionStorage.setItem(KEY_USERNAME,JSON.stringify(res.data.name));


           auth.login( () => {
                history.push("/dashboard");
           });

        }).catch( error => {
            console.log(error.response);
            alert.error("Email or password don't match");
        });
    }

    return ( 
        <div className="col-md-6 login-form-container">

            <h3 className="login-form-container__title">Sign In</h3>
            
            <div className="login-form-container__form">
                <form className="login-form-container__form-form" onSubmit={ onSubmit }>
                <div className="input-group login-form-container__form-content">
                    <label>Email</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">@</span>
                        </div>
                        <input onChange={handleChange} type="email" name="email" className="form-control" placeholder="Email" ></input>
                    </div>
                </div>
                <div className="input-group login-form-container__form-content">
                    <label>Password</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">**</span>
                        </div>
                        <input onChange={handleChange} type="password" name="password" className="form-control" placeholder="Password" ></input>
                    </div>
                </div>
                <div className="input-group login-form-container__form-content">
                    <button type="submit" className="btn btn-md btn-block login-form-container__form-content-bg">Enter to GSJ Bank</button>
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