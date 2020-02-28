import React from 'react';
import './FavoriteList.scss';
import FavoriteTable from '../FavoriteTable/FavoriteTable';


const FavoriteList = ({favorites}) => {

    console.log(favorites.length === 0)
    if(favorites.length === 0){
        return <h2 className="message">No favorite accounts</h2>
    }

    return ( 
       <FavoriteTable favorites={favorites}></FavoriteTable>
    );
}
 
export default FavoriteList;