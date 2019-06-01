import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import "bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import * as setLandingPageAction from "../state/actions/setLandingPage";

class Navbar extends React.Component {
  setSection = e => {
    setLandingPageAction.setSectionName(e.currentTarget.id);
  };

  render() {
    const { homePage } = this.props;

    return (
      <div className="nav">
        <Link to="/">Home</Link>
        {homePage ? (
          <>
            <Link to="#sections">Sections</Link>
            <Link
              to="https://github.com/atrincas/english-for-kids/blob/master/README.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              About
            </Link>
          </>
        ) : null}
      </div>
    );
  }
}
export default Navbar;
