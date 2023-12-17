import React, { useState } from 'react'

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState('')
  const [image, setImage] = useState('https://i.pravatar.cc/60')
  const id = crypto.randomUUID()

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !image) return

    const newFriend = {
      name,
      image: `${image}?=${id}`,
      balance: 0,
      id
    }

    onAddFriend(newFriend)
    setName('')
    setImage('https://i.pravatar.cc/60')
  }

  return (
    <form className='w-[30rem] rounded-md mt-10 bg-yellow-50 p-6 flex flex-col gap-6' onSubmit={handleSubmit}>
      <div className='flex justify-between'>
        <label htmlFor="name" className='text-xl font-medium'>Friend Name</label>
        <input type="text" className='w-60 p-2 border-yellow-100 border-2 rounded-md outline-none text-md' value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className='flex justify-between'>
        <label htmlFor="image" className='text-xl font-medium'>Image URL</label>
        <input type="text" className='w-60 p-2 border-yellow-100 border-2 rounded-md outline-none text-md' value={image} onChange={(e) => setImage(e.target.value)} />
      </div>
      <div className='flex justify-end'>
        <button className='w-60 bg-[#f98900c7] py-2 rounded-lg font-semibold text-md'>Add</button>
      </div>
    </form>
  )
}

export default FormAddFriend