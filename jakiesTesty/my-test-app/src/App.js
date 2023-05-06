import { Counter } from './AkcjeZadZaj/Counter';
import { KalkulatorZFormularzem } from './AkcjeZadZaj/KalkulatorZFormularzem';
import './App.css';
import '@picocss/pico'

function App() {
  return (
    <div className="App">
    <Counter />
    <KalkulatorZFormularzem />
    </div>
  );
}

export default App;
