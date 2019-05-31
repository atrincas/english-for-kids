import React from "react";
import { connect } from "react-redux";
import Question from "./Question";
import store from "../state/store";
import * as setQuizPageAction from "../state/actions/setQuizPage";

import {
  colors,
  fruits,
  clothes,
  drinks,
  animals,
  bodyParts
} from "../data/data";

export class Quiz extends React.Component {
  constructor(props) {
    super(props);

    this.checkAnswer = this.checkAnswer.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
  }

  componentWillReceiveProps() {
    if (this.props.newQuiz !== store.getState().landingPage.section) {
      this.componentWillMount();
    }
  }

  componentWillMount() {
    let nr = store.getState().quizPage.nr;
    this.createNewQuestion(nr);
  }

  createNewQuestion = nr => {
    const newQuiz = store.getState().landingPage.section;

    const section = newQuiz => {
      switch (newQuiz) {
        case "colors":
          return colors;
        case "fruits":
          return fruits;
        case "clothes":
          return clothes;
        case "drinks":
          return drinks;
        case "animals":
          return animals;
        case "bodyParts":
          return bodyParts;
        default:
          break;
      }
    };

    let quiz = section(newQuiz);

    setQuizPageAction.setTotal(quiz.length);
    setQuizPageAction.setCurrentWord(quiz[nr].word);
    setQuizPageAction.setImg(quiz[nr].img);
    setQuizPageAction.setCorrectAnswer(false);
    setQuizPageAction.setWrongAnswer(false);
    setQuizPageAction.setDisableButton(false);
    setQuizPageAction.setOptions(this.shuffle(quiz[nr].options));
    setQuizPageAction.setNr(nr + 1);
  };

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
    let currentWord = store.getState().quizPage.currentWord;
    let score = store.getState().quizPage.score;

    let answer = e.currentTarget.innerText;
    let element = document.getElementById(answer);

    if (answer === currentWord) {
      setQuizPageAction.setScore(score + 1);
      setQuizPageAction.setCorrectAnswer(true);
      setQuizPageAction.setDisableButton(true);

      setTimeout(() => {
        element.classList.toggle("correct-answer");
        this.nextQuestion();
      }, 1000);
      element.classList.toggle("correct-answer");
    } else {
      setQuizPageAction.setWrongAnswer(false);
      setQuizPageAction.setDisableButton(false);

      setTimeout(() => {
        element.classList.toggle("wrong-answer");
        setQuizPageAction.setWrongAnswer(false);
        this.nextQuestion();
      }, 1000);
      element.classList.toggle("wrong-answer");
    }
  }

  nextQuestion() {
    let nr = store.getState().quizPage.nr;
    let total = store.getState().quizPage.total;

    // Check if quiz is completed:
    if (nr === total) {
      setQuizPageAction.setCompleted(true);
    } else {
      // Assign values to state for the next word:
      this.createNewQuestion(nr);
    }
  }

  render() {
    const {
      disableButton,
      correctAnswer,
      wrongAnswer,
      currentWord,
      completed,
      options,
      score,
      total,
      img
    } = store.getState().quizPage;

    if (completed === true)
      return (
        <div className="resultImage">
          <a
            href="/"
            style={{
              fontFamily: "Chewy",
              fontSize: "30px",
              color: "red",
              margin: "20px 0px 0px 50px"
            }}
          >
            Home
          </a>
          <br style={{ marginBottom: "5em" }} />
          <div style={{ fontFamily: "Chewy", color: "red" }}>
            <br />
            Quiz completed! You got {score} out of {total} right!
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

const mapStateToProps = state => {
  const { quizPage, landingPage } = state;
  return {
    currentWord: quizPage.currentWord,
    img: quizPage.img,
    correctAnswer: quizPage.correctAnswer,
    wrongAnswer: quizPage.wrongAnswer,
    completed: quizPage.completed,
    options: quizPage.options,
    score: quizPage.score,
    total: quizPage.total,
    disableButton: quizPage.disableButton,
    quiz: quizPage.quiz,
    nr: quizPage.nr,
    newQuiz: landingPage.section
  };
};

export default connect(mapStateToProps)(Quiz);
