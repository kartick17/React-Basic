import React, { useContext, useEffect } from 'react'
import UserContext from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'

function Profile() {
  const { user } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) navigate('/')
  }, [user])

  if (!user) return <div>No user found</div>
  return (
    <div>
      <div className='relative flex items-top justify-center min-h-[700px] bg-white sm:items-center sm:pt-0'>
        <div className='max-w-6xl mx-auto sm:px-6 lg:px-8'>
          <h1>Welcome : {user.username}</h1>
        </div>
      </div>
    </div>
  )
}

export default Profile
