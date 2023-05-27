import React, { useState } from "react";

export const Form = () => {
  const [todos, setTodos] = useState("");
  return (
    <div>
      <form action="" onSubmit={(e) => {
        e.preventDefault()

      }}>
        <input type="text" placeholder="Todo" name="" id="" value={todos} onChange={(e) => setTodos(e.target.value)}/>
        <button>Submit</button>
      </form>
    </div>
  );
};
