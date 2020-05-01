import React, { Fragment } from 'react';
import './SidebarMenu.scss';
import { Link } from 'react-router-dom';


const SideBarMenu = () => {
    return (  
        <Fragment>
            <div className="sidebar">
                <header className="sidebar__header">
                    <img className="sidebar__header-img" src="/assets/img/crown-green.svg" alt="logo"/>
                    <h5 className="sidebar__header-name">GSJ Bank</h5>
                </header>
                <Link className="sidebar__link" to="/dashboard"><i className="sidebar__link-icon las la-file-invoice-dollar"></i><span className="sidebar__link-span">Summary</span></Link>
                {/* <Link className="sidebar__link" to="/dashboard/create-account"><i className="sidebar__link-icon las la-piggy-bank"></i><span className="sidebar__link-span">Accounts</span></Link>
                <Link className="sidebar__link" to="/dashboard/create-account"><i className="sidebar__link-icon las la-bookmark"></i><span className="sidebar__link-span">Favorites</span></Link> */}
                <Link className="sidebar__link" to="/dashboard/transfer-money"><i className="sidebar__link-icon las la-exchange-alt"></i><span className="sidebar__link-span">Transfer</span></Link>
                {/* <Link className="sidebar__link" to="/dashboard/create-account"><i className="sidebar__link-icon las la-money-bill-wave"></i><span className="sidebar__link-span">Pay Services</span></Link> */}
                <Link className="sidebar__link" to="/dashboard/profile"><i className="sidebar__link-icon las la-address-card"></i><span className="sidebar__link-span">Profile</span></Link>
            </div>
        </Fragment>
       
    );
}
 
export default SideBarMenu;