# 'Task Management' API

Este é um simples servidor de API para gerenciamento de tarefas. Ele permite que você realize operações básicas, como criar, recuperar, atualizar e excluir tarefas. O servidor foi desenvolvido usando o framework Express.js. A princípio, a ideia deste projeto é alimentar um módulo da Polybar, onde seria exibido para o usuário o número de tarefas pendentes, semelhante ao Microsoft To Do no Windows.

![Banner](https://raw.githubusercontent.com/pigor12/gerenciadordetarefas/main/bar.png)

## Pré-requisitos

Certifique-se de ter o Node.js e o npm (Node Package Manager) instalados em sua máquina antes de prosseguir.

## Instalação

1. Clone este repositório em sua máquina local:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

2. Acesse o diretório do projeto:

```bash
cd nome-do-repositorio
```

3. Instale as dependências necessárias:

```bash
npm install
```

## Uso

Para executar o servidor, utilize o seguinte comando:

```bash
npm start
```

O servidor será iniciado e estará disponível na porta especificada (padrão: 3000).

## Rotas da API

### GET /tasks

Retorna todas as tarefas cadastradas.

### POST /tasks

Cria uma nova tarefa. Envie um objeto JSON no corpo da solicitação com as seguintes propriedades:

- `name` (string): Nome da tarefa.
- `category` (string): Categoria da tarefa.
- `deadline` (string): Prazo da tarefa.
- `assignedTo` (string): Responsável pela tarefa.

### GET /tasks/:id

Retorna os detalhes de uma tarefa específica com base no ID fornecido.

### PUT /tasks/:id

Atualiza os detalhes de uma tarefa específica com base no ID fornecido. Envie um objeto JSON no corpo da solicitação com as propriedades que deseja atualizar:

- `name` (string): Novo nome da tarefa.
- `category` (string): Nova categoria da tarefa.
- `deadline` (string): Novo prazo da tarefa.
- `assignedTo` (string): Novo responsável pela tarefa.

### DELETE /tasks/:id

Exclui uma tarefa específica com base no ID fornecido.

## Exemplo de Uso

Aqui está um exemplo de como usar a API usando o comando `curl` no terminal:

1. Obter todas as tarefas:

```bash
curl http://localhost:3000/tasks
```

2. Criar uma nova tarefa:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"name":"Nova Tarefa","category":"Trabalho","deadline":"2023-06-30","assignedTo":"John Doe"}' http://localhost:3000/tasks
```

3. Obter os detalhes de uma tarefa específica (por exemplo, ID 1):

```bash
curl http://localhost:3000/tasks/1
```

4. Atualizar os detalhes de uma tarefa específica (por exemplo, ID 1):

```bash
curl -X PUT -H "Content-Type: application/json" -d '{"name":"Tarefa Atualizada","category":"Trabalho","deadline":"2023-06-30","assignedTo":"Jane Smith"}' http://localhost:3000/tasks/1
```

5. Excluir uma tarefa específica (por exemplo, ID 1):

```bash
curl -X DELETE http://localhost:3000/tasks/1
```

## Contribuição

Contribuições são bem-vindas

! Se você encontrar algum problema ou tiver sugestões de melhorias, fique à vontade para abrir uma nova issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html).
