import React, { Fragment } from 'react'
import './ExchangeRate.scss';

const ExchangeRate = ({rate}) => {
    const {compra,venta,fecha} = rate;

    return ( 
        <Fragment> 
            <h5 className="exchange-rate-title">Exchange Rate  {fecha}</h5>
            <div className="exchange-rate-container">
                <div className="exchange-rate-container__dollar">
                    <h4 className="exchange-rate-container__dollar-title-buy">Buy</h4>
                    <p className="exchange-rate-container__dollar-money-buy">${compra}</p>
                </div>
                <div className="exchange-rate-container__dollar">
                    <h4 className="exchange-rate-container__dollar-title-sell">Sell</h4>
                    <p className="exchange-rate-container__dollar-money-sell">${venta}</p>
                </div>
            </div>
        </Fragment>
       
     );
}
 
export default ExchangeRate;