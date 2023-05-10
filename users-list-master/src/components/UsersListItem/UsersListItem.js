import React from "react";
import { ChangeUser } from "../ChangeUser/ChangeUser";

export const UsersListItem = (props) => {
  const { user, users } = props;

  const data = () => {
      return(<ChangeUser
      users={users}
      user={user}
      name={user.name}
      lastName={user.lastName}
      city={user.address.city}
      country={user.address.country}
    />)
      }
    ;
  return (
    <div className="users-list-item__container">
      <img width={100} src={user.img} alt="avatar" />
      <div>
        <p>
          <b>
            {user.name} {user.lastName}
          </b>
        </p>
        <p>
          {user.address.city}, {user.address.country}
        </p>
      </div>
      <div>
        <button
          style={{
            height: 20,
            textAlign: "center",
            alignItems: "center",
            margin: "auto",
            cursor: "pointer",
          }}
          onClick={() => {
            // console.table(users)
            const newList = users.filter((userToDelete) => {
              // console.log(userToDelete.id)
              return userToDelete.id !== user.id;
            });
            props.setUsers(newList);
          }}
        >
          usun
        </button>
        <button
          style={{
            height: 20,
            textAlign: "center",
            alignItems: "center",
            margin: "auto",
            cursor: "pointer",
          }}
          onClick={data}
        >
          edytuj
        </button>
      </div>
    </div>
  );
};
