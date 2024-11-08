import './App.css';
import barco from './assets/barco.jpg'

function App() {
  return(
    <div className='App'>
      <h1>Imagens em react</h1>
      {/* 1 imagens em public */}
      <img src='/rua.jpg' alt='rua'></img>
      {/* 2 imagens em assets */}
      <img src={barco} alt="outra imagem"></img>
    </div>
  );
}

export default App
