import React, {useState, useEffect} from 'react';
import { GET_ACCOUNTS_USER_URL, KEY_USERID, GET_FAVORITE_ACCOUNTS_URL } from '../../constFile';
import Axios from 'axios';
import './PrincipalContent.scss';
import ShowAccounts from '../../components/ShowAccouts/ShowAccounts.component';
import ShowFavorites from '../../components/ShowFavorites/ShowFavorites.component';

const PrincipalContent = () => {

    const [accounts,setAccounts] =  useState([]);
    const [favoriteAccounts,setFavoriteAccounts] = useState([]);

    useEffect(() => {
        
        getAccounts();
        getFavoriteAccounts();

    },[]);

    const getAccounts = () => {
        const url = GET_ACCOUNTS_USER_URL;
        const userId = JSON.parse(sessionStorage.getItem(KEY_USERID));
        Axios.get(`${url}${userId}`)
        .then(res => { 
            // console.log(res)
            setAccounts(res.data)
        }
        )
        .catch(error => console.log(error));
    }

    const getFavoriteAccounts = () => {
        const url = GET_FAVORITE_ACCOUNTS_URL;
        const userId = JSON.parse(sessionStorage.getItem(KEY_USERID));
        Axios.get(`${url}${userId}`)
        .then(res => { 
            console.log(res)
            setFavoriteAccounts(res.data)
        }
        )
        .catch(error => console.log(error));
    }

    return (
        <div className="principal-container">
            <ShowAccounts accounts={accounts}></ShowAccounts>
            <ShowFavorites favorites={favoriteAccounts}></ShowFavorites>
        </div>
     );
}
 
export default PrincipalContent;