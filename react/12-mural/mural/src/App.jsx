import Mural from "./components/Mural"
import './App.css'

function App() {
    const alunos = [
    { id: 1, nome: "Ana", idade: 20, foto: "https://i.pravatar.cc/150?img=1",cor: "preto"},
    { id: 2, nome: "Bruno", idade: 3, foto: "https://i.pravatar.cc/150?img=2", cor: "branco"},
    { id: 3, nome: "Carlos", idade: 21, foto: "https://i.pravatar.cc/150?img=3", cor: "branco"},
    { id: 4, nome: "Diego", idade: 8, foto: "https://i.pravatar.cc/150?img=4", cor: "branco"},
    { id: 5, nome: "Fernanda", idade: 19, foto: "https://i.pravatar.cc/150?img=5", cor: "branco"},
    { id: 6, nome: "Joao", idade: 49, foto: "https://i.pravatar.cc/150?img=6", cor: "branco"},
    { id: 7, nome: "Jose", idade: 45, foto: "https://i.pravatar.cc/150?img=46", cor: "branco"},
    { id: 8, nome: "Juca", idade: 45, foto: "https://i.pravatar.cc/150?img=36", cor: "branco"}
  ];

  return (
    <div className="App">
      <h1>Mural da Turma</h1>
      <Mural alunos={alunos} />
    </div>
  );
}

export default App
