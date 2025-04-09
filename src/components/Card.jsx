import React, { useContext, useEffect } from 'react'
import PokeContext from '../context/PokeContext'
import { fetchPokemon } from '../context/PokeServices'
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'

import { toast } from 'react-toastify'

const Card = () => {

    const { width, height } = useWindowSize()


    const { pokemon, dispatch, brightness, score, chances } = useContext(PokeContext)

    const restartGame = () => {
        window.location.reload()
    }

    const getPokemon = async () => {

        const random = Math.floor(Math.random() * 99)

        const data = await fetchPokemon(random)
        dispatch({
            type: "FETCH_POKEMON",
            payload: data
        })
    }

    useEffect(() => {

        if (score === 100) {
            toast.success("badhi ho !!", { position: "top-center" })
            setTimeout(() => {
                restartGame()
            }, 10000);
        } if (chances === 0) {
            toast.error("loser", { position: "top-center" })
        }

    }, [score, chances])

    useEffect(() =>{
        getPokemon()
    },[])

    if (chances === 0) {
        return (
            <div className="p-10  border border-gray-400 rounded medium my-4 flex flex-col items-center justify-center">
                <h1 className="text-center font-semi-bold text-4xl uppercase text-gray-400">You are losser !!</h1>
                <button
                onClick={restartGame}
                    className="bg-green-400 p-2 my-3 font-bold rounded-md cursor-pointer hover:bg-green-600 ">Try Again</button>
            </div>

        )
    }
    if (score === 100) {
        return (
            <>
                <Confetti
                    width={width}
                    height={height}
                />

                <div className="p-10  border border-gray-400 rounded medium my-4 flex flex-col items-center justify-center">
                    <h1 className="text-center font-semi-bold text-4xl uppercase text-green-400">winner !!</h1>
                    <button
                        onClick={
                            restartGame
                        }
                        className="bg-green-400 p-2 my-3 font-bold rounded-md cursor-pointer hover:bg-green-600 ">Try Again</button>
                </div>
            </>
        )
    }
    
  

    return (

        <div className="p-10  border border-gray-400 rounded medium my-4 flex items-center justify-center">
            <img
                className={brightness ? "brightness-0 h-40" : "brightness-100 h-40"}
                src={pokemon.image} alt="" />
        </div>
    )
}

export default Card
