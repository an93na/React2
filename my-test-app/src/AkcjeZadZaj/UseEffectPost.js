import React, { useState } from "react";
import { PostList } from "./PostList";



export const UseEffectPost = () => {
    const [checked, setChecked]=useState(false);

    return <article>
        <label htmlFor="">
            <input type="checkbox" name="" id="" checked={checked} onChange={()=> setChecked((prevState) => !prevState)}/>
            Pokaż posty
        </label>
        {checked === true && <PostList />}
    </article>
}