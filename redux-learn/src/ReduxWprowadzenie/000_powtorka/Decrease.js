import React from "react";

export const Decrease = (props) => {
  const { number, setNumber } = props;
  const handleButtonDecrease = () => {
    setNumber(number - 1);
  };
  return <button onClick={handleButtonDecrease}>-1</button>;
};
