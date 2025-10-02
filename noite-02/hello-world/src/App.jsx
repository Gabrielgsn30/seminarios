import './App.css'
import barco from './assets/barco.jpg'
import carro from './assets/carro.jpg'

function App() {

  return (
    <div>
      <img src={carro} alt="outra imagem"></img>
      <h1>Oficina React</h1>
      <h2>{Date()}</h2>
      <p>Carro</p>
      
      <p>Barco</p>
      <img src={barco} alt="outra imagem"></img>
      <p>Rua</p>
      <img src='/rua.jpg' alt='rua'></img>
      <br></br>

      <a id="link" style={{color:"red"}} href="https://www.google.com/">google</a>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JAVASCRIPT</li>
        <li>Introducao React</li>
        <li>Hello World</li>
      </ul>
      <p>Lista estática utilizando return do react</p>
    </div>
  )
}

export default App
