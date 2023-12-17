import React from 'react'

function FormSplitBill() {
  return (
    <div className='bg-pink-50 py-10 px-14 flex flex-col justify-center h-[30rem] gap-4 w-[38rem] rounded-2xl'>
      <h1 className='text-3xl font-semibold uppercase flex mb-6'>Split a bill with Clark</h1>
      <div className='flex justify-between items-center'>
        <label className='text-xl font-medium'>Bill value</label>
        <input className='w-40 p-2 border-pink-100 border-2 rounded-md outline-none text-md' type="text" />
      </div>
      <div className='flex justify-between items-center'>
        <label className='text-xl font-medium'>Your expense</label>
        <input className='w-40 p-2 border-pink-100 border-2 rounded-md outline-none text-md' type="text" />
      </div>
      <div className='flex justify-between items-center'>
        <label className='text-xl font-medium'>Friend expense</label>
        <input className='w-40 p-2 border-pink-100 border-2 rounded-md outline-none text-md' type="text" disabled />
      </div>
      <div className='flex justify-between items-center'>
        <label className='text-xl font-medium'>Who is paying the bill</label>
        <select name="" id="" className='w-40 p-2 border-pink-100 border-2 rounded-md bg-white outline-none text-md'>
          <option value="">You</option>
          <option value="">Friend</option>
        </select>
      </div>
      <div className='flex justify-end'>
        <button className='mt-4 w-40 bg-[#f98900c7] py-2 rounded-lg font-semibold text-md'>Split Bill</button>
      </div>
    </div>
  )
}

export default FormSplitBill