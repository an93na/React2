import React from 'react'
import { useSelector } from 'react-redux'
import { complexSelectVal } from './complexCounterSlice'

export const OutputRedux = () => {
    const counterValue = useSelector(complexSelectVal)
    return (
    <input type="text" name="" id="" value={counterValue} readOnly/>
  )
}
