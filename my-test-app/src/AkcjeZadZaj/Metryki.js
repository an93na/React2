import React, { useState } from "react";
import { Metric1 } from "./Metric1";

export const Metryki = () => {
  const [name, setName] = useState("Name");
  const [hours, setHours] = useState("");
  const [color, setColor] = useState("");
  const [last, setLast] = useState("");

  return (
    <article style={{marginLeft: 30, marginRight: 30}}>
      <h4>Metryki</h4>
      <div style={{ display: "flex", gap: 20 }}>
        <select value={name} onChange={(event) => setName(event.target.value)}>
          <option value="" hidden>
            Select name
          </option>
          <option value="Work">Work</option>
          <option value="Study">Study</option>
          <option value="Play">Play</option>
        </select>
        <input
          type="text"
          name=""
          id=""
          placeholder="wpisz ilość godzin ten tydzien"
          value={hours}
          onChange={(event) => setHours(event.target.value)}
        />
      </div>
      <div style={{ display: "flex", gap: 20 }}>
        Set color
        <input
          type="color"
          name=""
          id=""
          value={color}
          onChange={(event) => setColor(event.target.value)}
          style={{ width: 100 }}
        />
        Set hours Last Week
        <input
          type="radio"
          name="lastWeek"
          id=""
          value={10}
          onChange={(event) => setLast(event.target.value)}
        />{" "}
        10h
        <input
          type="radio"
          name="lastWeek"
          id=""
          value={15}
          onChange={(event) => setLast(event.target.value)}
        />{" "}
        15h
        <input
          type="radio"
          name="lastWeek"
          id=""
          value={20}
          onChange={(event) => setLast(event.target.value)}
        />{" "}
        20h
        <input
          type="radio"
          name="lastWeek"
          id=""
          value={25}
          onChange={(event) => setLast(event.target.value)}
        />{" "}
        25h
        <input
          type="radio"
          name="lastWeek"
          id=""
          value={30}
          onChange={(event) => setLast(event.target.value)}
        />{" "}
        30h
        <input
          type="radio"
          name="lastWeek"
          id=""
          value={35}
          onChange={(event) => setLast(event.target.value)}
        />{" "}
        35h
        <input
          type="radio"
          name="lastWeek"
          id=""
          value={"more"}
          onChange={(event) => setLast(event.target.value)}
        />{" "}
        more h
      </div>

      <Metric1 name={name} hours={hours} color={color} lastWeek={last} />
    </article>
  );
};
