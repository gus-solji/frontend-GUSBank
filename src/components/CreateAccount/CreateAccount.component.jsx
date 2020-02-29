import React from 'react';
import './CreateAccount.scss';
import CreateAccountForm from '../CreateAccountForm/CreateAccountForm.component';

const CreateAccount = ({history}) => {
    return ( 
        <div className="create-account-content">
            <CreateAccountForm history={history}></CreateAccountForm>
        </div>        
     );
}
 
export default CreateAccount;
