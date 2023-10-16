import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  const { setUser, user } = useContext(UserContext)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({ username, password })
    navigate('/profile')
  }

  return (
    <>
      <div className='relative flex items-top justify-center min-h-[700px] bg-white sm:items-center sm:pt-0'>
        <div className='max-w-6xl mx-auto sm:px-6 lg:px-8'>
          <div className='mt-8 overflow-hidden'>
            <form className='p-6 flex flex-col justify-center '>
              <div className='flex flex-col mt-2'>
                <label htmlFor='username' className='hidden'>
                  User name
                </label>
                <input
                  type='username'
                  name='username'
                  id='username'
                  placeholder='User name'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className='w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none'
                />
              </div>

              <div className='flex flex-col'>
                <label htmlFor='password' className='hidden'>
                  Password
                </label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none'
                />
              </div>

              <button
                onClick={handleSubmit}
                className='md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300'
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
