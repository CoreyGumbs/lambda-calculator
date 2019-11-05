import React from "react";


const OperatorButton = props => {

  const {operator} =  props;

  return (
    <>
      <button className='keyPad-Btn operatorBtn'>{operator.char}</button>
    </>
  );
};

export default OperatorButton;