import React from "react";
import { useSelector } from "react-redux";
import { selectCosTamCosTam } from "./counterSlice";
import { selectCountInput } from "./CounterWithInputSlice";

export const Dashboard = () => {
  const counter = useSelector(selectCosTamCosTam);
  const counterInp = useSelector(selectCountInput);
  return (
    <div>
      <h3>Dashboard</h3>
      <p>Counter value: {counter} </p>
      <p>Counter with input value: {counterInp} </p>
    </div>
  );
};
