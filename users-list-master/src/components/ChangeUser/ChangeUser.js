import React, { useState } from "react";

export const ChangeUser = (props) => {
  const { users, setUsers } = props;
  const [name, setName] = useState(props.name);
  const [lastName, setLastName] = useState(props.lastName);
  const [city, setCity] = useState(props.city);
  const [country, setCountry] = useState(props.country);
    
  const changeUser = {
    name: name,
    lastName: lastName,
    address: {
      city: city,
      country: country,
    },
  };
  console.log(props.lastName)
  return (
    <div
      style={{
        backgroundColor: "#276ace",
        color: "white",
        padding: 10,
        marginBottom: 10,
      }}
    >
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          const editUser = [...users, changeUser];
          setUsers(editUser)
          setName("");
          setLastName("");
          setCity("");
          setCountry("");
        }}
      >
        <h4 style={{ fontSize: 20 }}>Edytuj użytkownika</h4>
        <div>
          <input
            type="text"
            name=""
            id=""
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="text"
            name=""
            id=""
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
          <input
            type="text"
            name=""
            id=""
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
          <input
            type="text"
            name=""
            id=""
            value={country}
            onChange={(event) => setCountry(event.target.value)}
          />
        </div>
        <button type="submit">Edytuj</button>
      </form>
    </div>
  );
};
