import React, { useContext } from 'react'
import PokeContext from '../context/PokeContext'

const ScoreBoard = () => {

  const { score, chances } = useContext(PokeContext)

  return (
    <div className="my-4 flex items-center justify-between">
      <div className="flex w-10 ">
        {
          chances === 3 ? (
          <>

            <img
              className='h-20 '
              src="https://freesvg.org/img/Pokeball.png" alt="" />
            <img
              className='h-20 '
              src="https://freesvg.org/img/Pokeball.png" alt="" />
            <img
              className='h-20 '
              src="https://freesvg.org/img/Pokeball.png" alt="" />

          </>) : chances === 2 ? (
            <>
               <img 
   className='h-20 ' 
   src="https://freesvg.org/img/Pokeball.png" alt="" />
   <img 
   className='h-20 ' 
   src="https://freesvg.org/img/Pokeball.png" alt="" />

            </>
          ) : (

            <img 
            className='h-20 ' 
            src="https://freesvg.org/img/Pokeball.png" alt="" />
         
          )
  }
      </div>

      <div className="score">
        <h1 className=' font-semi-bold text-4xl text-center px-3 text-gray-300'>score:{score}</h1>
      </div>

    </div>
  )
}

export default ScoreBoard
