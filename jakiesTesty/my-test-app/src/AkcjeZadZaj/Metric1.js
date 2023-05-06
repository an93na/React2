import React from "react";
import classes from "./Metric.module.css";

export const Metric1 = (props) => {
  return (
    <div className={classes.outerContainer}>
      <div className={classes.innerContainer} style={{backgroundColor:props.color}}>
        <p className={classes.label}>
          {props.name} <span>•••</span>
        </p>
        <p className={classes.output}>{`${props.hours}hrs`}</p>
        <p className={classes.lastWeekOutput}>Last Week - {`${props.lastWeek}hrs`}</p>
      </div>
    </div>
  );
};