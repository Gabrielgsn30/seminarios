import Mural from "./components/Mural"
import './App.css'

function App() {
    const alunos = [
    { id: 1, nome: "Ana", idade: 20, foto: "https://i.pravatar.cc/150?img=1" },
    { id: 2, nome: "Bruno", idade: 22, foto: "https://i.pravatar.cc/150?img=2" },
    { id: 3, nome: "Carla", idade: 21, foto: "https://i.pravatar.cc/150?img=3" },
    { id: 4, nome: "Diego", idade: 23, foto: "https://i.pravatar.cc/150?img=4" },
    { id: 5, nome: "Fernanda", idade: 19, foto: "https://i.pravatar.cc/150?img=5" },
    { id: 5, nome: "Joao", idade: 49, foto: "https://i.pravatar.cc/150?img=6" },
  ];

  return (
    <div className="App">
      <h1>Mural da Turma</h1>
      <Mural alunos={alunos} />
    </div>
  );
}

export default App
