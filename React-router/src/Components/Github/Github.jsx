import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
  console.log(data)
  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl '>
      Github followers: {data.followers}
      <div className='flex justify-center mt-5'>
        <img className=' rounded-lg' src={data.avatar_url} width={300} />
      </div>
    </div>
  )
}

export default Github

export const githubLoderData = async () => {
  const res = await fetch(`https://api.github.com/users/kartick17`)
  return res.json()
}
