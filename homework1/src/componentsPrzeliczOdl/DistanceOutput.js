import React from "react";



export const DistanceOutput = (props) => {
    return <input type="text" readOnly value={`${props.label}: ${props.odl}`} style={{backgroundColor: props.color}} />
}