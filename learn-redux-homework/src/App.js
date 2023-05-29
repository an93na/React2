import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <main className="container">
      <article>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/dashboard'>Dashboard</Link>
        </nav>
      </article>
    </main>
  );
}

export default App;
