import React, { useState } from "react";



export const WyswietlanieWarunkowe = () => {
    const [checked, setChecked] = useState(false)
    return <article>
        <h4>Wyswietlanie Warunkowe</h4>
        <select name="" id="">
            <option value="" hidden>Wybierz komponent</option>
            <option value="cmp1">Component 1</option>
            <option value="cmp2">Component 2</option>
            <option value="cmp3">Component 3</option>
        </select>
    </article>
}