import React from "react";

class Section extends React.Component {
  render() {
    const { onClick, id, src, alt } = this.props;
    return (
      <div className="column">
        <div onClick={onClick} id={id} className="rc">
          <img src={src} alt={alt} />
          <div className="middle">
            <div className="text">{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Section;
