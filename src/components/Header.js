import React from 'react';
import {Link} from 'react-router-dom';

const Header = ()=>(
    <header>
        <h1>R P EnterPrises</h1>
        <Link to='/'>Home</Link>
        <Link to='/Services'>Services</Link>
        <Link to='/Clients'>Our Clients</Link>
        <Link to='/Contact'>Contact US</Link>
    </header>
);
export default Header;