import React, { useState } from "react";

export const Calculator2 = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState(0);

  const giveCalculation = (n1, n2, op) => {
    if (op === "+") {
      return Number(n1) + Number(n2);
    } else if (op === "-") {
      return Number(n1) - Number(n2);
    } else if (op === "*") {
      return Number(n1) * Number(n2);
    } else if (op === "/") {
      return Number(n1) / Number(n2);
    }
  };

  const calculation = giveCalculation(number1, number2, operation);

  const handleButtonClick = (buttonValue) => {
    if (operation === "") {
      setNumber1(number1 + buttonValue);
    } else {
      setNumber2(number2 + buttonValue);
    }
  };

  const handleButtonResultClick = () => setResult(calculation);

  const handleButtonOperationClick = (op) => setOperation(op);

  const handleButtonACClick = () => {
    setNumber1("");
    setNumber2("");
    setOperation("");
    setResult(0);
  };
  const handleButtonNextClick = () => {
    setNumber1(result)
    setNumber2('')
    setOperation('')
  }

  return (
    <article style={{ marginLeft: 30, marginRight: 30 }}>
      <h4>Kalkulator 2</h4>
      <p>Oblicza działania na dwóch liczbach (=). Po wciśnięciu licz dalej można wykorzystać wynik i znów zrobić na nim jakąś operacje.</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: 400,
            backgroundColor: "gray",
            padding: 20,
            margin: 20,
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              height: 50,
              padding: 10,
              border: "solid 1px black",
              margin: 10,
              backgroundColor: "black",
              borderRadius: "5px",
            }}
          >
            {number1}
            {operation}
            {number2}
          </div>
          <input type="text" name="" id="" readOnly value={`Wynik to: ${result}`} />
          <div style={{ display: "flex", gap: 20 }}>
            <button onClick={() => handleButtonClick(1)}>1</button>
            <button onClick={() => handleButtonClick(2)}>2</button>
            <button onClick={() => handleButtonClick(3)}>3</button>
            <button onClick={() => handleButtonClick(4)}>4</button>
          </div>
          <div style={{ display: "flex", gap: 20 }}>
            <button onClick={() => handleButtonClick(5)}>5</button>
            <button onClick={() => handleButtonClick(6)}>6</button>
            <button onClick={() => handleButtonClick(7)}>7</button>
            <button onClick={() => handleButtonClick(8)}>8</button>
          </div>
          <div style={{ display: "flex", gap: 20 }}>
            <button onClick={() => handleButtonClick(9)}>9</button>
            <button onClick={() => handleButtonClick(0)}>0</button>
            <button onClick={() => handleButtonOperationClick("+")}>+</button>
            <button onClick={() => handleButtonOperationClick("-")}>-</button>
          </div>
          <div style={{ display: "flex", gap: 20 }}>
            <button onClick={() => handleButtonOperationClick("*")}>*</button>
            <button onClick={() => handleButtonOperationClick("/")}>/</button>
            <button onClick={handleButtonResultClick}>=</button>
          </div>
          <div style={{ display: "flex", gap: 20 }}>
            <button onClick={handleButtonACClick}>AC</button>
            <button onClick={handleButtonNextClick}>Licz dalej</button>
          </div>
        </div>
      </div>
    </article>
  );
};
