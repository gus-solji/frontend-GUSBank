import React from 'react'
import './OurPurpose.scss';
import info from './info.json';

const OurPurpose = () => {
    return ( 
        
        <div className="container-fluid our-purpose-container">
           <h1>Our 3 principles</h1>
           <div className="row our-purpose-container__content">
                {
                    info.map(info => (
                        <div key={info.id} className="col-md-4 our-purpose-container__content-simbol">
                            <div className="our-purpose-container__content-simbol-img">
                                <img className="" src={info.urlImg} alt=""/>
                                
                            </div>
                            <div  className="our-purpose-container__content-simbol-title">
                                <h3>{info.title}</h3>
                            </div>
                            <div className="our-purpose-container__content-simbol-text">
                                <p className="our-purpose-container__content-simbol-text-paragraph">{info.text}</p>
                            </div>
                        </div>
                    ))
                }
           </div>
        </div>
    );
}
 
export default OurPurpose;