import React from "react";

export const WeightFrom = (props) => {

  return (
    <div>
      <input
        type="text"
        placeholder="Enter punds"
        value={props.punds}
        onChange={(event) => props.setPunds(Number(event.target.value))}
      />
    </div>
  );
};
