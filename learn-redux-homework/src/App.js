import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import { Home } from './components/Home';
import { Dashboard } from './components/Dashboard';
import { Counter } from './components/Counter';
import { CounterWithInput } from './components/CounterWithInput';

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

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/counter' element={<Counter/>} />
        <Route path='/counterwithinput' element={<CounterWithInput/>} />
      </Routes>

    </main>
  );
}

export default App;
