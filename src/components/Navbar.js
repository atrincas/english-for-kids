import React from "react";
import { connect } from "react-redux";
import {Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import * as setLandingPageAction from "../state/actions/setLandingPage";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    
    };  
  

  
  render() {
      return (
        <div className="nav">
          <a href="/">Home</a>
          <a
            href="https://github.com/atrincas/english-for-kids/blob/master/README.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            About
          </a>
          <div className="dropdown">
            <button className="dropbtn">Sections</button>
            <div className="dropdown-content">
              <Link
                className="dropdown-content-link"
                to="/quiz"                
                onClick={e => {setLandingPageAction.setSectionName(e.currentTarget.id)}}
                id="colors"
                style={{
                  fontSize: "30px",
                  padding: "0px",
                  margin: "5px 0px 5px 0px"
                }}
              >
                Colors
              </Link>
              <br></br>
              <Link
                className="dropdown-content-link"
                to="/quiz"
                onClick={e => {setLandingPageAction.setSectionName(e.currentTarget.id)}}
                id="fruits"
                style={{
                  fontSize: "30px",
                  padding: "0px",
                  margin: "5px 0px 5px 0px"
                }}
              >
                Fruits
              </Link>
              <br></br>
              <Link
                className="dropdown-content-link"
                to="/quiz"
                onClick={e => {setLandingPageAction.setSectionName(e.currentTarget.id)}}
                id="clothes"
                style={{
                  fontSize: "30px",
                  padding: "0px",
                  margin: "5px 0px 5px 0px"
                }}
              >
                Clothes
              </Link>
              <br></br>
              <Link
                className="dropdown-content-link"
                to="/quiz"
                onClick={e => {setLandingPageAction.setSectionName(e.currentTarget.id)}}
                id="drinks"
                style={{
                  fontSize: "30px",
                  padding: "0px",
                  margin: "5px 0px 5px 0px"
                }}
              >
                Drinks
              </Link>
              <br></br>
              <Link
                className="dropdown-content-link"
                to="/quiz"
                onClick={e => {setLandingPageAction.setSectionName(e.currentTarget.id)}}
                id="animals"
                style={{
                  fontSize: "30px",
                  padding: "0px",
                  margin: "5px 0px 5px 0px"
                }}
              >
                Animals
              </Link>
              <br></br>
              <Link
                className="dropdown-content-link"
                to="/quiz"
                onClick={e => {setLandingPageAction.setSectionName(e.currentTarget.id)}}
                id="partsOfBody"
                style={{
                  fontSize: "30px",
                  padding: "0px",
                  margin: "5px 0px 5px 0px"
                }}
              >
                PartsofBody
              </Link>
            </div>
          </div>
        </div>
      );
    } 
}

const mapStateToProps = state => {
  const { landingPage } = state;
  return {
    section: landingPage.section
  };
};

export default connect(mapStateToProps)(Navbar);
