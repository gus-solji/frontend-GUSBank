import React from 'react';
import './AccountsList';
import AccountsTable from '../Table/AccountsTable.component';

const AccountsList = ({accounts}) => {

    
    if(accounts.length === 0){
        return <h2 className="message">No accounts</h2>
    }

    return ( 
        <AccountsTable accounts={accounts}></AccountsTable>
    );
}
 
export default AccountsList;