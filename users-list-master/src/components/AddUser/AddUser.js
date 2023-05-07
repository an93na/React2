import React, { useState } from "react";

export const AddUser = (props) => {
  const { users, setUsers } = props;
  const [plec, setPlec] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const photo = () => {
    if (plec === "K") {
      return "https://api.dicebear.com/6.x/adventurer/svg?seed=Ginger";
    } else if (plec === "M") {
      return "https://api.dicebear.com/6.x/adventurer/svg?seed=Sassy";
    } else {
      return "https://api.dicebear.com/6.x/adventurer/svg?seed=Aneka";
    }
  };

  const newUser = {
    id: plec + Math.random(),
    name: name,
    lastName: lastName,
    img: photo(),
    address: {
      city: city,
      country: country,
    },
  };

  return (
    <div style={{ backgroundColor: "#276ace", color: "white" }}>
      <form
        action=""
        style={{ padding: 10 }}
        onSubmit={(e) => {
          e.preventDefault();
          if (name !== "" && lastName !== "" && city !== "" && country !== "") {
            // console.log(newUser);
            const TabUser = [...users, newUser];
            // console.log(TabUser)
            setUsers(TabUser);
            setName("");
            setLastName("");
            setCity("");
            setCountry("");
            setPlec("");
          }
        }}
      >
        <h4 style={{ fontSize: 20}}>Dodaj nowego użytkownika</h4>
        <select
          name=""
          id=""
          value={plec}
          onChange={(event) => setPlec(event.target.value)}
        >
          <option value="" hidden>
            Wybierz płeć
          </option>
          <option value="K">kobieta</option>
          <option value="M">mężczyzna</option>
        </select>
        <div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Wpisz imię"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Wpisz nazwisko"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Wpisz miasto"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Wpisz kraj"
            value={country}
            onChange={(event) => setCountry(event.target.value)}
          />
        </div>
        <button type="submit">Dodaj</button>
      </form>
    </div>
  );
};
