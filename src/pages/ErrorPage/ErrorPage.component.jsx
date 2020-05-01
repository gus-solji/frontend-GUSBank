import React from 'react';
import './ErrorPage.scss';

const ErrorPage = ({history}) => {

    console.log(history);

    return ( 
        <div className="container error-content justify-content-center">
            <div className="error-content__div">
                 <img  className="error-content__div-img" src="assets/img/404.svg" alt="error img"/>
                 <h2   className="error-content__div-title">Upppsss... page not found!!</h2>
                 <button className="btn btn-md error-content__div-button" onClick={() => history.goBack()}>Go Back</button>
            </div>
           
        </div>
    );
}
 
export default ErrorPage;