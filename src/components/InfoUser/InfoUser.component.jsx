import React from 'react';
import './InfoUser.scss';

const InfoUser = ({user}) => {

    const {name, lastname, address,idCard,email,birthDate} = user;

    return ( 
        <div className="info-user">
            <div className="infor_user__data">
                <h2 className="info-user__data-info mb-3">Information</h2>
                <div className="info-user__data-info">
                    <h6><span>Name:</span>    {name} {lastname}</h6>
                </div>
                <div className="info-user__data-info">
                    <h6><span>Address:</span> {address}</h6>
                </div>
                <div className="info-user__data-info">
                    <h6><span>Id Number:</span> {idCard}</h6>
                </div>
                <div className="info-user__data-info">
                    <h6><span>Email:</span>  {email}</h6>
                </div>
                <div className="info-user__data-info">
                    <h6><span>Birthdate:</span> {birthDate}</h6>
                </div>
            </div>
        </div>
     );
}
 
export default InfoUser;