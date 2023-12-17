import React from 'react'

function BillInput({ billAmount, onHandleBillAmount }) {
  return (
    <div>
      <p>How much was the Bill?</p>
      <input type="text" value={billAmount} onChange={e => onHandleBillAmount(+(e.target.value))} />
    </div>
  )
}

export default BillInput