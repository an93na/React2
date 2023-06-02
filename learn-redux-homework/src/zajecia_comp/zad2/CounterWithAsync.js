import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCounter } from "./sliceCounterWithAsync";
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
      <button>+5</button>
      <input type="text" value={counter} readOnly />
      <button>-10</button>
    </article>
  );
};
