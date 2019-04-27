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
			console.log("correct answer!");
		} else {
			console.log("wrong answer!");
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
