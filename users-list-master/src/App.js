import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { UsersList } from "./components/UsersList/UsersList";
import { AddUser } from "./components/AddUser/AddUser";
import { ChangeUser } from "./components/ChangeUser/ChangeUser";

const USERS = [
  {
    id: "fw32dw",
    name: "Jane",
    lastName: "Doe",
    img: "https://api.dicebear.com/6.x/adventurer/svg?seed=Sassy",
    address: {
      city: "Wexford",
      country: "Ireland",
    },
  },
  {
    id: "qweq3rq3",
    name: "John",
    lastName: "Doe",
    img: "https://api.dicebear.com/6.x/adventurer/svg?seed=Garfield",
    address: {
      city: "Wexford",
      country: "Ireland",
    },
  },
  {
    id: "r3r23r2",
    name: "Jack",
    lastName: "Doe",
    img: "https://api.dicebear.com/6.x/adventurer/svg?seed=Bella",
    address: {
      city: "London",
      country: "England",
    },
  },
  {
    id: "d3j3298",
    name: "Ginger",
    lastName: "Eod",
    img: "https://api.dicebear.com/6.x/adventurer/svg?seed=Ginger",
    address: {
      city: "New York",
      country: "USA",
    },
  },
  {
    id: "e12eqwe",
    name: "Jasmine",
    lastName: "Jassy",
    img: "https://api.dicebear.com/6.x/adventurer/svg?seed=Jasmine",
    address: {
      city: "Warsaw",
      country: "Poland",
    },
  },
];

function App() {
  const [users, setUsers] = useState(USERS);
  const [searchPhrase, setSearchPhrase] = useState("");

  const handleSearchPhraseChange = (searchPhraseInput) => {
    setSearchPhrase(searchPhraseInput);
  };

  const getFilteredUsers = () => {
    return users.filter(({ name, lastName, address }) => {
      if (!searchPhrase) {
        return true;
      }
      return (
        name.toLocaleLowerCase().includes(searchPhrase) ||
        lastName.toLocaleLowerCase().includes(searchPhrase) ||
        address.city.toLocaleLowerCase().includes(searchPhrase) ||
        address.country.toLocaleLowerCase().includes(searchPhrase) ||
        name.toLocaleUpperCase().includes(searchPhrase) ||
        lastName.toLocaleUpperCase().includes(searchPhrase) ||
        address.city.toLocaleUpperCase().includes(searchPhrase) ||
        address.country.toLocaleUpperCase().includes(searchPhrase) ||
        (name.charAt(0).toUpperCase() + name.slice(1)).includes(searchPhrase) ||
        (lastName.charAt(0).toUpperCase() + lastName.slice(1)).includes(
          searchPhrase
        ) ||
        (address.city.charAt(0).toUpperCase() + address.city.slice(1)).includes(
          searchPhrase
        ) ||
        (
          address.country.charAt(0).toUpperCase() + address.country.slice(1)
        ).includes(searchPhrase)
      );
    });
  };

  const usersToDisplay = getFilteredUsers();

  return (
    <div className="container">
      <Header onSearchPhraseChange={handleSearchPhraseChange} />
      <UsersList users={usersToDisplay} setUsers={setUsers} />
      <AddUser users={users} setUsers={setUsers} /> 
    </div>
  );
}

export default App;
