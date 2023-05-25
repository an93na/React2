import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  increment,
  decrement,
  resetCounter,
  toodleShowPoweredValue,
} from "./counterSlice";

export const CounterRed = () => {
  const counter = useSelector((state) => state.counter.value);
  const poweredCounter = useSelector((state) => state.counter.poweredValue);
  const showPoweredValue = useSelector(
    (state) => state.counter.showPoweredValue
  );
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>+1</button>
      <input type="text" name="" id="" readOnly value={counter} />
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(resetCounter())}>RESET</button>
      <label>
        <input
          type="checkbox"
          name=""
          id=""
          checked={showPoweredValue}
          onChange={() => dispatch(toodleShowPoweredValue())}
        />{" "}
        Show Powered Value
      </label>
      {showPoweredValue && <p>Powered value: {poweredCounter}</p>}
    </div>
  );
};
