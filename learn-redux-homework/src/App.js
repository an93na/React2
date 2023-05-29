import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <main className="container">
      <article>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/dashboard'>Dashboard</Link>
          <Link to='/counter'>Counter</Link>
          <Link to='/counterwithinput'>CounterWithInput</Link>
        </nav>
      </article>
    </main>
  );
}

export default App;
