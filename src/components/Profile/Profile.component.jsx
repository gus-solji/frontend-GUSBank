import React, {useState,useEffect} from 'react';
import './Profile.scss';
import { GET_USER,KEY_USERID,PUT_NEW_PASSWORD} from '../../constFile';
import InfoUser from '../InfoUser/InfoUser.component';
import Axios from 'axios';
import { useAlert } from "react-alert";


const Profile = () => {
     
    const alert = useAlert();
    const [user, setUser] = useState({});
    const [changePassword,setChangePassword] = useState(false);
    const [showButton,setShowButton] = useState(true);
    const [pass,setPass] = useState({password: ''});

    useEffect(() => {
        
        getUser();

    },[]);

    const getUser = () => {
        const url = GET_USER;
        const userId = JSON.parse(sessionStorage.getItem(KEY_USERID));
        Axios.get(`${url}${userId}`)
        .then(res => { 
            // console.log(res)
            setUser(res.data)
        }
        )
        .catch(error => console.log(error));
    }

    const showPasswordForm = () => {
        setChangePassword(true);
        setShowButton(false);
    }

    const {password} = pass;

    const onSubmit = e => {
        e.preventDefault();
        
        if(password.trim() === ''){
            alert.error('Empty password field');
            return;
        }
        
        const currentPassword = user.password;
        user.password = pass.password;

        postNewPassword(currentPassword,user);

        setShowButton(true);
        setChangePassword(false);
    }

    const handleChange = e => {
        setPass({
            ...pass,
            [e.target.name] : e.target.value
        })
    }

    const postNewPassword = (currentPassword,user) =>{
        const url = PUT_NEW_PASSWORD;

        Axios.put(`${url}${currentPassword}`, user)
        .then(res => {
          console.log(res);
          console.log(res.data);

          alert.success('Password updated!!');


        }).catch(error => console.log(error))
    }

    return (  
        <div className="container-fluid">
        <div className="row create-account">
            <div className="col-md-6 create-account__img">
                    <img className="create-account__img-photo" src="/assets/img/profile.svg" alt="account img"></img>
            </div>
            <div className="col-md-6 create-account__form">
                <InfoUser user={user}></InfoUser>
                {
                    showButton ? <button type="button" onClick={showPasswordForm} className="btn btn-md  login-form-container__form-content-bg">Change Password</button> : null
                }
                {
                    changePassword ? 
                    <div className="login-form-container__form">
                    <form className="login-form-container__form-form" onSubmit={ onSubmit }>
                    <div className="input-group login-form-container__form-content">
                        <label>Actual password</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1"><i className="las la-key"></i></span>
                            </div>
                            <input onChange={handleChange} type="password"  className="form-control" placeholder="Password" ></input>
                        </div>
                    </div>
                    <div className="input-group login-form-container__form-content">
                        <label>New Password</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1"><i className="las la-key"></i></span>
                            </div>
                            <input onChange={handleChange} type="password" name="password" className="form-control" placeholder="Password" ></input>
                        </div>
                    </div>
                    <div className="input-group login-form-container__form-content">
                        <button type="submit" className="btn btn-md btn-block login-form-container__form-content-bg">Change Password</button>
                    </div>
                    </form>
                </div>
                    :
                    null
                }
            </div>
        </div>
    </div>
    );
}
 
export default Profile;