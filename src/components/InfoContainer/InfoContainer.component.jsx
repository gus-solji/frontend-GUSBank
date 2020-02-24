import React from 'react';
import './InfoContainer.scss';


const InfoContainer = () => {
    return ( 
        <div className="container info-container">
           <div className="row info-container__row">
                <div className="col-md-6 info-container__row-text">
                    <div className="text-container">   
                        <h1 className="text-container__title">Do you save money?</h1>
                        <h2 className="text-container__title">Read about how save money</h2>
                        <div className="text-container__paragraph">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nulla dicta consequatur sint itaque, provident atque suscipit aspernatur explicabo quaerat magnam? Maxime id repellendus hic, assumenda pariatur ut nesciunt soluta!</p>
                        </div>
                        <a className="text-container__link" href="https://homebusinessmag.com/money/personal-finance/10-important-benefits-saving-money/" target="_blank">Read More</a>
                    </div>
                </div>
                <div className="col-md-6 info-container__row-img">
                   <img className="info-container__row-info-img" src="assets/img/savings.svg" alt="savingphoto"></img>
                </div>
           </div>
        </div>
    );
}
 
export default InfoContainer;