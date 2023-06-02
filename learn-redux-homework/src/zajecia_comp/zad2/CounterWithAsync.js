import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCounter, updateCounter } from "./sliceCounterWithAsync";
import { Loader } from "./Loader";
import { selectIsLoading, selectCounterValue } from "./sliceCounterWithAsync";

export const CounterWithAsync = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const counter = useSelector(selectCounterValue);

  useEffect(() => {
    dispatch(getCounter());
  }, [dispatch]);
  return (
    <article>
      {isLoading && <Loader />}
      <p>CounterWithAsync</p>
      <button onClick={() => dispatch(updateCounter(counter+5))}>+5</button>
      <input type="text" value={counter} readOnly />
      <button onClick={() => dispatch(updateCounter(counter-10))}>-10</button>
    </article>
  );
};
