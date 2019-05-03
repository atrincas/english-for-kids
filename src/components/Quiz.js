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
			// Change color of border to green buttons and image:
			// Set timeout(Change the classname of clicked item to 'green',1000).
			let el = document.getElementById(answer);
			el.classList.add('right-answer')
			setTimeout(() => {
			el.classList.remove('right-answer');
  			this.nextQuestion();
			}, 2000)
			
		} else {
			console.log(`${answer} is the wrong answer!`);
			// Change color of border to red buttons and image:
			// Change the classname of clicked item to 'red'
			let el = document.getElementById(answer);
			el.classList.add('wrong-answer')
			setTimeout(() => {
			el.classList.remove('wrong-answer');
			this.nextQuestion();
			}, 2000);
			
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
				<div className="completed">
					Quiz completed, you got {score} out of {total} right!
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
