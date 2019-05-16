import React from "react";
import Quiz from "./Quiz";
import Section from "./Sections";
import colors from "../styles/images/colors.jpg";
import fruits from "../styles/images/fruits.jpg";
import clothes from "../styles/images/clothes.jpg";
import drinks from "../styles/images/drinks.jpg";
import animals from "../styles/images/animals.jpg";
import partsOfBody from "../styles/images/partsOfBody.jpg";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      section: ""
    };

    this.sectionSelection = this.sectionSelection.bind(this);
  }

  sectionSelection = e => {
    this.setState({ section: e.currentTarget.id });
    setTimeout(() => {
      console.log(this.state);
    }, 1000);
  };

  render() {
    if (this.state.section === "") {
      return (
        <div>
          <div className="LPImage">
            <div className="LPcontainer" />
          </div>
          <p className="welcome">Welcome to English For Kids</p>
          <div className="row">
            <Section
              onClick={this.sectionSelection}
              id={"colors"}
              alt={"colors"}
              src={colors}
            >
              Colors
            </Section>
            <Section
              onClick={this.sectionSelection}
              id={"fruits"}
              alt={"fruits"}
              src={fruits}
            >
              Fruits
            </Section>
          </div>
          <div className="row">
            <Section
              onClick={this.sectionSelection}
              id={"clothes"}
              alt={"clothes"}
              src={clothes}
            >
              Clothes
            </Section>
            <Section
              onClick={this.sectionSelection}
              id={"drinks"}
              alt={"drinks"}
              src={drinks}
            >
              Drinks
            </Section>
          </div>
          <div className="row">
            <Section
              onClick={this.sectionSelection}
              id={"animals"}
              alt={"animals"}
              src={animals}
            >
              Animals
            </Section>
            <Section
              onClick={this.sectionSelection}
              id={"partsOfBody"}
              alt={"partsOfBody"}
              src={partsOfBody}
            >
              Parts of Body
            </Section>
          </div>
        </div>
      );
    } else if (
      this.state.section === "colors" ||
      "fruits" ||
      "clothes" ||
      "drinks" ||
      "animals" ||
      "partsOfBody"
    ) {
      const prop = this.state.section;

      return <Quiz newState={prop} />;
    }
  }
}

export default LandingPage;
