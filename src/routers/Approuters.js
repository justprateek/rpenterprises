import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

const expenseDashboardPath =()=>(
    <div>
        hii this is Expense DashBoard Page
    </div>
);
const addExpensePage =()=>(
    <div>
        hii this is add Page
    </div>
);
const Header = ()=>(
    <header>
        <h1>this is the heading </h1>
        <Link to='/'>dashboard</Link>
        <Link to='/addExpense'>add expense page</Link>
    </header>
);
const Approuters = ()=>(
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
        <Route path="/" component={expenseDashboardPath} exact = {true}/> 
        <Route path="/addExpense" component={addExpensePage} exact = {true}/> 

        </Switch>
    </div>

    </BrowserRouter>
);

export default Approuters;