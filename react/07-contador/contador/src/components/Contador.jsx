import { useState } from "react";

const Contador = ({title}) => {

    const [contador, setContador] = useState(0);
    return (
    <div>
         <button 
         onClick={()=> setContador(contador+1)}>
            {title}:{contador}
        </button>
    </div>
    );
};

export default Contador;