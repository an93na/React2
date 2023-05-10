import React, { useState } from "react";

export const EditUser = (props) => {
  const { users, setUsers } = props;
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  return <div>
    <form action="">
        <input type="text" name="" id="" value={name}/>
        <input type="text" name="" id="" value={lastName}/>
        <input type="text" name="" id="" value={city}/>
        <input type="text" name="" id="" value={country}/>
        <button type="submit"></button>
    </form>
  </div>;
};
