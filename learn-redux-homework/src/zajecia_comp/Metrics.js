import React from "react";
import { useSelector } from "react-redux";
import { selectTotalNumberMarksofTodos, selectTotalNumberofTodos } from "./todoListSlice";

export const Metrics = () => {
  const total = useSelector(selectTotalNumberofTodos);
  const znaki = useSelector(selectTotalNumberMarksofTodos);
  return (
    <article>
      <p>Total: {total}</p>
      <p>Ilość wszystkich znaków: {znaki}</p>
      <p>Ilość słów które mają mniej niż 5 znaków: {10}</p>
    </article>
  );
};
