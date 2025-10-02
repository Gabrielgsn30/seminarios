import '../App.css'


function Mensagem({ titulo, subtitulo }) {
  return (
    <div>
      <h1>{titulo}</h1>
      <p>{subtitulo}</p>
    </div>
  );
}

export default Mensagem