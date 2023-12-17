import { useState } from 'react'
import FriendList from './components/FriendList'
import FormAddFriend from './components/FormAddFriend'
import FormSplitBill from './components/FormSplitBill'

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends)
  const [showAddFriend, setShowAddFriend] = useState(false)
  const [selectedFriend, setSelectedFriend] = useState(null)

  const handleToggleAddFriend = () => {
    setSelectedFriend(null)
    setShowAddFriend(prev => !prev)
  }

  const handleSelectedFriend = (friend) => {
    setSelectedFriend(cur => cur?.id === friend.id ? null : friend)
    setShowAddFriend(false)
  }

  return (
    <div className='flex justify-between mt-24 mx-40 text-stone-700'>
      <div>
        <FriendList friends={friends} selectedFriend={selectedFriend} onSelection={handleSelectedFriend} />
        {showAddFriend && <FormAddFriend />}
        <div className='flex justify-end mt-6 mr-6'>
          <button className='bg-[#f98900c7] px-6 py-2 rounded-lg text-md font-semibold' onClick={handleToggleAddFriend}>
            {showAddFriend ? 'Close' : 'Add Friend'}
          </button>
        </div>
      </div>
      {selectedFriend && <FormSplitBill />}
    </div >
  )
}

export default App
