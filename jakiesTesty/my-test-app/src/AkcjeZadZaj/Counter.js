import React, { useState } from "react";



export const Counter = () => {
    const [number, setNumber] = useState('')
    return <article>
        <button onClick={()=> setNumber(number+1)}>+1</button>
        <input type="text" name="" id="" value={number} onChange={(event) => setNumber(Number(event.target.value))}/>
        <button onClick={() => setNumber(number-1)}>-1</button>
    </article>
}