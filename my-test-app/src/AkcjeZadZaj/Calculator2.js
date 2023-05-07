import React, { useState } from "react";

export const Calculator2 = () => {
    const [number, setNumber] = useState(0)
    const [operation, setOpration] = useState('')
  return (
    <article style={{ marginLeft: 30, marginRight: 30 }}>
      <h4>Kalkulator 2</h4>
      <div style={{width: 400, backgroundColor: "gray", padding: 20, margin: 20, borderRadius: '10px'}}>
        <input type="text" name="" id="" readOnly value={`${number}${operation}${number}`} />
        <div style={{ display: "flex", gap: 20 }}>
          <button onClick={()=> setNumber(1)}>1</button>
          <button onClick={() => setNumber(2)}>2</button>
          <button onClick={() => setNumber(3)}>3</button>
        </div>
        <div style={{ display: "flex", gap: 20 }}>
          <button onClick={()=> setNumber(4)}>4</button>
          <button onClick={() => setNumber(5)}>5</button>
          <button onClick={() => setNumber(6)}>6</button>
        </div>
        <div style={{ display: "flex", gap: 20 }}>
          <button onClick={()=> setNumber(7)}>7</button>
          <button onClick={() => setNumber(8)}>8</button>
          <button onClick={() => setNumber(9)}>9</button>
        </div>
        <div style={{ display: "flex", gap: 20 }}>
          <button onClick={()=> setOpration('+')}>+</button>
          <button onClick={()=> setOpration('-')}>-</button>
          <button onClick={()=> setOpration('*')}>*</button>
        </div>
        <div style={{ display: "flex", gap: 20 }}>
          <button onClick={()=> setOpration('/')}>/</button>
          <button>=</button>
          <button onClick={()=> {setOpration('')
        setNumber('')}}>AC</button>
        </div>
      </div>
    </article>
  );
};
