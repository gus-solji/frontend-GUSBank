import React from 'react';
import './FavoriteTable.scss';
import { Link } from 'react-router-dom';


const FavoriteTable = ({favorites}) => {
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
                        favorites.map((favorite, i) => {
                            return <tr key={i} >
                                        <td>{favorite.accountNumber}</td>
                                        <td><Link><i className="las la-eye icon"></i></Link></td>
                                    </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}
 
export default FavoriteTable;