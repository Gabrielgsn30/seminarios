import React from "react";
import Aluno from "./Aluno";
import "../App.css";

function Mural({ alunos }) {
  return (
    <div className="mural">
      {alunos.map((aluno) => (
        <Aluno 
          key={aluno.id} 
          nome={aluno.nome} 
          idade={aluno.idade} 
          foto={aluno.foto} 
          cor={aluno.cor}
        />
      ))}
    </div>
  );
}

export default Mural;
