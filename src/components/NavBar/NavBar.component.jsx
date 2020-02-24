import React from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light nav-border sticky-top">
            <Link className="navbar-brand logo-text ml-md-5"  to="/">
                <img className="navbar-brand__img-size d-inline-block align-top" src="/assets/img/crown-green.svg" alt="logo"/> 
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active pr-md-5">
                        <Link className="nav-link logo-text link-effect" to="/login">Log In</Link>
                    </li>
                    <li className="nav-item active pr-md-5">
                        <Link className="nav-link logo-text link-effect" to="/about-us">About us</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
 
export default NavBar;