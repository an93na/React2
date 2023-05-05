import './App.css';
import "@picocss/pico";
import { AppTitleDist } from './componentsPrzeliczOdl/AppTitle';
import { WeightComponents } from './componentsPrzelicz/WeightComponents';

function App() {
  return (
    <div className="App">
      <WeightComponents />
      <AppTitleDist />
    </div>
  );
}

export default App;
