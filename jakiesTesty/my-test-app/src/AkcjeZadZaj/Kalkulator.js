import React, { useState } from "react";

export const Kalkulator = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");

  function dajWynik(n1, n2, op) {
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
  const wynik = dajWynik(number1, number2, operation);
  return (
    <article style={{marginLeft: 30, marginRight: 30}}>
      <h4>Kalkulator</h4>
      <div style={{ display: "flex", gap: 10 }}>
        <input
          type="text"
          name=""
          id=""
          placeholder="wpisz 1 liczbę"
          value={number1}
          onChange={(event) => setNumber1(event.target.value)}
        />
        <select
          name=""
          id=""
          value={operation}
          onChange={(event) => setOperation(event.target.value)}
        >
          <option value="" hidden>
            Wybiesz działanie
          </option>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input
          type="text"
          placeholder="wpisz 2 liczbę"
          value={number2}
          onChange={(event) => setNumber2(event.target.value)}
        />
      </div>
      <button onClick={() => setResult(wynik)}>=</button>
      <input type="text" name="" id="" value={result} readOnly />
      <button
        onClick={() => {
          setNumber1("");
          setNumber2("");
          setOperation("");
          setResult('')
        }}
      >
        wyczyść wszystko
      </button>
    </article>
  );
};
