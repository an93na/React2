import React, { useState } from "react";



export const ChangeUser = (props) => {
    const { users, setUsers } = props;
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
  
    return <div>
        <form action="" onChange={(e)=>{
            e.preventDefault()
        }}>
            <input type="text" name="" id="" placeholder={name} value={name} onChange={(event) => setName(event.target.value)}/>
            <input type="text" name="" id="" placeholder={lastName} value={lastName} onChange={(event) => setLastName(event.target.value)}/>
            <input type="text" name="" id="" placeholder={city} value={city} onChange={(event) => setCity(event.target.value)}/>
            <input type="text" name="" id="" placeholder= {country} value={country} onChange={(event) => setCountry(event.target.value)}/>
            <button type="submit">submit</button>
        </form>
    </div>
}