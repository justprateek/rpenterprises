import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Services from '../components/Services';
import Home from '../components/Home';
import Header from '../components/Header';



const AppRouters = ()=>(
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
        <Route path="/" component={Home} exact = {true}/> 
        <Route path="/Services" component={Services} exact = {true}/> 
        <Route path="/Clients" component={Client} exact = {true}/> 
        <Route path="/Contact" component={Contact} exact = {true}/> 

        </Switch>
    </div>

    </BrowserRouter>
);

export default AppRouters;