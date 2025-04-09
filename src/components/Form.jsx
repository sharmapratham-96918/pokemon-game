import React, { useContext, useState } from 'react'
import PokeContext from '../context/PokeContext'
import { fetchPokemon } from '../context/PokeServices';

const Form = () => {

  const { dispatch, pokemon } = useContext(PokeContext)

  const [answere, setAnswere] = useState()

    const newPokemon = async () => {

    const random = Math.floor(Math.random() * 99)
    const data = await fetchPokemon(random)

    setTimeout(() => {
      dispatch({
        type: "FETCH_POKEMON",
        payload: data,
      })
      setAnswere("")
    }, 500);


  }

  const handelSubmit = e => {
    e.preventDefault()
    if (pokemon.name === answere.toLocaleLowerCase()) {
      dispatch({
        type: "INCRESE_SCORE",
      })
    }

    else {
      dispatch({
        type: "DECRESE_SCORE"
      })
    }
    newPokemon()
    setAnswere("")
  }


  return (
    <form
      onSubmit={handelSubmit}
    >
      <input
        value={answere}
        onChange={e => setAnswere(e.target.value)}
        className='border w-full my-2 border-gray-300 p-3 text-gray-300 text-xl rounded-sm' type="text" placeholder='your answere' />
      <button className='bordere bg-green-500 rounded-md w-full p-3 text-l text-white hover:bg-green-600 font-semi-bold my-2 cursor-pointer' >Submit</button>
    </form>
  )
}

export default Form
