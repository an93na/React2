import './App.css';
import "@picocss/pico";
import { WeightApp } from './componentsPrzelicz/WeightApp';
import { DistanceApp } from './componentsPrzeliczOdl/DistanceApp';


function App() {
  return (
    <div className="App">
      <WeightApp />
      <DistanceApp />
    </div>
  );
}

export default App;
