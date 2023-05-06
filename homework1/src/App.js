import './App.css';
import "@picocss/pico";
import { WeightApp } from './componentsPrzelicz/WeightApp';
import { DistanceApp } from './componentsPrzeliczOdl/DistanceApp';


function App() {
  return (
    <div className="App"style={{margin:30}}>
      <WeightApp />
      <DistanceApp />
    </div>
  );
}

export default App;
