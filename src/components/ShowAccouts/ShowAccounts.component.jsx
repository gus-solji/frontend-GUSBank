import React from 'react';
import './ShowAccounts.scss';
import { Link } from 'react-router-dom';
import AccountsList from '../AccountsList/AccountsList';


const ShowAccounts = ({accounts}) => {

    return ( 
        <div className="myaccounts-container">
            <div className="myaccounts-container__header">
                <div className="myaccounts-container__header-left">
                    <h4 className="myaccounts-container__header-left-title"><i className="las la-money-bill myaccounts-container__header-left-icon"></i>Bank Accounts</h4>
                </div>
                <div className="myaccounts-container__header-rigth">
                    <Link to="/dashboard/create-account">New Account</Link>
                </div>
            </div>
            <div className="myaccounts-container__list">
                <AccountsList accounts={accounts}></AccountsList>
            </div>
        </div>
     );
}
 
export default ShowAccounts;