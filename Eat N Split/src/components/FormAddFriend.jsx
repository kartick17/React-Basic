import React from 'react'

function FormAddFriend() {
  return (
    <div className='w-[30rem] rounded-md mt-10 bg-pink-50 p-6 flex flex-col gap-6'>
      <div className='flex justify-between'>
        <label htmlFor="name" className='text-xl font-medium'>Friend Name</label>
        <input type="text" className='w-60 p-2 border-pink-100 border-2 rounded-md outline-none text-md' />
      </div>
      <div className='flex justify-between'>
        <label htmlFor="image" className='text-xl font-medium'>Image URL</label>
        <input type="text" className='w-60 p-2 border-pink-100 border-2 rounded-md outline-none text-md' />
      </div>
      <div className='flex justify-end'>
        <button className='w-60 bg-[#f98900c7] py-2 rounded-lg font-semibold text-lg'>Add</button>
      </div>
    </div>
  )
}

export default FormAddFriend