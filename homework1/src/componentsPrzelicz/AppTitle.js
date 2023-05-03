import React from "react";
import { WeightFrom } from "./WeightFrom";
import { WeightOutput } from "./WeightOutput";

export const AppTitle = () => {
  return <article>
    <div>
        <h3>Weight Converter</h3>
    </div>
    <WeightFrom/>
    <WeightOutput/>
  </article>;
};
