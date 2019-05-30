import React from "react";
import { Link } from "react-router-dom";

const Section = props => {
  const { onClick, id, src, alt } = props;
  return (
    <div className="column">
      <Link to="/quiz" onClick={onClick} id={id} className="rc">
        <img src={src} alt={alt} />
        <div className="middle">
          <div className="text"> {alt}</div>
        </div>
      </Link>
    </div>
  );
};

export default Section;
