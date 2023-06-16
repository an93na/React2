import React, { useState } from "react";
import { Component1 } from "./Component1";
import { Component2 } from "./Component2";
import { Component3 } from "./Component3";



export const WyswietlanieWarunkowe = () => {
    const [checked, setChecked] = useState(false)
    return <article>
        <h4>Wyswietlanie Warunkowe</h4>
        <select name="" id="" value={checked} onChange={(e)=> setChecked(e.target.value)}>
            <option value="" hidden>Wybierz komponent</option>
            <option value="cmp1">Component 1</option>
            <option value="cmp2">Component 2</option>
            <option value="cmp3">Component 3</option>
        </select>
        {checked === 'cmp1' && <Component1/>}
        {checked === 'cmp2' && <Component2/>}
        {checked === 'cmp3' && <Component3/>}

    </article>
}