import React from 'react';
import './InfoContainer.scss';


const InfoContainer = () => {
    return ( 
        <div className="container info-container">
           <div className="row info-container__row">
                <div className="col-md-6 info-container__row-text">
                    <div className="text-container">   
                        <h1 className="text-container__title">Do you save money?</h1>
                        <h2 className="text-container__title">Read about how to save money</h2>
                        <div className="text-container__paragraph">
                            <p>Saving money requires a lot of discipline. However, with firm determination, it is not a difficult habit to adopt. Many Singaporeans can benefit greatly from the habit of saving if they choose to do it faithfully. Some of these benefits are described below</p>
                        </div>
                        <a className=" btn btn-md text-container__link" href="https://homebusinessmag.com/money/personal-finance/10-important-benefits-saving-money/" target="_blank">Read More</a>
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