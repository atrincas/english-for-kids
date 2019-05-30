import React from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import Section from "./Section";
import { sections } from "../data/data";
import * as setLandingPageAction from "../state/actions/setLandingPage";

class LandingPage extends React.Component {
  setSection = e => {
    setLandingPageAction.setSectionName(e.currentTarget.id);
  };

  render() {
    return (
      <>
        <Navbar homePage={true} />
        <div className="LPImage" />
        <p className="welcome">Welcome to English For Kids</p>
        <div id="sections">
          <div className="row">
            {sections.map(section => (
              <Section
                key={section.id}
                onClick={this.setSection}
                id={section.id}
                alt={section.name}
                src={section.img}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  const { landingPage } = state;
  return {
    section: landingPage.section
  };
};

export default connect(mapStateToProps)(LandingPage);
