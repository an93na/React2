import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const UsersDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3010/users/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => setUser(data));
  }, [id]);
  if (user === null) {
    return <h2>Loading ...</h2>;
  }
  return (
    <div>
      <h4>User name: {user.name}</h4>
      <h4>User Last name: {user.lastName}</h4>
      <h4>User age: {user.age}</h4>
    </div>
  );
};
