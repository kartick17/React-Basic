import React from 'react'

function Summery() {
  return (
    <div className='flex flex-col px-8 py-3 gap-2 bg-background-100 rounded-md'>
      <h2 className='uppercase'>Movies you watched</h2>
      <div className='flex justify-between'>
        <p>
          <span>#️⃣</span>
          <span>2 movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>8.65</span>
        </p>
        <p>
          <span>🌟</span>
          <span>9.5</span>
        </p>
        <p>
          <span>⏳</span>
          <span>132 min</span>
        </p>
      </div>
    </div >
  )
}

export default Summery