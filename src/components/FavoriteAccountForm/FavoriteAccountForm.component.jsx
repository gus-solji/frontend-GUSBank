import React,{ useState } from 'react'
import './FavoriteAccount.scss';
import { useAlert } from "react-alert";
import { KEY_USERID,POST_FAVORITE_ACCOUNTS_URL } from '../../constFile';
import Axios from 'axios';

const FavoriteAccountForm = ({history}) => {

    const alert = useAlert();
    const [newFavoriteAccount, setNewFavoriteAccount] = useState({ownerName: '', accountNumber: '',bankName:'', userId: '', currency:''});
   
    const handleChange = e => {
        setNewFavoriteAccount({
            ...newFavoriteAccount,
            [e.target.name] : e.target.value
        })
    }

    const {ownerName,accountNumber,bankName} = newFavoriteAccount;

    const submitFavoriteAccount = e => {
        e.preventDefault();

        if(ownerName.trim() === '' || accountNumber.trim() === '' || bankName.trim() === ''){
            alert.error('Empty inputs!!');

            return;
        }
    
        newFavoriteAccount.currency = 'Colones'
        newFavoriteAccount.userId = JSON.parse(sessionStorage.getItem(KEY_USERID));

        //call the post method
        postFavoriteNewAccount(newFavoriteAccount);    

        setNewFavoriteAccount({ownerName: '', accountNumber: '',bankName:'', userId: '', currency:''})
    }

    
    const postFavoriteNewAccount = newFavoriteAccount => {

        const url = POST_FAVORITE_ACCOUNTS_URL;

        Axios.post(url, newFavoriteAccount)
        .then(res => {
          console.log(res);
          console.log(res.data);

          alert.success('Account created!!');

          history.push('/dashboard');

        }).catch(error => console.log(error))


    }

    return ( 
        <div className="col-md-4 content-form">
              <form onSubmit={submitFavoriteAccount}>
                        <h2>Add favorite account</h2>
                       
                        <div className="input-group mb-3">
                            <label>Owner Name</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1"><i className="las la-user-circle"></i></span>
                                </div>
                                <input onChange={handleChange} type="text" name="ownerName" className="form-control" placeholder="Owner Name" ></input>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <label>Account Number</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1"><i className="las la-hashtag"></i></span>
                                </div>
                                <input onChange={handleChange} type="text" name="accountNumber" className="form-control" placeholder="Account number" ></input>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <label>Bank name</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1"><i className="las la-university"></i></span>
                                </div>
                                <input onChange={handleChange} type="text" name="bankName" className="form-control" placeholder="Bank Name"></input>
                            </div>
                        </div>
                        <div className="input-group login-form-container__form-content">
                            <button type="submit" className="btn btn-md btn-block login-form-container__form-content-bg">Save Account</button>
                        </div>
                    </form>
        </div>
    );
}
 
export default FavoriteAccountForm;