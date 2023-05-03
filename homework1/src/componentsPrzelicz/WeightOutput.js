import React from "react";



export const WeightOutput = (props) => {
    return <div>
        <input type="text" readOnly value={`${props.label}: ${props.jednostka}`} style={{backgroundColor: props.color}}/>
    </div>

}