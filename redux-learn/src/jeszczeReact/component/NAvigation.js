import React from "react";
import { Link } from "react-router-dom";


const style = {
    margin: 20,
    padding: 20,
    border: "2px solid blue",
    display: "flex",
    borderRadius: 5,
    gap: 50,
  };
  

export const Navigation = () => {
    return <div>
        <div style={style}>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/form'>Form</Link>
          <Link to='/list'>List</Link>
          <Link to='/userslist'>UsersList</Link>
        </div>
    </div>
}