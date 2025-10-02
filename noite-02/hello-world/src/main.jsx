import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Mensagem  from './components/mensagem.jsx'
import MensagemProps from './components/MensagemProps.jsx'
import PrimeiroComp from './components/PrimeiroComp.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimeiroComp />
    <App />
    <Mensagem titulo="Olá Gabriel!" subtitulo="Esse é um exemplo de props no React" />
    <MensagemProps titulo="Oficina" subtitulo="React" />
    <MensagemProps titulo="Oficina React" subtitulo="Turma Noite" />
  </StrictMode>,
)
