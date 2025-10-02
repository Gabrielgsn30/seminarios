App.jsx

O que ele faz?

É o componente principal da aplicação.
Define um array de objetos alunos, cada um com:
id (identificação única),
nome,
idade,
foto.
Renderiza o título Mural da Turma.
Passa esse array de alunos como props para o componente Mural.
👉 Resumindo: o App centraliza os dados e manda para o Mural exibir.

Mural.jsx

O que ele faz?

Recebe a prop alunos do App.
Usa .map() para percorrer cada aluno do array.
Para cada aluno, renderiza um componente <Aluno />, passando:
nome={aluno.nome},
idade={aluno.idade},
foto={aluno.foto}.
Usa key={aluno.id} (boa prática para o React identificar cada item da lista).
👉 Resumindo: o Mural organiza os alunos em uma grade (grid) e delega ao componente Aluno a responsabilidade de exibir os detalhes.

Aluno.jsx

O que ele faz?

Recebe props individuais: foto, nome, idade.
Mostra um card simples com:
uma imagem circular (className="foto"),
o nome em destaque (<h3>),
e a idade (<p>).
👉 Resumindo: o Aluno é o componente mais simples, responsável por exibir um único aluno.

App.css

O que ele faz?

.App → centraliza o conteúdo.

.mural → usa CSS Grid para mostrar no máximo 3 alunos por linha.

.aluno → estiliza cada card de aluno (caixinha com sombra e borda arredondada).

.foto → garante que a imagem fique redonda (border-radius: 50%).

Fluxo

App.jsx   →  envia lista de alunos
   ↓
Mural.jsx →  organiza os alunos em grid e chama <Aluno />
   ↓
Aluno.jsx →  exibe cada aluno (foto + nome + idade)


Resumo

✅ Resumo final:

App = ponto central da aplicação, onde estão os dados.

Mural = organiza os alunos (máx. 3 por linha).

Aluno = mostra as informações de cada estudante.