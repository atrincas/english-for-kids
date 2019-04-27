import React from "react";

import data from "../data/data";

class Quiz extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nr: 0,
			total: data.length,
			score: 0,
			finsihed: false
		};
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

	render() {
		return <div />;
	}
}

export default Quiz;
