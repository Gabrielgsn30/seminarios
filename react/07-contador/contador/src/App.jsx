import './App.css';
import Contador from './components/Contador';

function App() {
  return(
    <div className='App'>
      <h1>Hooks em react</h1>
      {/* Hooks Contador */}
      <Contador title='Primeiro contador'/>
      <Contador title='Segundo contador'/>
      <Contador title='Terceiro contador'/>
    </div>
  );
}

export default App
