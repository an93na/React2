import { Counter } from './AkcjeZadZaj/Counter';
import { Formularz } from './AkcjeZadZaj/Formularz';
import { Kalkulator } from './AkcjeZadZaj/Kalkulator';
import { Metryki } from './AkcjeZadZaj/Metryki';
import './App.css';
import '@picocss/pico'

function App() {
  return (
    <div className="App">
    <Counter />
    <Kalkulator/>
    <Formularz />
    <Metryki />
    </div>
  );
}

export default App;
