import React from 'react'
import TransactionsTable from '../TransactionsTable/TransactionTable.component';


const AccountDetail = ({transactions}) => {

    console.log(transactions);

    while(transactions === undefined){
        return(
            <div className="myaccounts-container">
                <h1>cargando....</h1>
            </div>
        )
    }
    
    return ( 
        
        <div className="myaccounts-container">
            {
                transactions  === undefined ? <h1>cargando....</h1>:
                <TransactionsTable transactions={transactions}></TransactionsTable>
            }
        </div>
    );
}
 
export default AccountDetail;