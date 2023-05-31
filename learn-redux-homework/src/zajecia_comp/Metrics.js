import React from "react";
import { useSelector } from "react-redux";
import {
  selectTotalNumberLessOf5MarksTodos,
  selectTotalNumberMarksofTodos,
  selectTotalNumberofTodos,
} from "./todoListSlice";

export const Metrics = () => {
  const total = useSelector(selectTotalNumberofTodos);
  const znaki = useSelector(selectTotalNumberMarksofTodos);
  const mniejniz5 = useSelector(selectTotalNumberLessOf5MarksTodos);
  return (
    <article>
      <p>Total: {total}</p>
      <p>Ilość wszystkich znaków: {znaki}</p>
      <p>Ilość słów które mają mniej niż 5 znaków: {mniejniz5}</p>
    </article>
  );
};
