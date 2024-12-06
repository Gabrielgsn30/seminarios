import React, { useState } from "react";

const Form = () => {
  // Estado para armazenar o nome digitado
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [curso, setCurso] = useState();
  const [periodo, setPeriodo] = useState();

  // Função para lidar com mudança do valor digitado
  const handleChange = (e) => {
    setName(e.target.value);
    console.log(name);
  };
// Função para lidar com o clique do botão enviar
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name,email);
    window.alert([name,email,curso,periodo]);

  };

  return (
    <div>
            <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="name">Nome:</label>
               {/* input function*/}
                <input type="text" name="name" onChange={handleChange} />
                </div>
                <div>
                <label htmlFor="email">email</label>
                {/* input inline*/}
                <input type="text" name="email" placeholder="digite seu email" onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                
                <div>
                <label htmlFor="curso">curso</label>
                {/* input inline*/}
                <input type="text" name="curso" placeholder="digite seu curso" onChange={(e) => setCurso(e.target.value)}></input>
                </div>

                <div>
                <label htmlFor="periodo">periodo</label>
                {/* input inline*/}
                <input type="text" name="periodo" placeholder="digite seu periodo" onChange={(e) => setPeriodo(e.target.value)}></input>
                </div>

                <input type="submit" value="Enviar"></input>
            </form>
    </div>
  );
};

export default Form;
