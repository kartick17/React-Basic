import React from 'react'
import Logo from './Logo'
import Search from './Search'
import NumResult from './NumResult'

function Navbar() {
  return (
    <div className='flex justify-between bg-primary h-30 px-6 py-2 w-full rounded-md'>
      <Logo />
      <Search />
      <NumResult />
    </div>
  )
}

export default Navbar