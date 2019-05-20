import React from "react";
import { connect } from "react-redux";
import Section from "./Sections";
import colors from "../styles/images/colors.jpg";
import fruits from "../styles/images/fruits.jpg";
import clothes from "../styles/images/clothes.jpg";
import drinks from "../styles/images/drinks.jpg";
import animals from "../styles/images/animals.jpg";
import partsOfBody from "../styles/images/partsOfBody.jpg";
import * as setLandingPageAction from "../state/actions/setLandingPage";
import store from "../state/store";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  setSection = e => {
    setLandingPageAction.setSectionName(e.currentTarget.id);
    
  };

  render() {
    return (
      <div>
        <div className="LPImage">
          <div className="LPcontainer" />
        </div>
        <p className="welcome">Welcome to English For Kids</p>
        <div className="row">
          <Section
            value={this.props.section}
            onMouseMove={this.setSection}
            id={"colors"}
            alt={"colors"}
            src={colors}
          >
            Colors
          </Section>
          <Section
            value={this.props.section}
            onMouseMove={this.setSection}
            id={"fruits"}
            alt={"fruits"}
            src={fruits}
          >
            Fruits
          </Section>
        </div>
        <div className="row">
          <Section
            value={this.props.section}
            onMouseMove={this.setSection}
            id={"clothes"}
            alt={"clothes"}
            src={clothes}
          >
            Clothes
          </Section>
          <Section
            value={this.props.section}
            onMouseMove={this.setSection}
            id={"drinks"}
            alt={"drinks"}
            src={drinks}
          >
            Drinks
          </Section>
        </div>
        <div className="row">
          <Section
            value={this.props.section}
            onMouseMove={this.setSection}
            id={"animals"}
            alt={"animals"}
            src={animals}
          >
            Animals
          </Section>
          <Section
            value={this.props.section}
            onMouseMove={this.setSection}
            id={"partsOfBody"}
            alt={"partsOfBody"}
            src={partsOfBody}
          >
            Parts of Body
          </Section>
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

export default connect(mapStateToProps)(LandingPage);
