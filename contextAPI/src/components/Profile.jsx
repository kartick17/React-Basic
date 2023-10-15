import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const {user} = useContext(UserContext);

  if (!user) return <div>No user found</div>
  console.log(user);

  return (
    <div>Welcome: {user.username} </div>
  )
}

export default Profile