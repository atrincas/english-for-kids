import React from "react";

class Question extends React.PureComponent {
	render() {
		const {
			imgUrl,
			options,
			checkAnswer,
			correctAnswer,
			wrongAnswer
		} = this.props;

		return (
			<div className="bgImage">
				<br style={{ marginBottom: "8em" }} />
				<div className="container">
					<h1>Choose the right color</h1>
					<img
						src={imgUrl}
						className={
							correctAnswer
								? "correct-answer"
								: wrongAnswer
								? "wrong-answer"
								: null
						}
						alt="word"
					/>
					<ul className="options">
						{options.map((option, i) => {
							return (
								<li
									className="options-li"
									id={option}
									key={i}
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
