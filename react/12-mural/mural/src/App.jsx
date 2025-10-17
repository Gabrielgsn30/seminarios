import Mural from "./components/Mural"
import './App.css'

function App() {
    const alunos = [
    { id: 1, nome: "Ana", idade: 20, foto: "https://i.pravatar.cc/150?img=1"},
    { id: 2, nome: "Bruno", idade: 3, foto: "https://i.pravatar.cc/150?img=2"},
    { id: 3, nome: "Carlos", idade: 21, foto: "https://i.pravatar.cc/150?img=3"},
    { id: 4, nome: "Diego", idade: 8, foto: "https://i.pravatar.cc/150?img=4"},
    { id: 5, nome: "Fernanda", idade: 19, foto: "https://i.pravatar.cc/150?img=5"},
    { id: 6, nome: "Joao", idade: 49, foto: "https://i.pravatar.cc/150?img=6"},
    { id: 7, nome: "Julia", idade: 21, foto: "https://i.pravatar.cc/150?img=26"},
    { id: 8, nome: "Lara", idade: 22, foto: "https://i.pravatar.cc/150?img=36"},
    { id: 9, nome: "Eduarda", idade: 4, foto: "https://i.pravatar.cc/150?img=46"},
  ];

  return (
    <div className="App">
      <h1>Mural da Turma</h1>
      <Mural alunos={alunos} />
    </div>
  );
}

export default App
