import React, { useState } from "react";
import { Metric1 } from "./Metric1";

export const Metryki = () => {
  const [name, setName] = useState("Name");
  const [hours, setHours] = useState('')
  const [color, setColor] = useState('')

  return (
    <article>
      <h4>Metryki</h4>
      <div style={{display:'flex', gap: 10
    }}>
        <select value={name} onChange={(event) => setName(event.target.value)}>
          <option value="" hidden>
            Select name
          </option>
          <option value="Work">Work</option>
          <option value="Study">Study</option>
          <option value="Play">Play</option>
        </select>
        <input type="text" name="" id="" placeholder="wpisz ilość godzin ten tydzien" value={hours} onChange={(event) => setHours(event.target.value)}/>
      </div>
        <input type="color" name="" id="" value={color} onChange={(event) => setColor(event.target.value)}/>
      <Metric1 name={name} hours={hours} color={color}/>
    </article>
  );
};
