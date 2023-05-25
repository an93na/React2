import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { increment, decrement, resetCounter } from './counterSlice'

export const CounterRed = () => {
    const counter = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();
  return (
    <div>
        <button onClick={()=> dispatch(increment())}>+1</button>
        <input type="text" name="" id="" readOnly value={counter}/>
        <button onClick={()=> dispatch(decrement())}>-1</button>
        <button onClick={()=> dispatch(resetCounter())}>RESET</button>
        </div>
  )
}
