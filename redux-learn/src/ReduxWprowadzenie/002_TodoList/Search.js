import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchPhrase, setSearchPhase } from "./sliceTodoList2";

export const Search = () => {
  const dispatch = useDispatch();
  const search = useSelector(selectSearchPhrase);
  return (
    <input
      type="text"
      name=""
      id=""
      placeholder="search"
      value={search}
      onChange={(e) => dispatch(setSearchPhase(e.target.value))}
    />
  );
};
