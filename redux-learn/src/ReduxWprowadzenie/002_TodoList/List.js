import React from "react";
import { useSelector } from "react-redux";
import { selectTodos2 } from "./sliceTodoList2";

export const List = () => {
  const todoList = useSelector(selectTodos2);
  return (
    <div>
      <ul>
        <li style={{ listStyle: "none" }}>TODOS: </li>
        {todoList.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};
