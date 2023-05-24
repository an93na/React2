import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./jeszczeReact/component/Home";
import { List } from "./jeszczeReact/component/List";
import { Form } from "./jeszczeReact/component/Form";
import { About } from "./jeszczeReact/component/About";
import { Navigation } from "./jeszczeReact/component/NAvigation";
import { NotFound } from "./jeszczeReact/NieZnaleziono";
import { TodoDetails } from "./jeszczeReact/component/TodoDetails";
import { UsersDetails } from "./jeszczeReact/component/UsersDetails";
import { UsersList } from "./jeszczeReact/component/UsersList";


function App() {
  return (
    <div className="container">
      <article>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/list" element={<List />} />
          <Route path="/about" element={<About />} />
          <Route path="/userslist" element={<UsersList />} />
          <Route path="todos/:id" element={<TodoDetails/>}/>
          <Route path="/users/:id" element={<UsersDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </article>
    </div>
  );
}

export default App;
