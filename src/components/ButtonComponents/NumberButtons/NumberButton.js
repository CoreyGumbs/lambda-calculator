import React from "react";

const NumberButton = props => {
  const {number} = props;
  return (
    <>
      <button className='keyPad-Btn numberBtn' value={number}>{number}</button>
    </>
  );
};

export default NumberButton;
