import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Increase } from "./Increase";
import { Output } from "./Output";
import { Decrease } from "./Decrease";



export const Counter = () => {
    const [number, setNumber] = useState(0);

    return <div>
        <Increase number={number} setNumber={setNumber}/>
        <Output number={number}/>
        <Decrease number={number} setNumber={setNumber}/>
    </div>
}