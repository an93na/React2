import React, { useState } from "react";
import { DistanceOutput } from "./DistanceOutput";

export const DistanceFrom = () => {
  const [milaMorska, setMilaMorska] = useState("");

  const meter = "meter";
  const kilometer = "kilometer";
  const wezel = "węzłów";

  const blue = "#4C49D4";
  const green = "#11B003";
  const red = "#F94444";

  return (
    <div>
      <input
        type="text"
        placeholder="Enter mila morska"
        value={milaMorska}
        onChange={(event) => setMilaMorska(Number(event.target.value))}
      />
      <DistanceOutput odl={milaMorska*1852} label={meter} color={blue} />
      <DistanceOutput odl={milaMorska*1.852} label={kilometer} color={green} />
      <DistanceOutput odl={milaMorska*0.54} label={wezel} color={red} />
    </div>
  );
};
