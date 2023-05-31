import React from "react";
import { useSelector } from "react-redux";
import { selectTotalNumberofTodos } from "./todoListSlice";

export const Metrics = () => {
    const total = useSelector(selectTotalNumberofTodos)
  return (
    <article>
      <p>Total: {total}</p>
      <p>Ilość wszystkich znaków: {10}</p>
      <p>Ilość słów które mają mniej niż 5 znaków: {10}</p>
    </article>
  );
};
