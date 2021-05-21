import React from 'react';
import {Link} from 'react-router-dom';

const Header = ()=>(
    <header>
        <h1>this is the heading </h1>
        <Link to='/'>dashboard</Link>
        <Link to='/addExpense'>add expense page</Link>
    </header>
);
export default Header;