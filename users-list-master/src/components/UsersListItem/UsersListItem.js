import React from "react";

export const UsersListItem = (props) => {
  const { user } = props;
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
      <button
        style={{
          height: 20,
          textAlign: "center",
          alignItems: "center",
          margin: "auto",
          cursor: "pointer",
        }}
        onClick={() => {
          // console.table(props.users)
          const newList = props.users.filter((userToDelete) => {
            // console.log(userToDelete.id)
            return userToDelete.id !== user.id;
          })
          props.setUsers(newList);
        }}
      >
        usun
      </button>
    </div>
  );
};
