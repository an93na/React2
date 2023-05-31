import React from "react";
import { useSelector } from "react-redux";
import { selectTodo } from "./todoListSlice";

export const List = () => {
  const todos = useSelector(selectTodo);
  return (
    <div>
      <ul>
        <li>
          <b>Todos:</b>
        </li>
        {todos.map((todo) => {
          return <li key={todo}>{todo}</li>;
        })}
      </ul>
    </div>
  );
};
