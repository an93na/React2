import './App.css';
import "@picocss/pico";
import { AppTitleDist } from './componentsPrzeliczOdl/AppTitle';
import { WeightApp } from './componentsPrzelicz/WeightApp';


function App() {
  return (
    <div className="App">
      <WeightApp />
      <AppTitleDist />
    </div>
  );
}

export default App;
