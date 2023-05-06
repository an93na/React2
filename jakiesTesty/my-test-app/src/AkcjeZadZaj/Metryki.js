import React, { useState } from "react";
import { Metric1 } from "./Metric1";



export const Metryki = () => {
    const [name, setName] = useState('')
    console.log(name)

    return <article>
        <h4>Metryki</h4>
        <select value={name} onChange={(event) => setName(event.target.value)}>
            <option value="" hidden>Select name</option>
            <option value="Work">Work</option>
            <option value="Study">Study</option>
            <option value="Play">Play</option>
        </select>
        <Metric1 name = {name}/>
    </article>
}