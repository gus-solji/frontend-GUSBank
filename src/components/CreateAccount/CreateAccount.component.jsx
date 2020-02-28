import React from 'react';
import './CreateAccount.scss';
import CreateAccountForm from '../CreateAccountForm/CreateAccountForm.component';

const CreateAccount = () => {
    return ( 
        <div className="create-account-content">
            <CreateAccountForm></CreateAccountForm>
        </div>        
     );
}
 
export default CreateAccount;
