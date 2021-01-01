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



import { HashRouter as Router, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


class Root extends Component{
    render(){
        return(

          <Router basename={"/"}>
               <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/contact" component={Contact}/>
                  <Route exact path="/SortVis" component={Portfolio1}/>
                  <Route exact path="/PictureRun" component={Portfolio2}/>
                  <Route exact path="/Foodimize" component={Portfolio3}/>
                  <Route exact path="/Eskil" component={Portfolio4}/>
                  <Route exact path="/VenPlan" component={Portfolio5}/>

               </Switch>
          </Router>

        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();
