import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./jeszczeReact/component/Home";
import { List } from "./jeszczeReact/component/List";
import { Form } from "./jeszczeReact/component/Form";
import { About } from "./jeszczeReact/component/About";

const style = {
  margin: 20,
  padding: 20,
  border: "2px solid blue",
  display: "flex",
  borderRadius: 5,
  gap: 50,
};

function App() {
  return (
    <div className="container">
      <article>
        <div style={style}>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/form'>Form</Link>
          <Link to='/list'>List</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/list" element={<List />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </article>
    </div>
  );
}

export default App;
