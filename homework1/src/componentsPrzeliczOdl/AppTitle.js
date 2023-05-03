import React from "react";
import { DistanceFrom } from "./DistanceFrom";

export const AppTitleDist = () => {
  return (
    <article style={{backgroundColor: '#8D8D8D', width: 500, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '0 auto', marginTop: 10}}>
      <div>
        <h3>Distance Converter</h3>
      </div>
      <DistanceFrom />
    </article>
  );
};
