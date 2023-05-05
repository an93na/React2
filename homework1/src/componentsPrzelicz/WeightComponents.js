import React from "react";
import { AppTitle } from "./AppTitle";
import { WeightFrom } from "./WeightFrom";

export const WeightComponents = () => {
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
        <AppTitle gray={gray} />
        <WeightFrom
          blue={blue}
          green={green}
          red={red}
          grams={grams}
          kilograms={kilograms}
          ounces={ounces}
        />
      </div>
    </article>
  );
};
