import React from 'react';
import './DashBoardNav.scss';
import { withRouter } from 'react-router-dom';
import { KEY_USERNAME } from '../../constFile';
import moment from 'moment';
import auth from '../../auth';



const DashBoardNav = ({history}) => {


    const name = JSON.parse(sessionStorage.getItem(KEY_USERNAME));
    const currentDate = moment().format('LLLL');
    var greetingNav;
    let newDate = new Date()
    let hour = newDate.getHours();
    console.log(hour);
   
    if(hour <= 11){
        greetingNav = 'Good morning'
    }else if(hour >= 12 && hour <= 17){
        greetingNav = 'Good evening'
    }else{
        greetingNav = 'Good night'
    }
   

    return ( 
        <div className="dashnav">
            <div className="dashnav__content">
                <span className="dashnav__content-greeting">{greetingNav} {name}</span>
                <p className="dashnav__content-lastlogin">{currentDate}</p>
            </div>
            <div>
                <button className="dashnav__button" onClick={ () => {
                    auth.logout(() =>{
                        history.push("/");
                    })
                }}><i className="las la-sign-out-alt"></i></button>
            </div>
        </div>
    );
}
 
export default DashBoardNav;