import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./jeszczeReact/component/Home";
import { List } from "./jeszczeReact/component/List";
import { Form } from "./jeszczeReact/component/Form";
import { About } from "./jeszczeReact/component/About";
import { Navigation } from "./jeszczeReact/component/NAvigation";
import { NotFound } from "./jeszczeReact/NieZnaleziono";
import { TodoDetails } from "./jeszczeReact/component/TodoDetails";
import { UsersDetails } from "./jeszczeReact/component/UsersDetails";
import { UsersList } from "./jeszczeReact/component/UsersList";
import { Counter } from "./ReduxWprowadzenie/000_powtorka/Counter";


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
          <Route path="/counter" element={<Counter/>}/>
        </Routes>
      </article>
    </div>
  );
}

export default App;
