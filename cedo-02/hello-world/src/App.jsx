import barco from './assets/barco.jpg'
import carro from './assets/carro.jpg'
import './App.css'

function App() {
  return (
    <div>
      <p>{Date()}</p>
      <a id="link" href="https://www.google.com/">google</a>
      <h1 id="myHeader">Oficina React</h1>
      <img src={carro} alt="outra imagem"></img>
      <h1>My car</h1>
      <p>Tem {218 * 1.36} cavalos</p>

      <h2>Hello World {2 + 2} </h2>
      <h3>Imagens em react</h3>
      {/* 1 imagens em public */}
      <img src='/rua.jpg' alt='rua'></img>
      {/* 2 imagens em assets */}
      <img src={barco} alt="outra imagem"></img>
      <br></br>
      <table class="tabelas" style={{color:"red"}}>
        <tr>
          <th>ID</th>
          <th>NOME</th>
          <th>PROFISSAO</th>
        </tr>
        <tr>
          <td>01</td>
          <td>GABRIEL</td>
          <td>PROGRAMADOR</td>
        </tr>
        <tr>
          <td>02</td>
          <td>LEONARDO</td>
          <td>PROGRAMADOR</td>
        </tr>
      </table>
    </div>
  )
}

export default App
