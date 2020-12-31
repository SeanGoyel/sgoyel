// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './home/Home';
import Portfolio1 from "./portfolio/Portfolio1"
import Portfolio2 from "./portfolio/Portfolio2"
import Portfolio3 from "./portfolio/Portfolio3"
import Portfolio4 from "./portfolio/Portfolio4"
import Portfolio5 from "./portfolio/Portfolio5"
import Contact from "./elements/Contact"
// Create Import File
import './index.scss';



import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


class Root extends Component{
    render(){
        return(

          <BrowserRouter basename={"/"}>
               <Switch>
                  <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home}/>
                  <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact}/>
                  <Route exact path={`${process.env.PUBLIC_URL}/portfolio5`} component={Portfolio5}/>
                  <Route exact path={`${process.env.PUBLIC_URL}/portfolio1`} component={Portfolio1}/>
                  <Route exact path={`${process.env.PUBLIC_URL}/portfolio2`} component={Portfolio2}/>
                  <Route exact path={`${process.env.PUBLIC_URL}/portfolio3`} component={Portfolio3}/>
                  <Route exact path={`${process.env.PUBLIC_URL}/portfolio4`} component={Portfolio4}/>

               </Switch>
          </BrowserRouter>

        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();
