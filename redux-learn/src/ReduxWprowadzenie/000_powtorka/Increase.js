import React from "react";

export const Increase = (props) => {
  const { number, setNumber } = props;
  const handleButtonIncrease = () => {
    setNumber(number + 1);
  };
  return <button onClick={handleButtonIncrease}>+1</button>;
};
