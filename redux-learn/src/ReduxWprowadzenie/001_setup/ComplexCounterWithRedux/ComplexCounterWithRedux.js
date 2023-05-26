import React from 'react'
import { IncreaseRedux } from './IncreaseRedux'
import { OutputRedux } from './OutputRedux'
import { DecreaseRedux } from './DecreaseRedux'
import { ResetButtonComplex } from './ResetButtonComplex'

export const ComplexCounterWithRedux = () => {
  return (
    <article>
      <p>ComplexCounterWithRedux</p>
      <div style={{ display: "flex", gap: 20 }}>
        <IncreaseRedux value={5}/>
        <IncreaseRedux value={1}/>
        <OutputRedux/>
        <DecreaseRedux value={1}/>
        <DecreaseRedux value={5}/>
      </div>
      <ResetButtonComplex/>
    </article>
  )
}
