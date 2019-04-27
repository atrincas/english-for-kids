import React from "react";

class Question extends React.PureComponent {
	render() {
		const { imgUrl, options, checkAnswer } = this.props;

		return (
			<React.Fragment>
				<img src={imgUrl} alt="word" />
				<ul className="options">
					{options.map((option, i) => {
						return (
							<li key={i} onClick={checkAnswer}>
								{option}
							</li>
						);
					})}
				</ul>
			</React.Fragment>
		);
	}
}

export default Question;
