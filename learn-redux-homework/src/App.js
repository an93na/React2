import { Link, Route, Routes } from "react-router-dom";
import { Home } from './components/Home';
import { Dashboard } from './components/Dashboard';
import { Counter } from './components/Counter';
import { CounterWithInput } from './components/CounterWithInput';
import { TodoList } from "./zajecia_comp/TodoList";
import { Metrics } from "./zajecia_comp/Metrics";
import { Users } from "./zajecia_comp/zad1/Users";
import { CounterWithAsync } from "./zajecia_comp/zad2/CounterWithAsync";

function App() {
  return (
    <div className="container">
      <article>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/dashboard'>Dashboard</Link>
          <Link to='/counter'>Counter</Link>
          <Link to='/counterwithinput'>CounterWithInput</Link>
          <Link to='/zajecia'>Zajecia</Link>
        </nav>
      </article>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/counter' element={<Counter/>} />
        <Route path='/counterwithinput' element={<CounterWithInput/>} />
        <Route path="/zajecia" element={<><TodoList/>  <Metrics/> <Users/> <CounterWithAsync/></>}/> 
      </Routes>

    </div>
  );
}

export default App;
