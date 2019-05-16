import React from "react";

import {
  colors,
  fruits,
  clothes,
  drinks,
  animals,
  partsOfBody
} from "../data/data";
import Question from "./Question";
import Navbar from "./Navbar";

class Quiz extends React.Component {
  constructor(props) {
    super(props);

    const newQuiz = this.props.newState;
    const section = newQuiz => {
      if (newQuiz === "colors") {
        return colors;
      } else if (newQuiz === "fruits") {
        return fruits;
      } else if (newQuiz === "clothes") {
        return clothes;
      } else if (newQuiz === "drinks") {
        return drinks;
      } else if (newQuiz === "animals") {
        return animals;
      } else if (newQuiz === "partsOfBody") {
        return partsOfBody;
      }
    };

    this.state = {
      quiz: section(newQuiz),
      nr: 0,
      total: section(newQuiz).length,
      score: 0,
      completed: false
    };
    this.checkAnswer = this.checkAnswer.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
  }

  componentWillMount() {
    let { nr } = this.state;
    this.createNewQuestion(nr);
  }

  createNewQuestion(nr) {
    let { quiz } = this.state;

    this.setState({
      currentWord: quiz[nr].word,
      img: quiz[nr].img,
      correctAnswer: false,
      wrongAnswer: false,
      disableButton: false,
      options: this.shuffle(quiz[nr].options),
      nr: this.state.nr + 1
    });
  }

  // Shuffle the array of options:
  shuffle(arr) {
    let j, x, i;
    for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = arr[i];
      arr[i] = arr[j];
      arr[j] = x;
    }
    return arr;
  }

  checkAnswer(e) {
    let answer = e.currentTarget.innerText,
      element = document.getElementById(answer),
      { currentWord } = this.state;

    if (answer === currentWord) {
      this.setState({
        score: this.state.score + 1,
        correctAnswer: true,
        disableButton: true
      });
      setTimeout(() => {
        element.classList.toggle("correct-answer");
        this.nextQuestion();
      }, 1000);
      element.classList.toggle("correct-answer");
    } else {
      this.setState({ wrongAnswer: true, disableButton: true });
      setTimeout(() => {
        element.classList.toggle("wrong-answer");
        this.setState({ wrongAnswer: false });
        this.nextQuestion();
      }, 1000);
      element.classList.toggle("wrong-answer");
    }
  }

  nextQuestion() {
    let { nr, total } = this.state;

    // Check if quiz is completed:
    if (nr === total) {
      this.setState({
        completed: true
      });
    } else {
      // Assign values to state for the next word:
      this.createNewQuestion(nr);
    }
  }

  render() {
    const {
      currentWord,
      img,
      correctAnswer,
      wrongAnswer,
      completed,
      options,
      score,
      total,
      disableButton,
      newQuiz
    } = this.state;

    if (completed)
      return (
        <div>
          <Navbar newState={newQuiz} />

          <div className="resultImage">
            <br style={{ marginBottom: "5em" }} />
            <div>
              <br />
              Quiz completed! You got {score} out of {total} right!
            </div>
          </div>
        </div>
      );

    return (
      <Question
        word={currentWord}
        imgUrl={img}
        options={options}
        correctAnswer={correctAnswer}
        wrongAnswer={wrongAnswer}
        disableButton={disableButton}
        checkAnswer={this.checkAnswer}
      />
    );
  }
}

export default Quiz;
