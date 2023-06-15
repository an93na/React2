import "./App.css";
import Login from "./components/LoginComponents/Login";
import Submit from "./components/SubmitComponent/Submit";
import { TestData } from "./components/TestComponents/TestData";

function App() {
  return (
    <div className="App">
      <Login />
      <Submit/>
      <TestData/>
    </div>
  );
}

export default App;
