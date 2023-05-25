import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, decrement2, increment2, reserButton2, selecValue } from "./counterSlice2";


export const CounterWithRedux = () => {
    // const counter2 = useSelector((state)=> state.counter2.value)
    const counter2 = useSelector(selecValue)
    const dispatch = useDispatch();
    return <article>
        <p>Counter With Redux</p>
        <button onClick={()=> dispatch(increment2())}>+5</button>
        <button onClick={()=> dispatch(add())}>{counter2}</button>
        <input type="text" name="" id="" readOnly value={counter2}/>
        <button onClick={() => dispatch(decrement2())}>-5</button>
        <button onClick={() => dispatch(reserButton2())}>RESET</button>
    </article>
}