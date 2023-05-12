import { Calculator2 } from './AkcjeZadZaj/Calculator2';
import { Counter } from './AkcjeZadZaj/Counter';
import { FilterableProductTable } from './AkcjeZadZaj/FilterProducts/FilterableProductTable';
import { Formularz } from './AkcjeZadZaj/Formularz';
import { Kalkulator } from './AkcjeZadZaj/Kalkulator';
import { Kolko } from './AkcjeZadZaj/Kolko';
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
    <Calculator2/>
    <FilterableProductTable />
    <Kolko/>
    </div>
  );
}

export default App;
