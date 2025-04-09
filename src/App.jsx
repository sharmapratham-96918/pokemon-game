import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import ScoreBoard from './components/ScoreBoard'
import Form from './components/Form'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
<>
<Navbar />

<div className="bg-gray-800 min-h-screen p-10 ">
<h1 className='uppercase font-bold text-4xl text-center py-3 text-gray-300'>which pockemon is this ?</h1>
<Card />
<ScoreBoard />
<Form />
<ToastContainer />


</div>


</> 
 )
}

export default App
