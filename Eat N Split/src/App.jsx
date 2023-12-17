import { useState } from 'react'
import FriendList from './components/FriendList'
import FormAddFriend from './components/FormAddFriend'
import FormSplitBill from './components/FormSplitBill'

function App() {

  return (
    <div className='flex justify-between mt-24 mx-40 text-stone-700'>
      <div className=''>
        <FriendList />
        <FormAddFriend />
      </div>
      <FormSplitBill />
    </div>
  )
}

export default App
