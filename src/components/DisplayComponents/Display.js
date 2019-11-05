import React from "react";

const Display = props => {
  const {displayNum} = props;

  return <div className="display">{displayNum}</div>;
  
};

export default Display;