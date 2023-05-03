import React from "react";
import { WeightFrom } from "./WeightFrom";

export const AppTitle = () => {
  return <article style={{backgroundColor: '#8D8D8D', width: 500}}>
    <div>
        <h3>Weight Converter</h3>
    </div>
    <WeightFrom/>
  </article>;
};
