import React from "react";

export const Calculator2 = () => {
  return (
    <article style={{ marginLeft: 30, marginRight: 30 }}>
      <h4>Kalkulator 2</h4>
      <div style={{width: 400, backgroundColor: "gray", padding: 20, margin: 20, borderRadius: '10px'}}>
        <input type="text" name="" id="" readOnly/>
        <div style={{ display: "flex", gap: 20 }}>
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </div>
        <div style={{ display: "flex", gap: 20 }}>
          <button>4</button>
          <button>5</button>
          <button>6</button>
        </div>
        <div style={{ display: "flex", gap: 20 }}>
          <button>7</button>
          <button>8</button>
          <button>9</button>
        </div>
        <div style={{ display: "flex", gap: 20 }}>
          <button>+</button>
          <button>-</button>
          <button>*</button>
        </div>
        <div style={{ display: "flex", gap: 20 }}>
          <button>/</button>
          <button>=</button>
          <button>C</button>
        </div>
      </div>
    </article>
  );
};
