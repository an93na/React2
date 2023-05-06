import React, { useState } from "react";
import { AppTitle } from "./AppTitle";
import { WeightFrom } from "./WeightFrom";
import { WeightOutput } from "./WeightOutput";

export const WeightApp = () => {
  const [punds, setPunds] = useState("");

  const blue = "#4C49D4";
  const green = "#11B003";
  const red = "#F94444";
  const gray = "#8D8D8D";

  const grams = "Grams";
  const kilograms = "Kilograms";
  const ounces = "Ounces";

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
        <AppTitle />
        <WeightFrom
          punds={punds}
          setPunds={setPunds}
          blue={blue}
          green={green}
          red={red}
          grams={grams}
          kilograms={kilograms}
          ounces={ounces}
        />
        <WeightOutput
          jednostka={punds * 453.59237}
          label={grams}
          color={blue}
        />
        <WeightOutput
          jednostka={punds * 0.4535927}
          label={kilograms}
          color={green}
        />
        <WeightOutput jednostka={punds * 16} label={ounces} color={red} />
      </div>
    </article>
  );
};
