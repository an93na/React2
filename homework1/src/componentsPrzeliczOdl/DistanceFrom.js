import React, { useState } from "react";



export const DistanceFrom = () => {
    const [foot, setFoot] = useState('')

    return <div>
        <input type="text" placeholder="Enter foot" value={foot} onChange={(event)=>setFoot(Number(event.target.value))}/>
    </div>
}