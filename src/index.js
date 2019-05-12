import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import * as serviceWorker from './serviceWorker';
import LandingPage from './components/LandingPage';
import Quiz from './components/Quiz';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const routing = (
    <Router>
        <div className="LPtopnav">
            <a href="/">Home</a>
            <a href="/app">App</a>
            <a href="/quiz">Quiz</a>
            <a href="#about">About</a>
        </div>
      <div>      
        
        <Route exact path="/app" component={App} />
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
