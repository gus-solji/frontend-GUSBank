import React, {useState,useEffect} from 'react';
import './Transaction.scss';
import { KEY_USERID,GET_OWN_ACCOUNTS,GET_ACCOUNTS_USER_URL,GET_FAVORITE_ACCOUNTS_URL,GET_ACCOUNT_BY_ACCOUNT} from '../../constFile';
import Axios from 'axios';

const TransactionForm = () => {

    const [ownAccount, setOwnAccounts] = useState(false);
    const [otherAccount, setOtherAccounts] = useState(false);
    const [myAccount,setMyAccounts] = useState([]);
    const [allMyAccounts,setAllMyAccounts] = useState([]);
    const [favoritesAccounts,setFavoritesAccounts] = useState([]);
    const [movement,setMovement] = useState({originAccount: '', balance: '', finalAccount: '',description:''});
    const [isDis ,setIsDis] = useState(true);
    const [originAccount,setOriginAccount] = useState({});

    useEffect(() => {
        
        getOwnAccounts();
        getAllAccounts();
        getFavoritesAccounts();

    },[]);

    const handleChange = e => {
        setMovement({
            ...movement,
            [e.target.name] : e.target.value
        })
    }
   
    const getOwnAccounts = () => {
        const url = GET_OWN_ACCOUNTS;
        const userId = JSON.parse(sessionStorage.getItem(KEY_USERID));
        Axios.get(`${url}${userId}`)
        .then(res => { 
            console.log(res)
            setMyAccounts(res.data)
        }
        )
        .catch(error => console.log(error));
    }
 
    const getAllAccounts = () => {
        const url = GET_ACCOUNTS_USER_URL;
        const userId = JSON.parse(sessionStorage.getItem(KEY_USERID));
        Axios.get(`${url}${userId}`)
        .then(res => { 
            console.log(res)
            setAllMyAccounts(res.data)
        }
        )
        .catch(error => console.log(error));
    }
 
    const getFavoritesAccounts = () => {
        const url = GET_FAVORITE_ACCOUNTS_URL;
        const userId = JSON.parse(sessionStorage.getItem(KEY_USERID));
        Axios.get(`${url}${userId}`)
        .then(res => { 
            console.log(res)
            setFavoritesAccounts(res.data)
        }
        )
        .catch(error => console.log(error));
    }

    const changeOwnAccount = () => {
        setOwnAccounts(true);
        setOtherAccounts(false);
    }

    const changeFavAccount = () => {
        setOtherAccounts(true);
        setOwnAccounts(false);
    }
 
    const getTransactionOriginAccount = () => {
        const url = GET_ACCOUNT_BY_ACCOUNT;
        Axios.get(`${url}${movement.originAccount}`)
        .then(res => { 
            console.log(res)
            setOriginAccount(res.data)
        }
        )
        .catch(error => console.log(error));
    }

    const submitTransaction =  e => {
        e.preventDefault();

        getTransactionOriginAccount();

        setMovement({
            originAccount: '', balance: '', finalAccount: '',description:''
        })
    }


    return ( 
        <div className="col-md-4 content-form">
        <h2>Transaction</h2>      
        <div className="buttons-container mb-3">
        <button type="button" onClick={changeOwnAccount} className="btn btn-md  login-form-container__form-content-bg"><i className="las la-crown ico"></i> Own accounts</button>
        <button type="button" onClick={changeFavAccount} className="btn btn-md  login-form-container__form-content-bg"><i className="las la-star ico"></i> Fav accounts</button>
        </div>
        <form onSubmit={submitTransaction}>              
                  <div className="input-group mb-3">
                      <label>Origin Account</label>
                      <div className="input-group">
                          <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1"><i className="las la-user-circle"></i></span>
                          </div>
                          <select 
                           className="form-control"
                           name="originAccount"
                           onChange={handleChange}
                           >
                               <option value="">--Select account--</option>
                               {
                                   myAccount.map(account => (
                                       <option key={account.id} value={account.ibanNumber}>{account.ibanNumber}</option>
                                   ))
                               }
                           </select>
                      </div>
                  </div>
                    {     ownAccount ?
                            
                            <div className="input-group mb-3">
                                <label>Destination Account</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1"><i className="las la-user-circle"></i></span>
                                    </div>
                                    <select 
                                    className="form-control"
                                    name="finalAccount"
                                    onChange={handleChange}
                                    >
                                        <option value="">--Select account--</option>
                                        {
                                            allMyAccounts.map(account => (
                                                <option key={account.id} value={account.ibanNumber}>{account.ibanNumber}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>

                            :
                            null
                    }
                    {     otherAccount ?
                            
                            <div className="input-group mb-3">
                                <label>Favorite Account</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1"><i className="las la-user-circle"></i></span>
                                    </div>
                                    <select 
                                    className="form-control"
                                    name="finalAccount"
                                    onChange={handleChange}
                                    >
                                        <option value="">--Select account--</option>
                                        {
                                            favoritesAccounts.map(account => (
                                                <option key={account.id} value={account.accountNumber}>{account.ownerName}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>

                            :
                            null
                    }
                  <div className="input-group mb-3">
                      <label>Amount</label>
                      <div className="input-group">
                          <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1"><i className="las la-hashtag"></i></span>
                          </div>
                          <input onChange={handleChange} type="number" name="balance" className="form-control" placeholder="Ammount" ></input>
                      </div>
                  </div>
                  <div className="input-group mb-3">
                      <label>Description</label>
                      <div className="input-group">
                          <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1"><i className="las la-info-circle"></i></span>
                          </div>
                          <input onChange={handleChange} type="text" name="description" className="form-control" placeholder="Description"></input>
                      </div>
                  </div>
                  <div className="input-group transaction-form-container">
                      <button type="submit" className="btn btn-md login-form-container__form-content-bg transaction-form-container__button" disabled={isDis}>Cancel</button>
                  </div>
              </form>
        </div>
    );
}
 
export default TransactionForm;