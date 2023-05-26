import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo} from "./sliceTodoList";

export const TodoList = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoRedu.value);
  return (
    <div>
      <p>TodoList</p>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addTodo(todoTitle));
          setTodoTitle("");
        }}
      >
        <input
          required
          type="text"
          name=""
          id=""
          placeholder="TodoTitle"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {todos.map((todo)=>{
            return <li key={todo}>{todo}</li>
        })}
      </ul>
    </div>
  );
};
