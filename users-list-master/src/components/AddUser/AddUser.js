import React, { useState } from "react";

export const AddUser = () => {
    const [plec, setPlec] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

  return (
    <div style={{backgroundColor: '#276ace', color:'white'}}>
      <h4 style={{ padding: 10 }}>Dodaj nowego użytkownika</h4>
      <form action="" style={{ padding: 10 }} onSubmit={(e)=> {e.preventDefault()}}>
        <select name="" id="">
          <option value="" hidden>
            Wybierz płeć
          </option>
          <option value="K">kobieta</option>
          <option value="M">mężczyzna</option>
        </select>
        <div>
          <input type="text" name="" id="" placeholder="Wpisz imię" />
          <input type="text" name="" id="" placeholder="Wpisz nazwisko" />
          <input type="text" name="" id="" placeholder="Wpisz miasto" />
          <input type="text" name="" id="" placeholder="Wpisz kraj" />
        </div>
        <button type="submit">Dodaj</button>
      </form>
    </div>
  );
};
