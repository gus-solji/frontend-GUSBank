import React from 'react';
import './WaveContainer.scss';
import ExchangeRate from '../ExchangeRate/ExchangeRate.component';


const WaveContainer = ({rate}) => {

    return ( 
        <div className="container-fluid wave-container">
          <div className="wave-container__img">
            <img className="wave-container__img-photo" src="assets/img/wave3.svg" alt=""/>
          </div>
          <div className="wave-container__content">
                <div className="wave-container__content-exchange">
                   <h1 className="wave-container__content-exchange-text">GSJ Bank</h1>
                   <ExchangeRate rate={rate}></ExchangeRate>
                </div>
          </div>
        </div>
    );
}
 
export default WaveContainer;