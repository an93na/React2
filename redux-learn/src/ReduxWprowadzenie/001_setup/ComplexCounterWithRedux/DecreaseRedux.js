import React from "react";
import { useDispatch } from "react-redux";
import { decreaseComplex } from "./complexCounterSlice";

export const DecreaseRedux = ({ value }) => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(decreaseComplex(value))}>-{value}</button>
  );
};
