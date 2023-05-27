import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo2 } from "./sliceTodoList2";

export const Form = () => {
  const [todos, setTodos] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addTodo2(todos));
          setTodos("");
        }}
      >
        <input
          type="text"
          placeholder="Todo"
          name=""
          id=""
          value={todos}
          onChange={(e) => setTodos(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
