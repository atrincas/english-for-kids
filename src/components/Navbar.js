import React from "react";
import Quiz from "./Quiz";
import "bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Navbar extends React.Component {
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
              <button
                onClick={this.sectionSelection}
                id="colors"
                style={{
                  fontSize: "30px",
                  padding: "0px",
                  margin: "5px 0px 5px 0px"
                }}
              >
                Colors
              </button>
              <button
                onClick={this.sectionSelection}
                id="fruits"
                style={{
                  fontSize: "30px",
                  padding: "0px",
                  margin: "5px 0px 5px 0px"
                }}
              >
                Fruits
              </button>
              <button
                onClick={this.sectionSelection}
                id="clothes"
                style={{
                  fontSize: "30px",
                  padding: "0px",
                  margin: "5px 0px 5px 0px"
                }}
              >
                Clothes
              </button>
              <button
                onClick={this.sectionSelection}
                id="drinks"
                style={{
                  fontSize: "30px",
                  padding: "0px",
                  margin: "5px 0px 5px 0px"
                }}
              >
                Drinks
              </button>
              <button
                onClick={this.sectionSelection}
                id="animals"
                style={{
                  fontSize: "30px",
                  padding: "0px",
                  margin: "5px 0px 5px 0px"
                }}
              >
                Animals
              </button>
              <button
                onClick={this.sectionSelection}
                id="partsOfBody"
                style={{
                  fontSize: "30px",
                  padding: "0px",
                  margin: "5px 0px 5px 0px"
                }}
              >
                PartsofBody
              </button>
            </div>
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
      const newState = this.state.section;
      return <Quiz newState={newState} />;
    }
  }
}

export default Navbar;
