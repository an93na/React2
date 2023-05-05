import React from "react";
import { WeightFrom } from "./WeightFrom";

export const AppTitle = (props) => {
    return <article style={{backgroundColor: '#8D8D8D', width: 500, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '0 auto', marginTop: 10}}>
      <div>
          <h3>Weight Converter</h3>
      </div>
      <WeightFrom/>
    </article>;
  };
  
