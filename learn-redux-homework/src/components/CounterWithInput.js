import React, { useState } from "react";

export const CounterWithInput = () => {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h3>CounterWithInput</h3>
      <div style={{ display: "flex", gap: 20 }}>
        <button>+</button>
        <input
          type="text"
          name=""
          id=""
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button>-</button>
      </div>
    </div>
  );
};
