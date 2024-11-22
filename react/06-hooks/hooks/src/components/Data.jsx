import { useState } from "react";

const Data = () => {

    let someData = 10;
    const [anotherNumber, setAnotherNumber] = useState(15);
    return (
    <div>
        <p>Valor variavel someData: {someData}</p>
        <button onClick={() => (console.log(someData=15))}>Mudar Variavel</button>
      {/* como nao há re-rendereização de componenetes o valor na tela nao muda, mas a variavel recebeu o valor de 15 */}
        <p>Valor variavel anotherNumber: {anotherNumber}</p>
        <button onClick={()=> setAnotherNumber(1)}>Mudar state</button>
    </div>
    );
};

export default Data;