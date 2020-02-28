import React from 'react';
import './Table.scss';
import { Link } from 'react-router-dom';


const Table = ({accounts}) => {
    return (  
        <div className="table-container">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Account</th>
                        <th scope="col">View</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        accounts.map((account, i) => {
                            return <tr key={i} >
                                        <td>{account.ibanNumber}</td>
                                        <td><Link><i className="las la-eye icon"></i></Link></td>
                                    </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}
 
export default Table;