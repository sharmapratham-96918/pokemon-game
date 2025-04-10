import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import ScoreBoard from './components/ScoreBoard'
import Form from './components/Form'
import { ToastContainer } from 'react-toastify'

const App = () => {

const [Theme , setTheme] = useState(true)

const changeTheme = () =>{
  console.log("hello")

  setTheme(Theme?false : true)
}

  return (
<>
<Navbar  changeTheme={changeTheme}/>

<div className={Theme?"bg-gray-800 min-h-screen p-10 ":"bg-white min-h-screen p-10 "}>
<h1 className={Theme?"uppercase font-bold text-4xl text-center py-3 text-gray-300" : "uppercase font-bold text-4xl text-center py-3 text-black"}>which pockemon is this ?</h1>
<Card />
<ScoreBoard />
<Form />
<ToastContainer />


</div>


</> 
 )
}

export default App
