import React from 'react'
import PokeContext from '../context/PokeContext'

const Navbar = ({changeTheme}) => {
  
  return (
<nav className='bg-red-500 py-5 px-3 flex items-center justify-between md:justify-normal'>
  {/* Logo */}
  <div className='md:flex-1 md:flex md:justify-end'>
    <h1 className='uppercase font-bold text-2xl text-center'>
      <span className='text-yellow-100'>poke</span>game
    </h1>
  </div>

  {/* Theme Button */}
  <div className='md:flex-1 md:flex md:justify-end'>
    <button 
    onClick={() => changeTheme()}
    className='bg-gray-300 text-black text-sm md:text-base font-semibold border rounded-md p-2 cursor-pointer hover:bg-gray-500 hover:text-white'>
      Change Theme
    </button>
  </div>
</nav>

  )
}

export default Navbar
