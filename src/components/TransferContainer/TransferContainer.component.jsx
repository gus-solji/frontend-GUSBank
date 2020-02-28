import React from 'react';
import './TransferContainer.scss';
import TransactionForm from '../TransactionFormAndView/TransactionForm';
import TransactionSelection from '../TransactionFormAndView/TransactionSelection';

const TransferContainer = () => {
    return ( 
        <div className="container">
            <div className="row">
                <div className="transfer-container">
                   {/* <TransactionSelection></TransactionSelection> */}
                   <TransactionForm></TransactionForm>
                </div>
            </div>
        </div>
    );
}
 
export default TransferContainer;