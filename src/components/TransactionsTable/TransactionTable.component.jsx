import React from 'react'


const TransactionsTable = ({transactions}) => {

    console.log(transactions[0]);
    console.log(transactions[1]);

    return ( 
          <div className="table-container table-responsive">

            
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Origin account</th>
                        <th scope="col">Destination account</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Detail</th>
                    </tr>
                </thead>
                <tbody >

                   {
                        transactions.map((transaction, i) => {
                            return <tr key={i} >
                                        <td>{transaction.originAccount}</td>
                                        <td>{transaction.finalAccount}</td>
                                        <td>{transaction.balance}</td>
                                        <td>{transaction.detail}</td>
                                    </tr>
                        })
                    }
                </tbody>
            </table>
   
        </div>
     );
}
 
export default TransactionsTable;