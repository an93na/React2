import React from 'react'
import { useSelector } from 'react-redux'

export const CounterRed = () => {
    const counter = useSelector((state) => state.counter.value)
  return (
    <div>
        <button>+1</button>
        <input type="text" name="" id="" readOnly value={counter}/>
        <button>-1</button>
        </div>
  )
}
