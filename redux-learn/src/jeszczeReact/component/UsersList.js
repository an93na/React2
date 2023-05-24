import React, { useEffect, useState } from "react";

export const UsersList = () => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    fetch("http://localhost:3010/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleDeleteClick = (idToDelete) => {
    fetch(`http://localhost:3010/users/${idToDelete}`, {
      method: "DELETE",
    }).then(getUsers);
  };

  return (
    <div>
        <input type="text" name="" id="" placeholder="search"/>
    <table>
      <thead>
        <tr>
          <th>Name:</th>
          <th>Last name:</th>
          <th>Age:</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.lastName}</td>
              <td>{user.age}</td>
              <td>
                <button style={{ width: "fit-content" }} onClick={() => handleDeleteClick(user.id)}>DELETE</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
};
