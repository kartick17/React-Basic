import React from 'react'
import Friend from './Friend'

function FriendList({ friends, selectedFriend, onSelection }) {
  return (
    <ul className='flex flex-col'>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} selectedFriend={selectedFriend} onSelection={onSelection} />
      ))}
    </ul>
  )
}

export default FriendList