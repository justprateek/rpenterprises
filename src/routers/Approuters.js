import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import AddExpensePage from './../components/AddExpensePage';
import ExpenseDashboardPath from './../components/ExpenseDashBoard';
import Header from './../components/Header';



const Approuters = ()=>(
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
        <Route path="/" component={ExpenseDashboardPath} exact = {true}/> 
        <Route path="/addExpense" component={AddExpensePage} exact = {true}/> 

        </Switch>
    </div>

    </BrowserRouter>
);

export default Approuters;