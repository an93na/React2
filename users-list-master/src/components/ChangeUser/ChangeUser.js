import React, { useState } from "react";



export const ChangeUser = (props) => {
    const { users, setUsers } = props;
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
  
    return <div>
        <form action="">
            
            <button type="submit">submit</button>
        </form>
    </div>
}