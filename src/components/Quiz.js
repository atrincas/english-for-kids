import React from "react";

import data from "../data/data";
import Question from "./Question";

class Quiz extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nr: 0,
			total: data.length,
			score: 0,
			finsihed: false
		};
		this.checkAnswer = this.checkAnswer.bind(this);
		this.nextQuestion = this.nextQuestion.bind(this);
	}

	componentWillMount() {
		let { nr } = this.state;
		this.createNewQuestion(nr);
	}

	createNewQuestion(nr) {
		this.setState({
			currentWord: data[nr].word,
			img: data[nr].img,
			options: data[nr].options,
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
			{ currentWord } = this.state;

		if (answer === currentWord) {
			console.log(`${answer} is the right answer!`);
			this.setState({ score: this.state.score + 1 });
			setTimeout(this.nextQuestion, 1000);
		} else {
			console.log(`${answer} is the wrong answer!`);
			setTimeout(this.nextQuestion, 1000);
		}
	}

	nextQuestion() {
		let { nr, total, score } = this.state;

		// Check if quiz is finsihed:
		if (nr === total) {
			this.setState({
				finsihed: true
			});
		} else {
			// Assign values to state for the next word:
			this.createNewQuestion(nr);
		}
	}

	render() {
		const { currentWord, img } = this.state;
		const options = this.shuffle(this.state.options);

		return (
			<Question
				word={currentWord}
				imgUrl={img}
				options={options}
				checkAnswer={this.checkAnswer}
			/>
		);
	}
}

export default Quiz;
