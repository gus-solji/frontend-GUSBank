import React,{useState} from 'react'
import './RegisterForm.scss';
import { useAlert } from "react-alert";
import { POST_USER } from '../../constFile';
import Axios from 'axios';
import auth from '../../auth';

const RegisterForm = ({history}) => {
     
    const alert = useAlert();
    const [register,setRegister] = useState({name:'',lastname:'', email:'', idCard:' ', address:'',birthDate:'' ,password:''});
    const [emailError,setEmailError] = useState(false);
    const [passwordError,setPasswordError] = useState(false);
    const [idCardError,setIdCardError] = useState(false);
    
    
    const handleChange = e => {
      setRegister({
        ...register,
        [e.target.name] : e.target.value
     })

        setEmailError(false);
        setIdCardError(false);
        setPasswordError(false);
    }
   
    const {name,lastname,email,idCard,birthDate,password,address} = register;

    const submitRegister = e => {
       e.preventDefault();

       if(!email.includes('@')){
          setEmailError(true);
       }

       if(idCard.length < 9){
         setIdCardError(true);
       }

       if(password.length < 8){
         setPasswordError(true);
       }

       if(password.trim() === '' || email.trim() === '' || name.trim() === '' || lastname.trim() === '' || birthDate === '' || address.trim() === '' || idCard.trim() === ''){
        alert.error('Info required');
       }
        
       postUser(register);

       setRegister({name:'',lastname:'', email:'', idCard:' ', address:'',birthDate:'' ,password:''});
    }

    const postUser = register => {
     
        const url = POST_USER;
    
        Axios.post(url, register)
        .then(res => {
          console.log(res);
          console.log(res.data);

           auth.login( () => {
                history.push("/signin");
           });


        }).catch( error => {
            console.log(error.response);
            alert.error(error.response.data);
        });
    
    }
   
    return ( 
        <div className="col-md-12 register-form-container">
            <h2 className="register-form-container__title">Register</h2>
            <form onSubmit={submitRegister} className="register-form-container__form">
              <div className="form-row">
                <div className="form-group col-md-6">
                      <label>Name</label>
                      <div className="input-group">
                          <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1"><i className="las la-user-circle"></i></span>
                          </div>
                          <input type="text" onChange={handleChange} className="form-control" name="name" placeholder="Name" ></input>
                      </div>
                </div>
                <div className="form-group col-md-6">
                <label>Lastname</label>
                      <div className="input-group">
                          <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1"><i className="las la-user-circle"></i></span>
                          </div>
                          <input type="text"  onChange={handleChange} name="lastname" className="form-control" placeholder="Lastname" ></input>
                      </div>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                      <label>Email</label>
                      <div className="input-group">
                          <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1">@</span>
                          </div>
                          <input   onChange={handleChange} name="email" className="form-control" placeholder="Email"  ></input>
                      </div>
                      { emailError ? <p className="error-message">Invalid mail</p> : null}
                </div>
                <div className="form-group col-md-6">
                <label>Id Number</label>
                      <div className="input-group">
                          <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1"><i className="las la-id-card"></i></span>
                          </div>
                          <input type="text"  onChange={handleChange} name="idCard" className="form-control" placeholder="Id Number"  ></input>
                      </div>
                      { idCardError ? <p className="error-message">Password must be 9 characters long</p> : null}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col-md-6">
                      <label>Password</label>
                      <div className="input-group">
                          <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1"><i className="las la-key"></i></span>
                          </div>
                          <input type="password"  onChange={handleChange} name="password" className="form-control" placeholder="Password"  ></input>
                      </div>
                      { passwordError ? <p className="error-message">Password must be 8 characters long</p> : null}
                </div>
                <div className="form-group col-md-6">
                      <label>Birth Date</label>
                      <div className="input-group">
                          <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1"><i className="las la-birthday-cake"></i></span>
                          </div>
                          <input type="date"  onChange={handleChange}  name="birthDate" className="form-control" ></input>
                      </div>
                </div>             
              </div>     
              <div className="form-row">              
               <div className="form-group col-md-12">
                      <label>Address</label>
                      <div className="input-group">
                          <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1"><i className="las la-map-marked"></i></span>
                          </div>
                          <textarea  onChange={handleChange}  className="form-control addres-text" name="address" placeholder="Address" ></textarea>
                      </div>
                </div>
  
            </div>     

            <button  className="register-form-container__form-bg btn btn-md" type="submit" >Register</button>
          </form>
        </div>
      );
}

export default RegisterForm;