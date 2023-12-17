import React from 'react'

function Result({ billAmount, tips }) {
  return (
    <h2>You pay${Math.round(billAmount + tips)} (${billAmount} + ${Math.round(tips)}) tip</h2>
  )
}

export default Result