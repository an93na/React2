import React from 'react'
import { useSelector } from 'react-redux'

export const CounterRed = () => {
    const counter = useSelector((state) => state.counter.value)
  return (
    <div>
        {counter}
        </div>
  )
}
