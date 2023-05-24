import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const TodoDetails = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3010/todos/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTodo(data);
      });
  }, [id]);

  if (todo === null){
    return <h2>Loading...</h2>
  }
  
  return <h2>Todo title: {todo.title}</h2>;
};
