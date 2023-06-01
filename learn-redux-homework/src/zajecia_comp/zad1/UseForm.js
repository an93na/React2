import React from "react";

export const UseForm = () => {
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
        }}
      >
        <input type="text" name="" id="" placeholder="Name" />
        <input type="text" name="" id="" placeholder="Last Name" />
        <input type="text" name="" id="" placeholder="Age" />
        <button>Submit</button>
      </form>
    </div>
  );
};
