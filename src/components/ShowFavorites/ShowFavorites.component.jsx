import React from 'react';
import './ShowFavorite.scss';
import { Link } from 'react-router-dom';
import FavoriteList from '../FavoriteList/FavoriteList.component';



const ShowFavorites = ({favorites}) => {

    return ( 
        <div className="favorite-container">
            <div className="favorite-container__header">
                <div className="favorite-container__header-left">
                    <h4 className="favorite-container__header-left-title"><i className="las la-star favorite-container__header-left-icon"></i>Favorite Accounts</h4>
                </div>
                <div className="favorite-container__header-rigth">
                    <Link to="/dashboard/create-favorite-account">New Favorite</Link>
                </div>
            </div>
            <div className="favorite-container__list">
                <FavoriteList favorites={favorites}></FavoriteList>
            </div>
        </div>
     );
}
 
export default ShowFavorites;