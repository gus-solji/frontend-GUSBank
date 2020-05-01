import React from 'react';
import './TransferContainer.scss';
import TransactionForm from '../TransactionFormAndView/TransactionForm';
import TransactionSelection from '../TransactionFormAndView/TransactionSelection';

const TransferContainer = ({history}) => {
    return ( 
        <div className="container">
            <div className="row">
                <div className="transfer-container">
                   {/* <TransactionSelection></TransactionSelection> */}
                   <TransactionForm history={history}></TransactionForm>
                </div>
            </div>
        </div>
    );
}
 
export default TransferContainer;