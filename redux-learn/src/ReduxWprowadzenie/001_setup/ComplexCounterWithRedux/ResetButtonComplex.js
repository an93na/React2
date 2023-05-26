import React from "react";
import { useDispatch } from "react-redux";
import { resetComplex } from "./complexCounterSlice";

export const ResetButtonComplex = () => {
  const dispatch = useDispatch();
  return <button onClick={() => {dispatch(resetComplex())}}>RESET</button>;
};
