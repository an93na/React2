import React, { useState } from "react";

export const ChangeUser = (props) => {
  const { userToEdit, setUserToEdit } = props;

  console.log(userToEdit);
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
          const newEditUser = userToEdit.map((userEdit) => {
              if(userEdit.id === userToEdit.id){
                
              }
          })
        }}
      >
        <h4 style={{ fontSize: 20 }}>Edytuj użytkownika</h4>
        <div>
          <input
            type="text"
            name=""
            id=""
            value={userToEdit.name}
            onChange={(event) =>
              setUserToEdit({ ...userToEdit, name: event.target.value })
            }
          />
          <input
            type="text"
            name=""
            id=""
            value={userToEdit.lastName}
            onChange={(event) =>
              setUserToEdit({ ...userToEdit, lastName: event.target.value })
            }
          />
          <input
            type="text"
            name=""
            id=""
            value={userToEdit.city}
            onChange={(event) =>
              setUserToEdit({ ...userToEdit, city: event.target.value })
            }
          />
          <input
            type="text"
            name=""
            id=""
            value={userToEdit.country}
            onChange={(event) =>
              setUserToEdit({ ...userToEdit, country: event.target.value })
            }
          />
        </div>
        <button type="submit">Edytuj</button>
      </form>
    </div>
  );
};
