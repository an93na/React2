import React, { useState } from "react";
import { Increase } from "./Increase";
import { Output } from "./Output";
import { Decrease } from "./Decrease";



export const Counter = () => {
    const [number, setNumber] = useState(0);

    return <div>
        <h4>Counter</h4>
        <Increase number={number} setNumber={setNumber}/>
        <Output number={number}/>
        <Decrease number={number} setNumber={setNumber}/>
    </div>
}