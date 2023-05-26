import React from 'react'
import { IncreaseRedux } from './IncreaseRedux'
import { OutputRedux } from './OutputRedux'
import { DecreaseRedux } from './DecreaseRedux'

export const ComplexCounterWithRedux = () => {
  return (
    <article>
      <p>ComplexCounterWithRedux</p>
      <div style={{ display: "flex", gap: 20 }}>
        <IncreaseRedux/>
        <IncreaseRedux/>
        <OutputRedux/>
        <DecreaseRedux/>
        <DecreaseRedux/>
      </div>
    </article>
  )
}
