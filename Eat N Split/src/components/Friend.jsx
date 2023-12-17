import React from 'react'

function Friend() {
  return (
    <div className='flex justify-between bg-pink-50 items-center px-6 py-4 gap-6 w-[30rem] rounded-md'>
      <img src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" className='w-16 h-16 rounded-full object-cover' />
      <div className='w-96'>
        <h3 className='text-2xl font-semibold'>Clark</h3>
        <p>You and clark are even</p>
      </div>
      <button className='bg-[#f98900c7] px-6 py-2 rounded-lg text-lg font-semibold'>Close</button>
    </div>
  )
}

export default Friend