import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, odd, resetBtn, selectCountInput } from "./CounterWithInputSlice";

export const CounterWithInput = () => {
  const [number, setNumber] = useState(0);
  const selectorCounterInp = useSelector(selectCountInput)
  const dispatch = useDispatch();
  return (
    <div>
      <h3>CounterWithInput: {selectorCounterInp}</h3>
      <div style={{ display: "flex", gap: 20 }}>
        <button onClick={() => dispatch(add(Number(number)))}>+</button>
        <input
          type="text"
          name=""
          id=""
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button onClick={() => dispatch(odd(number))}>-</button>
      </div>
        <button onClick={() => dispatch(resetBtn())}>Reset</button>
    </div>
  );
};
