import React, { useState } from "react";

export const Form = () => {
  const [todo, setTodo] = useState();

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input type="text" name="" id="" placeholder="todo" value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button>Submit</button>
      </form>
    </div>
  );
};
