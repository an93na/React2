import React, { useState } from "react";

export const AddUser = () => {
  const [plec, setPlec] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
    console.log(plec);
  return (
    <div style={{ backgroundColor: "#276ace", color: "white" }}>
      <h4 style={{ padding: 10 }}>Dodaj nowego użytkownika</h4>
      <form
        action=""
        style={{ padding: 10 }}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <select name="" id="" value={plec} onChange={(event) => setPlec(event.target.value)}>
          <option value="" hidden>
            Wybierz płeć
          </option>
          <option value="K">kobieta</option>
          <option value="M">mężczyzna</option>
        </select>
        <div>
          <input type="text" name="" id="" placeholder="Wpisz imię" value={name} onChange={(event)=> setName(event.target.value)}/>
          <input type="text" name="" id="" placeholder="Wpisz nazwisko" value={lastName} onChange={(event) => setLastName(event.target.value)} />
          <input type="text" name="" id="" placeholder="Wpisz miasto" value={city} onChange={(event) => setCity(event.target.value)}/>
          <input type="text" name="" id="" placeholder="Wpisz kraj" value={country} onChange={(event) => setCountry(event.target.value)}/>
        </div>
        <button type="submit">Dodaj</button>
      </form>
    </div>
  );
};
