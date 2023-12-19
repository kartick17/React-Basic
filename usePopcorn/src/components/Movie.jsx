import React from 'react'

function Movie() {
  return (
    <div className='flex items-center px-6 py-3 gap-4 border-b border-background-100'>
      <img src="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg" className='h-10' />
      <div>
        <h3 className=' font-semibold text-sm'>Inception</h3>
        <p>
          <span className='text-xs mr-2'>🗓</span>
          <span className='text-sm'>2010</span>
        </p>
      </div>
    </div>
  )
}

export default Movie