import React from 'react'

function Friend({ friend, selectedFriend, onSelection }) {
  const isSelected = friend.id === selectedFriend?.id
  return (
    <li className={`flex justify-between items-center px-6 py-4 gap-6 w-[30rem] rounded-md ${isSelected ? 'bg-yellow-50' : ''}`}>
      <img src={friend.image} className='w-16 h-16 rounded-full object-cover' />
      <div className='w-96'>
        <h3 className='text-2xl font-semibold'>{friend.name}</h3>
        {friend.balance > 0 && <p className='text-green-500'>{`${friend.name} owes you ${Math.abs(friend.balance)}$`}</p>}
        {friend.balance < 0 && <p className='text-red-500'>{`You owe ${friend.name} ${Math.abs(friend.balance)}$`}</p>}
        {friend.balance == 0 && <p >You and clark are even</p>}
      </div>
      <button
        className='bg-[#f98900e0] px-6 py-2 rounded-lg text-md font-semibold'
        onClick={() => onSelection(friend)}
      >
        {isSelected ? 'Close' : 'Select'}
      </button>
    </li >
  )
}

export default Friend