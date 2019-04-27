import React from "react";

class Question extends React.PureComponent {
	render() {
		const { imgUrl, options } = this.props;

		return (
			<React.Fragment>
				<img src={imgUrl} alt="word" />
				<ul className="options">
					{options.map((option, i) => {
						return <li key={i}>{option}</li>;
					})}
				</ul>
			</React.Fragment>
		);
	}
}

export default Question;
