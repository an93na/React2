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
import { CounterRed } from "./ReduxWprowadzenie/001_setup/CounterRed";
import { CounterWithRedux } from "./ReduxWprowadzenie/001_setup/CounterWithRedux";
import { ComplexCounterWithRedux } from "./ReduxWprowadzenie/001_setup/ComplexCounterWithRedux/ComplexCounterWithRedux";
import { TodoList } from "./ReduxWprowadzenie/002_TodoList/TodoList";


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
          <Route path="/counterred" element={<><CounterRed/> <CounterWithRedux/> <ComplexCounterWithRedux/> <TodoList/> </>}/>
        </Routes>
      </article>
    </div>
  );
}

export default App;
