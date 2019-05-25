import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import * as setLandingPageAction from "../state/actions/setLandingPage";

class Navbar extends React.Component {
  setSection = e => {
    setLandingPageAction.setSectionName(e.currentTarget.id);
  };

  render() {
    return (
      <div className="nav">
        <a href="/">Home</a>
        <a href="#sections">Sections</a>
        <a
          href="https://github.com/atrincas/english-for-kids/blob/master/README.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          About
        </a>
      </div>
    );
  }
}
export default Navbar