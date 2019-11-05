import React from "react";

const SpecialButton = props => {
  const {char} = props;
  return (
    <>
      <button className='keyPad-Btn specialBtn'>{char}</button>
    </>
  );
};


export default SpecialButton;