import React, { useState } from "react";

export const Calculator2 = () => {
    const [number1, setNumber1] = useState('')
    const [number2, setNumber2] = useState('')
    const [operation, setOperation] = useState('')
    const [result, setResult] = useState(0)

    function giveCalculation(n1, n2, op) {
      if (op === "+") {
        return Number(n1) + Number(n2);
      } else if (op === "-") {
        return Number(n1) - Number(n2);
      } else if (op === "*") {
        return Number(n1) * Number(n2);
      } else if (op === "/") {
        return Number(n1) / Number(n2);
      }
    }
    
    const calculation = giveCalculation(number1, number2, operation)
    const handleButtonClick = (buttonValue) => {
      
    }
    
    const handleButtonResultClick = () => {
      return setResult(calculation)
    }

  return (
    <article style={{ marginLeft: 30, marginRight: 30 }}>
      <h4>Kalkulator 2</h4>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div style={{width: 400, backgroundColor: "gray", padding: 20, margin: 20, borderRadius: '10px'}}>
      <input type="text" name="" id="" readOnly value={result}/>
        <div style={{ display: "flex", gap: 20 }}>
          <button onClick={()=> handleButtonClick(1)}>1</button>
          <button onClick={() => handleButtonClick(2)}>2</button>
          <button onClick={() => handleButtonClick(3)}>3</button>
        </div>
        <div style={{ display: "flex", gap: 20 }}>
          <button onClick={()=> handleButtonClick(4)}>4</button>
          <button onClick={() => handleButtonClick(5)}>5</button>
          <button onClick={() => handleButtonClick(6)}>6</button>
        </div>
        <div style={{ display: "flex", gap: 20 }}>
          <button onClick={()=> handleButtonClick(7)}>7</button>
          <button onClick={() => handleButtonClick(8)}>8</button>
          <button onClick={() => handleButtonClick(9)}>9</button>
        </div>
        <div style={{ display: "flex", gap: 20 }}>
          <button onClick={()=> handleButtonClick('+')}>+</button>
          <button onClick={()=> handleButtonClick('-')}>-</button>
          <button onClick={()=> handleButtonClick('*')}>*</button>
        </div>
        <div style={{ display: "flex", gap: 20 }}>
          <button onClick={()=> handleButtonClick('/')}>/</button>
          <button onClick={handleButtonResultClick}>=</button>
          <button onClick={()=> handleButtonClick('AC')}>AC</button>
        </div>
      </div>
      </div>
    </article>
  );
};
