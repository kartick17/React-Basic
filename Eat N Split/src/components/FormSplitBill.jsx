import React, { useEffect, useState } from 'react'

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState('')
  const [paidByUser, setPaidByUser] = useState('')
  const paidByFriend = bill ? bill - paidByUser : ''
  const [whoIsPaying, setWhoIsPaying] = useState('user')

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bill || !paidByUser) return

    onSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByUser)
  }

  return (
    <form className='bg-yellow-50 py-10 px-14 flex flex-col justify-center h-[30rem] gap-4 w-[38rem] rounded-2xl' onSubmit={handleSubmit}>
      <h1 className='text-3xl font-semibold uppercase flex mb-6'>Split a bill with {selectedFriend.name}</h1>
      <div className='flex justify-between items-center'>
        <label className='text-xl font-medium'>Bill value</label>
        <input className='w-40 p-2 border-yellow-100 border-2 rounded-md outline-none text-md' type="text" value={bill} onChange={e => setBill(+(e.target.value))} />
      </div>
      <div className='flex justify-between items-center'>
        <label className='text-xl font-medium'>Your expense</label>
        <input className='w-40 p-2 border-yellow-100 border-2 rounded-md outline-none text-md' type="text" value={paidByUser} onChange={e => setPaidByUser(+(e.target.value) > bill ? paidByUser : +(e.target.value))} />
      </div>
      <div className='flex justify-between items-center'>
        <label className='text-xl font-medium'>{selectedFriend.name}'s expense</label>
        <input className='w-40 p-2 border-yellow-100 border-2 rounded-md outline-none text-md' type="text" disabled value={paidByFriend} />
      </div>
      <div className='flex justify-between items-center'>
        <label className='text-xl font-medium'>Who is paying the bill</label>
        <select name="" id="" className='w-40 p-2 border-yellow-100 border-2 rounded-md bg-white outline-none text-md' value={whoIsPaying} onChange={e => setWhoIsPaying(e.target.value)}>
          <option value="user">You</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>
      </div>
      <div className='flex justify-end'>
        <button className='mt-4 w-40 bg-[#f98900e0] py-2 rounded-lg font-semibold text-md'>Split Bill</button>
      </div>
    </form>
  )
}

export default FormSplitBill