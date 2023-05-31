import React, { useState } from "react";
import { addTodo } from "./todoListSlice";
import { useDispatch } from "react-redux";

export const Form = () => {
  const [todo, setTodo] = useState();
  const dispatch = useDispatch();

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addTodo(todo));
          setTodo("");
        }}
      >
        <input
        required
          type="text"
          name=""
          id=""
          placeholder="todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
