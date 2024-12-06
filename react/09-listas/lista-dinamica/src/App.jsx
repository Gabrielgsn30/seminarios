import { useState } from 'react'
import './App.css'

// Define o componente funcional ListaDinamica.
function ListaDinamica() {
  // Cria um estado 'inputValue' para armazenar o valor do campo de entrada.
  const [inputValue, setInputValue] = useState('');
  const [lista, setLista] = useState([]);

  // Funcao que adiciona o item na lista
  const adicionarItem = () => {
    if (inputValue.trim()) {
      // Verifica se o valor não é uma string vazia (após remover espaços em branco).
      setLista([...lista, inputValue.trim()]);
      // ... spread operator basicamente copia a list, Isso nos permite copiar rapidamente todo ou partes de um array existente para outro array nos permite acessar rapidamente o valor dar updates
      // Adiciona o item à lista, criando uma nova array com os itens anteriores e o novo item.
      setInputValue(''); // Limpa o campo de entrada após adicionar
    }
  };

  // Função que limpa a lista, removendo todos os itens.
  const limparLista = () => {
    setLista([]);  // Redefine a lista como uma array vazia.
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Lista Dinâmica</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}  // Atualiza o estado 'inputValue' sempre que o usuário digita algo no campo.
        placeholder="Digite um item" // Texto de ajuda exibido quando o campo está vazio.
        style={{ padding: '8px', width: '300px', marginRight: '10px' }}
      />
      <button onClick={adicionarItem} style={{ padding: '8px 16px', marginRight: '10px' }}> {/* Botão que chama a função 'adicionarItem' quando clicado. */}
        Adicionar
      </button>
      <button onClick={limparLista} style={{ padding: '8px 16px' }}>   {/* Botão que chama a função 'limparlista' quando clicado. */}
        Limpar Lista
      </button>

      <ul style={{ marginTop: '20px', listStyleType: 'none', padding: 0 }}>
        {lista.map((item, index) => ( // Faz um loop sobre os itens da lista e cria um <li> para cada item.
          <li key={index} style={{ marginBottom: '10px', fontSize: '18px' }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDinamica;

