import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Clients from '../components/Clients';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Home from '../components/Home';
import Services from '../components/Services';
import Services1 from '../components/services/Services1';
import Services2 from '../components/services/Services2';
import Services3 from '../components/services/Services3';
import Services4 from '../components/services/Services4';
import Services5 from '../components/services/Services5';
import Services6 from '../components/services/Services6';
import Services7 from '../components/services/Services7';
import Services8 from '../components/services/Services8';
import Services9 from '../components/services/Services9';
import Services10 from '../components/services/Services10';
import Services11 from '../components/services/Services11';
import Services12 from '../components/services/Services12';
import Services13 from '../components/services/Services13';
import Services14 from '../components/services/Services14';
import Services15 from '../components/services/Services15';
import Services16 from '../components/services/Services16';



const AppRouters = ()=>(
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
        <Route path="/" component={Home} exact = {true}/> 
        <Route path="/Services" component={Services} exact = {true}/>
        <Route path="/Services/1" component={Services1} exact = {true}/>
        <Route path="/Services/2" component={Services2} exact = {true}/>
        <Route path="/Services/3" component={Services3} exact = {true}/>
        <Route path="/Services/4" component={Services4} exact = {true}/>
        <Route path="/Services/5" component={Services5} exact = {true}/>
        <Route path="/Services/6" component={Services6} exact = {true}/>
        <Route path="/Services/7" component={Services7} exact = {true}/>
        <Route path="/Services/8" component={Services8} exact = {true}/>
        <Route path="/Services/9" component={Services9} exact = {true}/>
        <Route path="/Services/10" component={Services10} exact = {true}/>
        <Route path="/Services/11" component={Services11} exact = {true}/>
        <Route path="/Services/12" component={Services12} exact = {true}/>
        <Route path="/Services/13" component={Services13} exact = {true}/>
        <Route path="/Services/14" component={Services14} exact = {true}/>
        <Route path="/Services/15" component={Services15} exact = {true}/>
        <Route path="/Services/16" component={Services16} exact = {true}/>
        <Route path="/Clients" component={Clients} exact = {true}/> 
        <Route path="/Contact" component={Contact} exact = {true}/> 
        

        </Switch>
       
    </div>

    </BrowserRouter>
);

export default AppRouters;