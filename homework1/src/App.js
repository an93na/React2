import './App.css';
import "@picocss/pico";
import { AppTitle } from './componentsPrzelicz/AppTitle';
import { AppTitleDist } from './componentsPrzeliczOdl/AppTitle';

function App() {
  return (
    <div className="App">
      <AppTitle/>
      <AppTitleDist />
    </div>
  );
}

export default App;
