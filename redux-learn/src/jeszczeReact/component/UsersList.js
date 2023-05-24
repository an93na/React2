import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

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

  const handleInputSearch = (event) => {
    setSearch(event.target.value);
  };

  const findUser = () => {
    return users.filter(({ name, lastName}) => {
      if (!search) {
        return true;
      }
      return (
        name.toLocaleLowerCase().includes(search) ||
        lastName.toLocaleLowerCase().includes(search)
      );
    });
  };

  const newUsers = findUser();

  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        placeholder="search"
        value={search}
        onChange={handleInputSearch}
      />
      <table>
        <thead>
          <tr>
            <th>Name:</th>
            <th>Last name:</th>
            <th>Age:</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {newUsers.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td>{user.age}</td>
                <td><Link to={`/users/${user.id}`}>Pokaż szczegóły</Link></td>
                <td>
                  <button
                    style={{ width: "fit-content" }}
                    onClick={() => handleDeleteClick(user.id)}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
