import React from 'react'
import './RegisterForm.scss';

const RegisterForm = () => {
    return ( 
        <div className="col-md-12 register-form-container">
            <h2 className="register-form-container__title">Register</h2>
            <form className="register-form-container__form">
              <div class="form-row">
                <div class="form-group col-md-6">
                      <label>Name</label>
                      <div className="input-group">
                          <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1">@</span>
                          </div>
                          <input type="text" className="form-control" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1" required></input>
                      </div>
                </div>
                <div class="form-group col-md-6">
                <label>Lastname</label>
                      <div className="input-group">
                          <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1">@</span>
                          </div>
                          <input type="text" className="form-control" placeholder="Lastname" aria-label="Lastname" aria-describedby="basic-addon1" required></input>
                      </div>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                      <label>Email</label>
                      <div className="input-group">
                          <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1">@</span>
                          </div>
                          <input type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" required></input>
                      </div>
                </div>
                <div class="form-group col-md-6">
                <label>Id Number</label>
                      <div className="input-group">
                          <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1">@</span>
                          </div>
                          <input type="text" className="form-control" placeholder="Id Number" aria-label="idnumber" aria-describedby="basic-addon1" required></input>
                      </div>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                      <label>Password</label>
                      <div className="input-group">
                          <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1">@</span>
                          </div>
                          <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" required></input>
                      </div>
                </div>
                <div class="form-group col-md-6">
                <label>Confirm password</label>
                      <div className="input-group">
                          <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1">@</span>
                          </div>
                          <input type="password" className="form-control" placeholder="Confirm Password" aria-label="Confirm  Password" aria-describedby="basic-addon1" required></input>
                      </div>
                </div>
              </div>     
  
              <div class="form-row">
                <div class="form-group col-md-4">
                      <label>Phone number</label>
                      <div className="input-group">
                          <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1">@</span>
                          </div>
                          <input type="text" className="form-control" placeholder="Phone Number" aria-label="Phone Number" aria-describedby="basic-addon1" required></input>
                      </div>
                </div>
                <div class="form-group col-md-4">
                      <label>Birth Date</label>
                      <div className="input-group">
                          <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1">@</span>
                          </div>
                          <input type="text" className="form-control" placeholder="Id Number" aria-label="Id Number" aria-describedby="basic-addon1" required></input>
                      </div>
                </div>
                <div class="form-group col-md-4">
                <label>Gender</label>
                      <div className="input-group">
                          <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1">@</span>
                          </div>
                          <select class="custom-select" id="inputGroupSelect01">
                              <option selected>Choose...</option>
                              <option value="M">Male</option>
                              <option value="F">Female</option>
                              <option value="Un">Undefined</option>
                          </select>
                      </div>
                </div>
              </div>

              <div class="form-row"> 
              
              <div class="form-group col-md-2">
                <label>Province</label>
                      <div className="input-group">
                          <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1">@</span>
                          </div>
                          <select class="custom-select" id="inputGroupSelect01">
                              <option selected>Choose...</option>
                              <option value="Cartago">Cartago</option>
                              <option value="San Jose">San Jose</option>
                              <option value="Alajuela">Alajuela</option>
                              <option value="Limon">Limon</option>
                              <option value="Puntarenas">Puntarenas</option>
                              <option value="Heredia">Heredia</option>
                              <option value="Guanacaste">Guanacaste</option>
                          </select>
                      </div>
                </div>
             
                <div class="form-group col-md-10">
                      <label>Address</label>
                      <div className="input-group">
                          <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1">@</span>
                          </div>
                          <input type="text" className="form-control" placeholder="Address" aria-label="Address" aria-describedby="basic-addon1" required></input>
                      </div>
                </div>
  
              </div>     

             
              <button className="register-form-container__form-bg btn btn-lg btn-block" type="submit" >Register</button>
          </form>
        </div>
      );
}
 
export default RegisterForm;