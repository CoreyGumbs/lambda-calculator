import React from "react";

const SpecialButton = props => {
  const {char} = props;
  return (
    <>
      <button>{char}</button>
    </>
  );
};


export default SpecialButton;