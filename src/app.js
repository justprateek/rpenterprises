import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const expenseDashboardPath =()=>(
    <div>
        hii this is ExpenseDashBoardPage
    </div>
);
const addExpensePage =()=>(
    <div>
        hii this is add Page
    </div>
);
const routes = (
    <BrowserRouter>
    <div>
     <Route path="/" component={expenseDashboardPath} exact = {true}/> 
     <Route path="/add" component={addExpensePage} exact = {true}/> 
    </div>
        
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
