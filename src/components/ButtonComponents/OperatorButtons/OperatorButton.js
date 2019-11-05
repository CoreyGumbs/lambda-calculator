import React from "react";


const OperatorButton = props => {

  const {operator} =  props;

  return (
    <>
      <button>{operator.value}</button>
    </>
  );
};

export default OperatorButton;