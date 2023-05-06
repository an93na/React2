import React, { useState } from "react";
import { AppTitleDist } from "./AppTitle";
import { DistanceFrom } from "./DistanceFrom";
import { DistanceOutput } from "./DistanceOutput";

export const DistanceApp = () => {
  const [milaMorska, setMilaMorska] = useState("");

  const meter = "meter";
  const kilometer = "kilometer";
  const wezel = "węzłów";

  const blue = "#4C49D4";
  const green = "#11B003";
  const red = "#F94444";
  const gray = "#8D8D8D";

  return (
    <article>
      <div
        style={{
          backgroundColor: gray,
          borderRadius: 10,
          width: 500,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
          marginTop: 10,
          padding: 10,
        }}
      >
        <AppTitleDist />
        <DistanceFrom milaMorska={milaMorska} setMilaMorska={setMilaMorska} />
        <DistanceOutput odl={milaMorska * 1852} label={meter} color={blue} />
        <DistanceOutput
          odl={milaMorska * 1.852}
          label={kilometer}
          color={green}
        />
        <DistanceOutput odl={milaMorska * 0.54} label={wezel} color={red} />
      </div>
    </article>
  );
};
