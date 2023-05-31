import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectorSearchPharse, setPharse } from "./todoListSlice";

export const Search = () => {
  const dispatch = useDispatch();
  const search = useSelector(selectorSearchPharse);
  return (
    <input
      type="text"
      name=""
      id=""
      placeholder="search"
      value={search}
      onChange={(e) => dispatch(setPharse(e.target.value))}
    />
  );
};
