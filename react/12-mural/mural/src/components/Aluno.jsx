import React from "react";
import "../App.css";

function Aluno({ foto, nome, idade,cor }) {
  return (
    <div className="aluno">
      <img src={foto} alt={nome} className="foto" />
      <h3>{nome}</h3>
      <p>{idade} anos</p>
      <p>Cor Favorita: {cor}</p>
    </div>
  );
}

export default Aluno;
