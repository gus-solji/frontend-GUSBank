import React, {useState,useEffect} from 'react';
import './Transaction.scss';
import { POST_OWN_MOVEMENT,POST_MOVEMENT, KEY_RATE,KEY_USERID,GET_OWN_ACCOUNTS,GET_ACCOUNTS_USER_URL,GET_FAVORITE_ACCOUNTS_URL,GET_ACCOUNT_BY_ACCOUNT} from '../../constFile';
import Axios from 'axios';
import { useAlert } from "react-alert";

const TransactionForm = ({history}) => {

    console.log(history);

    const alert = useAlert();
    const [ownAccount, setOwnAccounts] = useState(false);
    const [otherAccount, setOtherAccounts] = useState(false);
    const [myAccount,setMyAccounts] = useState([]);
    const [allMyAccounts,setAllMyAccounts] = useState([]);
    const [favoritesAccounts,setFavoritesAccounts] = useState([]);
    const [movement,setMovement] = useState({originAccount: '', balance: '', finalAccount: '',description:''});
    const [isDisable ,setIsDisable] = useState(true);
    const [isDisableOA ,setIsDisableOA] = useState(false);
    const [isDisableFA ,setIsDisableFA] = useState(false);
    const [verify, setVerify] = useState(false);
    const [originAccountInfo,setOriginAccountInfo] = useState({});
    const [finalMovement,setFinalMovement] = useState({});
    const exchangeRate = JSON.parse(localStorage.getItem(KEY_RATE));
    const sell = parseFloat(exchangeRate.venta);
    const buy = parseFloat(exchangeRate.compra);
    var amount;

    const getOriginalStates = () => {
        setOwnAccounts(false);
        setOtherAccounts(false);
        setIsDisable(true);
        setIsDisableFA(false);
        setIsDisableOA(false);
        setVerify(false);
    }

    useEffect(() => {
        
        getOwnAccounts();
        getAllAccounts();
        getFavoritesAccounts();

    },[]);

    const {originAccount,finalAccount,balance,description} = movement;

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
        setIsDisableOA(true);
        setIsDisableFA(false);
        
    }

    const changeFavAccount = () => {
        
        setOtherAccounts(true);
        setOwnAccounts(false);
        setIsDisableOA(false);
        setIsDisableFA(true);
    }
 
    const getTransactionOriginAccount = () => {
        const url = GET_ACCOUNT_BY_ACCOUNT;
        Axios.get(`${url}${movement.originAccount}`)
        .then(res => { 
            console.log(res)
            setOriginAccountInfo(res.data)
        }
        )
        .catch(error => console.log(error));
    }

    const saveTransaction = finalMovement => {
        const url = POST_MOVEMENT;
        Axios.post(url,finalMovement)
        .then(res => { 
            console.log(res)
            alert.success('Good transaction');
            history.push('/dashboard');
        }
        )
        .catch(error => console.log(error));
    }

    const saveOwnTransaction = finalMovement => {
        const url = POST_OWN_MOVEMENT;
        Axios.post(url,finalMovement)
        .then(res => { 
            console.log(res)
            alert.success('Good transaction');
            history.push('/dashboard');
        }
        )
        .catch(error => console.log(error));
    }

    const submitTransaction =  e => {
        e.preventDefault();

        if(originAccount === finalAccount){
            alert.error('Accounts are the same,change one');
            return;
        }


        if(finalAccount.includes('CR') || finalAccount.includes('USD')){

            if(balance.trim() === '' || description.trim() === ''){
                alert.error('Empty amount or description');
                return;
            }

            if(movement.originAccount.includes('CR') && movement.finalAccount.includes('CR')){
               
                if(parseFloat(movement.balance) > originAccountInfo.balance){
                    alert.error('Not enough funds');
                    return;
                }else{
                    amount = parseFloat(movement.balance);
                    console.log(amount);

                    finalMovement.originAccount = movement.originAccount;
                    finalMovement.finalAccount = movement.finalAccount;
                    finalMovement.detail = movement.description;
                    finalMovement.balance = amount;
                    const date = new Date();
                    finalMovement.date = date;
                    finalMovement.accountId = originAccountInfo.id;
                    console.log(finalMovement);
                    saveOwnTransaction(finalMovement);
              }  
            }
 
            if(movement.originAccount.includes('CR') && movement.finalAccount.includes('USD')){
                if(parseFloat(movement.balance) > originAccountInfo.balance){
                    alert.error('Not enough funds');
                    return;
                }else{
                    amount = parseFloat(movement.balance);
                    console.log(amount);

                    finalMovement.originAccount = movement.originAccount;
                    finalMovement.finalAccount = movement.finalAccount;
                    finalMovement.detail = movement.description;
                    finalMovement.balance = parseFloat((amount/buy).toFixed(2));
                    const date = new Date();
                    finalMovement.date = date;
                    finalMovement.accountId = originAccountInfo.id;
                    console.log(finalMovement);
                    saveOwnTransaction(finalMovement);
              }  
            }

            if(movement.originAccount.includes('USD') && movement.finalAccount.includes('CR')){
                
                if(parseFloat(movement.balance) > originAccountInfo.balance){
                    alert.error('Not enough funds');
                    return;
                }else{
                    amount = parseFloat(movement.balance);
                    

                    finalMovement.originAccount = movement.originAccount;
                    finalMovement.finalAccount = movement.finalAccount;
                    finalMovement.detail = movement.description;
                    finalMovement.balance =(amount*buy).toFixed(2);
                    const date = new Date();
                    finalMovement.date = date;
                    finalMovement.accountId = originAccountInfo.id;
                    console.log(finalMovement);
                    saveOwnTransaction(finalMovement);
              }  
            }

            if(movement.originAccount.includes('USD') && movement.finalAccount.includes('USD')){
                console.log("Dolares a Dolares")
                amount = parseFloat(movement.balance);
            
                finalMovement.originAccount = movement.originAccount;
                finalMovement.finalAccount = movement.finalAccount;
                finalMovement.detail = movement.description;
                finalMovement.balance = amount;
                const date = new Date();
                finalMovement.date = date;
                finalMovement.accountId = originAccountInfo.id;
                saveOwnTransaction(finalMovement);
            }
            
        }else{
            if(movement.originAccount.includes('CR')){
                  if(parseFloat(movement.balance) > originAccountInfo.balance){
                        alert.error('Not enough funds');
                        return;
                  }else{
                        amount = parseFloat(movement.balance);
                        console.log(amount);

                        finalMovement.originAccount = movement.originAccount;
                        finalMovement.finalAccount = movement.finalAccount;
                        finalMovement.detail = movement.description;
                        finalMovement.balance = amount;
                        const date = new Date();
                        finalMovement.date = date;
                        finalMovement.accountId = originAccountInfo.id;
                        saveTransaction(finalMovement);
                  }  
            }else{
                    if(parseFloat(movement.balance) > originAccountInfo.balance){
                        alert.error('Not enough funds');
                        return;
                    }else{
                        amount = parseFloat(movement.balance * buy);
                        finalMovement.originAccount = movement.originAccount;
                        finalMovement.finalAccount = movement.finalAccount;
                        finalMovement.detail = movement.description;
                        finalMovement.balance = amount;
                        const date = new Date();
                        finalMovement.date = date;
                        finalMovement.accountId = originAccountInfo.id;
                        saveTransaction(finalMovement);
                    
                    }
            }
        }

        // setMovement({
        //     originAccount: '', balance: '', finalAccount: '',description:''
        // })
    }
    
    const verifyMethod = () => {

        if(originAccount === '' || finalAccount === ''){
            alert.error('Select accounts');
            return;
        }

        getTransactionOriginAccount();

        console.log(originAccountInfo);
        setVerify(true);
        setOwnAccounts(false);
        setOtherAccounts(false);
    }

    return ( 
        <div className="col-md-4 content-form">
        <h2>Transaction</h2>
        {  !verify ?
            <p>Click button to show the fav accounts or own accounts</p>
           : null  
        }      
        {
           !verify ? 
        <div className="buttons-container mb-3"> 
            <button type="button" onClick={changeOwnAccount} className="btn btn-md  login-form-container__form-content-bg" disabled={isDisableOA}><i className="las la-crown ico"></i> Own accounts</button>
            <button type="button" onClick={changeFavAccount} className="btn btn-md  login-form-container__form-content-bg" disabled={isDisableFA}><i className="las la-star ico"></i> Fav accounts</button>
        </div>
        : null
        }
        <form onSubmit={submitTransaction}>  
              {    
                ownAccount ?        
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
                  : null
                }
                {    
                otherAccount ?        
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
                  : null
                }
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
                    {
                        verify ? <div className="input-group mb-3">
                        <label>Origin account</label>
                        <div className="input-group">
                            <span>{movement.originAccount}</span>
                        </div>
                        </div>
                        :
                         null
                    }
                    {
                         verify ? <div className="input-group mb-3">
                         <label>Destination account</label>
                         <div className="input-group">
                             <span>{movement.finalAccount}</span>
                         </div>
                         </div>
                         :
                          null
                    }
                    {

                    }
                    { verify ?
                    <div className="input-group mb-3">
                        <label>Amount</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1"><i className="las la-comment-dollar"></i></span>
                            </div>
                            <input onChange={handleChange} type="number" name="balance" className="form-control" placeholder="Ammount" ></input>
                        </div>
                    </div>
                    : null
                    }
                    {
                        verify ?
                        <div className="input-group mb-3">
                                <label>Description</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1"><i className="las la-info-circle"></i></span>
                                    </div>
                                    <input onChange={handleChange} type="text" name="description" className="form-control" placeholder="Description"></input>
                                </div>
                        </div>
                        :
                        null
                    }
                    {
                    ownAccount ?
                    <div className="input-group transaction-form-container">
                        <button type="button" onClick={verifyMethod} className="btn btn-md btn-block login-form-container__form-content-bg transaction-form-container__button">Verify Information</button>
                    </div>
                    : null
                    }
                    {
                    otherAccount ?
                    <div className="input-group transaction-form-container">
                        <button type="button" onClick={verifyMethod} className="btn btn-md btn-block login-form-container__form-content-bg transaction-form-container__button">Verify Information</button>
                    </div>
                    : null
                    }
                    { verify ?
                    <div className="input-group transaction-form-container">                        
                            <button type="submit"  className="btn btn-md login-form-container__form-content-bg transaction-form-container__button" >Transfer</button>
                            <button type="button"  className="btn btn-md login-form-container__form-content-cancel transaction-form-container__button" onClick={getOriginalStates} >Cancel</button>
                    </div>
                    : null
                    }
              </form>
        </div>
    );
}
 
export default TransactionForm;