import React,{useState,useEffect} from 'react';
import { GET_TRANSACTION_BY_ACCOUNT_ID } from '../../constFile';
import Axios from 'axios';
import { useParams } from "react-router";
import AccountDetail from '../../components/AcconutDetailContainer/AccountDetailContainer';


const DetailPage = () => {

    const { accountId } = useParams(); 

    const [transactions,setTransactions] = useState();

    useEffect(() => {
        
        getTransactionsById();

    },[]);

    const getTransactionsById= () => {
        const url =  GET_TRANSACTION_BY_ACCOUNT_ID;
        
        Axios.get(`${url}${accountId}`)
        .then(res => { 
            // console.log(res)
            setTransactions(res.data)
        }
        )
        .catch(error => console.log(error));
    }

    return ( 
        <div className="principal-container">
            <AccountDetail transactions={transactions}></AccountDetail>
        </div>
      );
}
 
export default DetailPage;