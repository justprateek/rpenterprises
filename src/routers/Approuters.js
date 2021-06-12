import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Clients from '../components/Clients';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Home from '../components/Home';
import Services from '../components/Services';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Button} from 'react-bootstrap';





const AppRouters = ()=>(
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
        <Route path="/" component={Home} exact = {true}/> 
        <Route path="/Services" component={Services} exact = {true}/> 
        <Route path="/Clients" component={Clients} exact = {true}/> 
        <Route path="/Contact" component={Contact} exact = {true}/> 
        

        </Switch>
       
    </div>

    </BrowserRouter>
);

export default AppRouters;