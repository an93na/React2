import React, { useState } from "react";
import { WeightOutput } from "./WeightOutput";

export const WeightFrom = (props) => {
  const [punds, setPunds] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter punds"
        value={punds}
        onChange={(event) => setPunds(Number(event.target.value))}
      />
      <WeightOutput
        jednostka={punds * 453.59237}
        label={props.grams}
        color={props.blue}
      />
      <WeightOutput
        jednostka={punds * 0.4535927}
        label={props.kilograms}
        color={props.green}
      />
      <WeightOutput
        jednostka={punds * 16}
        label={props.ounces}
        color={props.red}
      />
    </div>
  );
};
