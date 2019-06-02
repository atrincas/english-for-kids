import React from "react";
import Navbar from "./Navbar";
import ProgressBar from './ProgressBar';

class Question extends React.PureComponent {
  render() {
    const {
      word,
      chosenAnswer,
      imgUrl,
      options,
      checkAnswer,
      correctAnswer,
      wrongAnswer,
      disableButton,
      percentage
    } = this.props;

    return (
      <div className="bgImage">
        <Navbar homePage={false} />

        <div className="container">
          <h1 style={{ fontFamily: "Chewy" }}>Find the right choice</h1>
          <ProgressBar percentage={percentage} />

          <img
            id="img"
            src={imgUrl}
            className={
              correctAnswer
                ? "correct-answer"
                : wrongAnswer
                ? "wrong-answer"
                : null
            }
            alt={word}
          />
          <ul className="options">
            {options.map((option, i) => {
              return (
                <li
                  className={
                    word === option && correctAnswer
                      ? "options-li correct-answer"
                      : wrongAnswer && chosenAnswer === option
                      ? "options-li wrong-answer"
                      : "options-li"
                  }
                  id={option}
                  key={i}
                  style={{ pointerEvents: disableButton ? "none" : "auto" }}
                  onClick={checkAnswer}
                >
                  {option}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Question;
