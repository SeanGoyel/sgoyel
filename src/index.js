// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './home/Home';
import Portfolio1 from "./portfolio/Portfolio1"
import Portfolio3 from "./portfolio/Portfolio3"
import Portfolio2 from "./portfolio/Portfolio2"
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
                  <Route exact path={`${process.env.PUBLIC_URL}/portfolio1`} component={Portfolio1}/>
                  <Route exact path={`${process.env.PUBLIC_URL}/portfolio2`} component={Portfolio2}/>
                  <Route exact path={`${process.env.PUBLIC_URL}/portfolio3`} component={Portfolio3}/>

               </Switch>
          </BrowserRouter>

        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();
