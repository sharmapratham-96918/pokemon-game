import React from 'react'
import PokeContext from '../context/PokeContext'

const Navbar = () => {
  
  return (
<nav className='bg-red-500 text-center py-5 relative'>
<h1 className='uppercase font-bold text-2xl' ><span className='text-yellow-100'>poke</span>game</h1>
<button className='bg-gray-300 text-black font-xl text-semi-bold border rounded-md p-2 absolute top-4 right-4 cursor-pointer hover:bg-gray-500 hover:text-white'>Change Theme</button>
</nav>
  )
}

export default Navbar
