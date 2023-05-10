import React, { useState } from "react";

export const EditUser = (props) => {
  const { users, setUsers } = props;
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  return <div></div>;
};
