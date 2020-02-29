import React,{ useState } from 'react';
import './CreateAccountForm.scss';
import { useAlert } from "react-alert";
import { POST_ACCOUNT_URL,KEY_USERID } from '../../constFile';
import Axios from 'axios';


const CreateAccountForm = ({history}) => {

    const alert = useAlert();
    const [newAccount, setNewAccount] = useState(
        {
            currency: '', 
            description: '',
            ibanNumber: '',
            bankNumber: '',
            createdDate: '',
            minimumBalance:'',
            interest: '',
            userId:'',
            balance:''
        }
        );

    const handleChange = e => {
        setNewAccount({
            ...newAccount,
            [e.target.name] : e.target.value
        })
    } 

    const {currency,description} = newAccount;

    const submitAccount = e => {
        e.preventDefault();

        if(currency === '' || description === ''){
            alert.error('Empty inputs!!');

            return;
        }

        //set other values
        const date =  new Date();
        const day = JSON.stringify(date.getDay());
        const year = JSON.stringify(date.getFullYear());
        const hour = date.getTime();
        const number = JSON.stringify( parseInt(1 + (Math.random() * (100000-1))));
    
        newAccount.bankNumber = number;
        newAccount.createdDate = date;

        if(currency === 'Dollars'){
            newAccount.minimumBalance = 50;
            newAccount.ibanNumber ='USD'+number;
        }else{
            newAccount.minimumBalance = 50000;
            newAccount.ibanNumber ='CR'+number;
        }

        newAccount.interest = 0;
        newAccount.balance = 0;
        newAccount.userId = JSON.parse(sessionStorage.getItem(KEY_USERID));

        //call the post method
        postNewAccount(newAccount);    
       
    }


    const postNewAccount = newAccount => {

        const url = POST_ACCOUNT_URL;

        Axios.post(url, newAccount)
        .then(res => {
          console.log(res);
          console.log(res.data);

          alert.success('Account created!!');

          history.push('/dashboard');

        }).catch(error => console.log(error))


    }

    return ( 
        <div className="container-fluid">
            <div className="row create-account">
                <div className="col-md-6 create-account__img">
                        <img className="create-account__img-photo" src="/assets/img/money.svg" alt="account img"></img>
                </div>
                <div className="col-md-6 create-account__form">
                    <form id='form' onSubmit={submitAccount}>
                        <h2>Account Opening</h2>
                        <div className="input-group mb-3">
                            <label>Currency</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1"><i className="las la-coins"></i></span>
                                </div>
                                <select onChange={handleChange} name="currency" className="custom-select" >
                                    <option defaultChecked>Choose...</option>
                                    <option defaultValue="colones">Colones</option>
                                    <option defaultValue="dollars">Dollars</option>
                                </select>
                            </div>
                        </div>
                        <div className="input-group">
                            <label>Account Description</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1"><i className="las la-info"></i></span>
                                </div>
                                <input onChange={handleChange} type="text" name="description" className="form-control" placeholder="Description" aria-label="Description" aria-describedby="basic-addon1" ></input>
                            </div>
                        </div>
                        <div className="input-group login-form-container__form-content">
                            <button type="submit" className="btn btn-md btn-block login-form-container__form-content-bg">Save Account</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    );
}
 
export default CreateAccountForm;