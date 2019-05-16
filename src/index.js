import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import * as serviceWorker from './serviceWorker';
import LandingPage from './components/LandingPage';
import Quiz from './components/Quiz';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const routing = (
    <Router>
        <div className="nav">
            <a href="/">Home</a>
            <a href="/quiz">Quiz</a>
            <a href="https://github.com/atrincas/english-for-kids/blob/master/README.md" target="_blank">About</a>
            <div className="dropdown">
                <button className="dropbtn">Sections</button>
                <div className="dropdown-content">
                    <a href="/quiz" style={{fontSize:"30px", padding:"0px", margin:"5px 0px 5px 0px"}}>Colors</a>
                    <a href="#" style={{fontSize:"30px", padding:"0px", margin:"5px 0px 5px 0px"}}>Fruits</a>
                    <a href="#" style={{fontSize:"30px", padding:"0px", margin:"5px 0px 5px 0px"}}>Clothes</a>
                    <a href="#" style={{fontSize:"30px", padding:"0px", margin:"5px 0px 5px 0px"}}>Drinks</a>
                    <a href="#" style={{fontSize:"30px", padding:"0px", margin:"5px 0px 5px 0px"}}>Animals</a>
                    <a href="#" style={{fontSize:"30px", padding:"0px", margin:"5px 0px 5px 0px"}}>ParsofBody</a>
                </div>
        </div>                         
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
