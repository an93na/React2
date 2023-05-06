import React from "react";

export const DistanceFrom = (props) => {
  return (
    <div>
      <h4>{`nautical mile: ${props.milaMorska}`}</h4>
      <input
        type="range"
        value={props.milaMorska}
        onChange={(event) => props.setMilaMorska(Number(event.target.value))}
      />
    </div>
  );
};
