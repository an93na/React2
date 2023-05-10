import React, { useState } from "react";



export const ChangeUser = (props) => {
    const { users, setUsers } = props;
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
  
    return <div>
        <form action="">
            <input type="text" name="" id="" placeholder={name} value={name}/>
            <input type="text" name="" id="" placeholder={lastName} value={lastName}/>
            <input type="text" name="" id="" placeholder={city} value={city}/>
            <input type="text" name="" id="" placeholder= {country} value={country}/>
            <button type="submit">submit</button>
        </form>
    </div>
}