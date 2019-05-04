import React from "react";

import { colors } from "../data/data";
import Question from "./Question";

class Quiz extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nr: 0,
			total: colors.length,
			score: 0,
			completed: false
		};
		this.checkAnswer = this.checkAnswer.bind(this);
		this.nextQuestion = this.nextQuestion.bind(this);
	}

	componentDidUpdate() {
		console.log("didupdate");
	}

	componentWillMount() {
		let { nr } = this.state;
		this.createNewQuestion(nr);
	}

	createNewQuestion(nr) {
		this.setState({
			currentWord: colors[nr].word,
			img: colors[nr].img,
			options: colors[nr].options,
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
			setTimeout(() => {
				element.classList.toggle("correct-answer");
				this.nextQuestion();
			}, 1500);
			console.log("after timeout");
			element.classList.toggle("correct-answer");
			this.setState({ score: this.state.score + 1 });
		} else {
			console.log(`${answer} is the wrong answer!`);
			this.nextQuestion();
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
		const { currentWord, img, completed, score, total } = this.state;
		const options = this.shuffle(this.state.options);

		if (completed)
			return (
				<div className="resultImage">
					<br style={{ marginBottom: "10em" }} />
					<div>
						<br />
						Quiz completed, you got {score} out of {total} right!
					</div>
				</div>
			);

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
