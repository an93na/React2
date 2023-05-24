import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./jeszczeReact/component/Home";
import { List } from "./jeszczeReact/component/List";
import { Form } from "./jeszczeReact/component/Form";
import { About } from "./jeszczeReact/component/About";
import { Navigation } from "./jeszczeReact/component/NAvigation";
import { NotFound } from "./jeszczeReact/NieZnaleziono";

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
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/list" element={<List />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </article>
    </div>
  );
}

export default App;
