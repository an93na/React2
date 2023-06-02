import React from 'react'

export const CounterWithAsync = () => {
  return (
    <article>
      {/* <Loader /> */}
      <p>CounterWithRedux</p>
      <button>+5</button>
      <input type="text" value={0} readOnly />
      <button>-10</button>
    </article>
  )
}
