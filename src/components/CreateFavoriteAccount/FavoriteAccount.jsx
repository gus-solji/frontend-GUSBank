import React,{ useState } from 'react'
import './FavoriteAccount.scss';
import FavoriteAccountForm from '../FavoriteAccountForm/FavoriteAccountForm.component';

const FavoriteAccount = () => {
    return ( 
        <div className="container">
            <div className="row">
                <div className="favorite-account-container">
                    <FavoriteAccountForm></FavoriteAccountForm>
                </div>
            </div>
        </div>
     );
}
 
export default FavoriteAccount;