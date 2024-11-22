import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const n = 15

  return (
    <div className='div'>
      {/* usando classname (semelhante aos ids visto em HTML e CSS )*/}
        <h1 className='h'>Paragrafo</h1>
        {/* usando inline */}
        <h2 style={{color: "red"}}>Sub titulo</h2>

        <h3 style={n > 10 ? {color: "purple"}: {color: "magenta"}}>CSS Dinamico</h3>

        <h3 style={n > 20 ? {color: "purple"}: {color: "magenta"}}>CSS Dinamico 2</h3>
    </div>
  )
}

export default App
