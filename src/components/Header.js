import React from 'react';
import {Link} from 'react-router-dom';
import './../styles/components/header.scss';

const Header = ()=>(
    <header className="header">
        <h1>R P Enterprises</h1>
        <Link className="links" to='/'>HOME</Link>
        <Link className="links" to='/Services'>SERVICES</Link>
        <Link className="links" to='/Clients'>OUR CLIENTS</Link>
        <Link className="links" to='/Contact'>CONTACT US</Link>
    </header>
);
export default Header;