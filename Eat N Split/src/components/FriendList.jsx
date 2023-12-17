import React from 'react'
import Friend from './Friend'

function FriendList() {
  return (
    <div className='flex flex-col'>
      <Friend />
      <Friend />
      <Friend />
    </div>
  )
}

export default FriendList