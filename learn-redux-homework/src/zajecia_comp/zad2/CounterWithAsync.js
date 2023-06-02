import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCounter } from "./sliceCounterWithAsync";

export const CounterWithAsync = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCounter());
  }, [dispatch]);
  return (
    <article>
      {/* <Loader /> */}
      <p>CounterWithRedux</p>
      <button>+5</button>
      <input type="text" value={0} readOnly />
      <button>-10</button>
    </article>
  );
};
