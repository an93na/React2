import React, { useState } from "react";

export const Calculator2 = () => {
    const [expression, setExpression] = useState('')
    const [result, setResult] = useState(0)

    const handleButtonClick = (buttonValue) => {
        if (buttonValue === 'AC') {
            setExpression('');
            setResult(0)
        }
        else if (buttonValue === '=') {
            setResult(eval(expression));
            setExpression('')
        }
        else {
            setExpression((prevExpression) => prevExpression + buttonValue)
        }
    }

  return (
    <article style={{ marginLeft: 30, marginRight: 30 }}>
      <h4>Kalkulator 2</h4>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div style={{width: 400, backgroundColor: "gray", padding: 20, margin: 20, borderRadius: '10px'}}>
      <input type="text" name="" id="" readOnly value={result || expression} />
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
          <button onClick={() => handleButtonClick('=')}>=</button>
          <button onClick={()=> handleButtonClick('AC')}>AC</button>
        </div>
      </div>
      </div>
    </article>
  );
};
