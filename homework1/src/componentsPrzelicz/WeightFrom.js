import React, { useState } from "react";
import { WeightOutput } from "./WeightOutput";

export const WeightFrom = () => {
  const [punds, setPunds] = useState("");
  const grams = "Grams";
  const kilograms = "Kilograms";
  const ounces = "Ounces";
  const blue = "#4C49D4";
  const green = "#11B003";
  const red = "#F94444";


  return (
    <div>
      <input
        type="text"
        placeholder="Enter punds"
        value={punds}
        onChange={(event) => setPunds(Number(event.target.value))}
      />
      <WeightOutput jednostka={punds * 453.59237} label={grams} color={blue} />
      <WeightOutput jednostka={punds } label={kilograms} color={green} />
      <WeightOutput jednostka={punds} label={ounces} color={red} />
    </div>
  );
};
