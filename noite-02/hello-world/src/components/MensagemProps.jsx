import '../App.css'


function MensagemProps(props) {
  return (
    <div>
      <h1>{props.titulo}</h1>
      <p>{props.subtitulo}</p>
    </div>
  );
}

export default MensagemProps