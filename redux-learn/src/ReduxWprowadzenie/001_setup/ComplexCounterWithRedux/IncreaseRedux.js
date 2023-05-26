import React from "react";
import { useDispatch } from "react-redux";
import { increaseComplex } from "./complexCounterSlice";

export const IncreaseRedux = ({ value }) => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(increaseComplex(value));
      }}
    >
      +{value}
    </button>
  );
};
