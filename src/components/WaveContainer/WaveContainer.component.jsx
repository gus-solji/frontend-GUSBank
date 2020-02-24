import React from 'react';
import './WaveContainer.scss';


const WaveContainer = () => {
    return ( 
        <div className="container-fluid wave-container">
          <div className="wave-container__img">
            <img className="wave-container__img-photo" src="assets/img/wave3.svg" alt=""/>
          </div>
          <div className="wave-container__content">
                <div className="wave-container__content-exchange">
                    <h1 className="wave-container__content-exchange-text">Exchange Rate</h1>
                </div>
                <div className="wave-container__content-exchange-">
                  <h1 className="wave-container__content-exchange-content">Exchange Rate</h1>
                </div>
          </div>
        </div>
    );
}
 
export default WaveContainer;