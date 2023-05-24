import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const List = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = () => {
    fetch("http://localhost:3010/todos")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
      });
  };

  const handleDeleteClick = (idToDelete) => {
    fetch(`http://localhost:3010/todos/${idToDelete}`, {
      method: "DELETE",
    }).then(getTodos);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <tr key={todo.id}>
            <td>{todo.title}</td>
            <td>
              <Link to={`/todos/${todo.id}`}>Pokaż szczegóły</Link>
            </td>
            <td>
              <button onClick={() => handleDeleteClick(todo.id)}>DELETE</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
