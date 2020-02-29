import React from 'react';
import './Table.scss';
import { Link } from 'react-router-dom';


const Table = ({accounts}) => {
    return (  
         <div className="table-container table-responsive">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Account</th>
                        <th scope="col">Description</th>
                        <th scope="col">Currency</th>
                        <th scope="col">Balance</th>
                        <th scope="col">View</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        accounts.map((account, i) => {
                            return <tr key={i} >
                                        <td>{account.ibanNumber}</td>
                                        <td>{account.description}</td>
                                        <td>{account.currency}</td>
                                        <td>{account.balance}</td>
                                        <td><Link to={`/dashboard/account-detail/${account.id}`}><i className="las la-eye icon"></i></Link></td>
                                    </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}
 
export default Table;