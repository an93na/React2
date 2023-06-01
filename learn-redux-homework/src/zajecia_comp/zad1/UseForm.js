import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./usersSlice";

export const UseForm = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");

  const dispatch = useDispatch();

  return (
    <div
      style={{
        border: "1px solid gray",
        borderRadius: 20,
        padding: 20,
        marginBottom: 20,
      }}
    >
      <p>UserForm</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const user = {
            id: Math.random(),
            name,
            lastName,
            age,
          };
          dispatch(addUser(user));
          setName("");
          setLastName("");
          setAge("");
        }}
      >
        <input
        required
          type="text"
          name=""
          id=""
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
        required
          type="text"
          name=""
          id=""
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
