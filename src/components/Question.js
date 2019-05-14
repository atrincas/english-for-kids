import React from "react";

class Question extends React.PureComponent {
	render() {
		const {
			imgUrl,
			options,
			checkAnswer,
			correctAnswer,
			wrongAnswer,
			disableButton
		} = this.props;

		return (
			
			<div className="bgImage">
				<div className="nav">
						<a href="/">Home</a>
						<a href="/app">App</a>
						<a href="/quiz">Quiz</a>
						<a href="https://github.com/atrincas/english-for-kids/blob/master/README.md" target="_blank" rel="noopener noreferrer">About</a>
					</div>
				<br style={{ marginBottom: "2em" }} />
				<div className="container">
					
					<h1 style={{fontFamily: 'Chewy' }}>Choose the right color</h1>
					<br></br>
					<img id="img"
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
									style={{ pointerEvents: disableButton ? 'none' : 'auto' }}
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
