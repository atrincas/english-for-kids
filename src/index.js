import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import App from './App';
import * as serviceWorker from "./serviceWorker";
import LandingPage from "./components/LandingPage";
import Quiz from './components/Quiz';
import Navbar from "./components/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const routing = (
    <Router>
        <div>
            <Navbar />                         
        </div>        
        <div>           
            <Route exact path="/" component={LandingPage} />    
            <Route exact path="/quiz" component={Quiz} />           
        </div>
    </Router>
  )


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
