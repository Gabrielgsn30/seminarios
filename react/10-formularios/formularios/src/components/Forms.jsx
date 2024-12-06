import React, { useState } from "react";

const Form = () => {
  // Estado para armazenar o nome digitado
  const [name, setName] = useState();
  const [email, setEmail] = useState();


  // Função para lidar com o clique do botão
  const handleChange = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name,email);
    window.alert([name,email]);

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
                <input type="submit" value="Enviar"></input>
            </form>
    </div>
  );
};

export default Form;
