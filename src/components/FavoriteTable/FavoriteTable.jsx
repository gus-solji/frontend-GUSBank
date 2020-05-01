import React from 'react';
import './FavoriteTable.scss';
import { Link } from 'react-router-dom';


const FavoriteTable = ({favorites}) => {
    return (  
        <div className="table-container table-responsive">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Account</th>
                        <th scope="col">Owner Name</th>
                        <th scope="col">Bank Name</th>
                        <th scope="col">Colones</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        favorites.map((favorite, i) => {
                            return <tr key={i} >
                                        <td>{favorite.accountNumber}</td>
                                        <td>{favorite.ownerName}</td>
                                        <td>{favorite.bankName}</td>
                                        <td>{favorite.currency}</td>
                                    </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}
 
export default FavoriteTable;