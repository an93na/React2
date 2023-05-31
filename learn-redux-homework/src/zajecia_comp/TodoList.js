import React from "react";
import { Form } from "./Form";
import { List } from "./List";
import { Search } from "./Search";

export const TodoList = () => {
  return (
    <article>
      <p>TodoList</p>
      <Form/>
      <Search/>
      <List/>
    </article>
  );
};
