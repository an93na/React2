import React from "react";
import classes from "./Metric.module.css";

export const Metric1 = (props) => {
  return (
    <div className={classes.outerContainer}>
      <div className={classes.innerContainer}>
        <p className={classes.label}>
          {props.name} <span>•••</span>
        </p>
        <p className={classes.output}>32hrs</p>
        <p className={classes.lastWeekOutput}>Last Week - 36hrs</p>
      </div>
    </div>
  );
};